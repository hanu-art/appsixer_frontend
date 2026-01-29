// src/pages/admin/chat/AdminChat.jsx
import { useEffect, useState, useRef } from "react";
import ChatInbox from "./ChatInbox";
import ChatWindow from "./ChatWindow";
import { getAdminInbox } from "../../../api/chat/adminChat.api";
import { socket } from "../../../socket/socket";

const AdminChat = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]); // 🔥 lifted state
  const pollingRef = useRef(null);

  const fetchInbox = async () => {
    const res = await getAdminInbox();
    setConversations(res.data.data);
  };

  useEffect(() => {
    fetchInbox();

    socket.connect();
    socket.emit("join", { role: "admin" });

    // 🔥 SINGLE SOCKET LISTENER
    socket.on("chat:message", (data) => {
      const msg = data?.message;
      if (!msg) return;

      // inbox always update
      fetchInbox();

      // 🔥 if same chat is open → update chat
      if (
        selectedConversation &&
        msg.conversationId === selectedConversation.conversationId
      ) {
        setMessages((prev) => [...prev, msg]);
      }
    });

    pollingRef.current = setInterval(fetchInbox, 10000);

    return () => {
      socket.off("chat:message");
      clearInterval(pollingRef.current);
    };
  }, [selectedConversation]);

  return (
    <div className="h-[calc(100vh-120px)] flex">
      <ChatInbox
        conversations={conversations}
        selectedConversation={selectedConversation}
        onSelect={(conv) => {
          setSelectedConversation(conv);
          setMessages([]); // reset when switching chat
        }}
      />

      <ChatWindow
        conversation={selectedConversation}
        messages={messages}
        setMessages={setMessages}
        onBack={() => {
          setSelectedConversation(null);
          setMessages([]);
        }}
      />
    </div>
  );
};

export default AdminChat;
