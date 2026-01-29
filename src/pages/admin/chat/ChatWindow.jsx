// src/pages/admin/chat/ChatWindow.jsx
import { useEffect, useRef, useState } from "react";
import {
  getConversationMessages,
  sendAdminMessage,
  assignConversation,
} from "../../../api/chat/adminChat.api";
import ChatMessage from "./ChatMessage";
import { socket } from "../../../socket/socket";

const ChatWindow = ({ conversation, messages, setMessages, onBack }) => {
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef(null);

  // 🔥 load messages on chat open
  useEffect(() => {
    if (!conversation) return;

    const load = async () => {
      const res = await getConversationMessages(
        conversation.conversationId
      );
      setMessages(res.data.data || []);
    };

    load();
  }, [conversation]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!text.trim() || sending) return;

    const msg = {
      conversationId: conversation.conversationId,
      message: text.trim(),
      senderType: "admin",
      createdAt: new Date().toISOString(),
    };

    // ✅ optimistic update
    setMessages((p) => [...p, msg]);
    setText("");
    setSending(true);

    try {
      await sendAdminMessage({
        conversationId: conversation.conversationId,
        message: msg.message,
      });

      // 🔥 socket ONLY for visitor
      socket.emit("chat:message", {
        senderRole: "admin",
        receiverVisitorId: conversation.visitorId,
        message: msg,
      });
    } finally {
      setSending(false);
    }
  };

  if (!conversation) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-400">
        Select a conversation
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-white">
      <div className="border-b p-3 flex justify-between">
        <button onClick={onBack}>←</button>
        <div>Visitor #{conversation.visitorId}</div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
        {messages.map((m, i) => (
          <ChatMessage key={i} message={m} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t p-3 flex gap-2">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={1}
          className="flex-1 border rounded px-3 py-2"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          disabled={sending}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
