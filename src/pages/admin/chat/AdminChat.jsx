import { useEffect, useState, useRef } from "react";
import ChatInbox from "./ChatInbox";
import ChatWindow from "./ChatWindow";
import { getAdminInbox } from "../../../api/chat/adminChat.api";
import { socket } from "../../../socket/socket";

const AdminChat = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]); // 🔥 single source for chat
  const pollingRef = useRef(null);

  /* ---------------- FETCH INBOX ---------------- */
  const fetchInbox = async () => {
    const res = await getAdminInbox();
    setConversations(res.data.data);
  };

  /* ---------------- SOCKET (ADMIN) ---------------- */
  useEffect(() => {
    fetchInbox();

    socket.connect();
    socket.emit("join", { role: "admin" });

    // 🔥 SINGLE SOCKET LISTENER
    socket.on("chat:message", (data) => {
      const msg = data?.message;
      if (!msg) return;

      // inbox always updates
      fetchInbox();

      // 🔥 update open chat in realtime
      setMessages((prev) => {
        if (
          selectedConversation &&
          msg.conversationId === selectedConversation.conversationId
        ) {
          return [...prev, msg];
        }
        return prev;
      });
    });

    // fallback polling (safe)
    pollingRef.current = setInterval(fetchInbox, 10000);

    return () => {
      socket.off("chat:message");
      clearInterval(pollingRef.current);
    };
  }, [selectedConversation]);

  /* ---------------- UI ---------------- */
  return (
    <div className="h-[calc(100vh-120px)] flex flex-col">

      {/* 🔙 BACK TO DASHBOARD */}
      <div className="mb-3">
        <button
          onClick={() => (window.location.href = "/admin/dashboard")}
          className="text-sm text-blue-600 hover:underline flex items-center gap-1"
        >
          ← Back to Dashboard
        </button>
      </div>

      {/* CHAT LAYOUT */}
      <div className="flex flex-1 border rounded-xl bg-white overflow-hidden shadow-sm">
        {/* LEFT: INBOX */}
        <ChatInbox
          conversations={conversations}
          selectedConversation={selectedConversation}
          onSelect={(conv) => {
            setSelectedConversation(conv);
            setMessages([]); // reset on switch
          }}
        />

        {/* RIGHT: CHAT WINDOW */}
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
    </div>
  );s
};

export default AdminChat;
