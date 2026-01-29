import { useEffect, useState, useRef } from "react";
import {
  getConversationMessages,
  sendAdminMessage,
  assignConversation,
} from "../../../api/chat/adminChat.api";
import ChatMessage from "./ChatMessage";
import { socket } from "../../../socket/socket";

const ChatWindow = ({ conversation, onRefreshInbox, onBack }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef(null);

  /* ---------------- FETCH MESSAGES ---------------- */
  useEffect(() => {
    if (!conversation) return;

    const fetchMessages = async () => {
      try {
        setLoading(true);
        const res = await getConversationMessages(
          conversation.conversationId
        );
        setMessages(res.data.data || []);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [conversation]);

  /* ---------------- SOCKET LISTENER ---------------- */
  useEffect(() => {
    if (!conversation) return;

    socket.on("chat:message", (data) => {
      if (
        data?.message?.conversationId === conversation.conversationId
      ) {
        setMessages((prev) => [...prev, data.message]);
      }
    });

    return () => socket.off("chat:message");
  }, [conversation]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* ---------------- SEND MESSAGE ---------------- */
  const handleSend = async () => {
    if (!text.trim() || sending) return;

    const tempId = Date.now();
    const tempMessage = {
      id: tempId,
      conversationId: conversation.conversationId,
      message: text.trim(),
      senderType: "admin",
      createdAt: new Date().toISOString(),
      isSending: true,
    };

    setMessages((prev) => [...prev, tempMessage]);
    setText("");
    setSending(true);

    try {
      await sendAdminMessage({
        conversationId: conversation.conversationId,
        message: text.trim(),
      });

      // 🔥 SOCKET EMIT (ADMIN → VISITOR)
      socket.emit("chat:message", {
        senderRole: "admin",
        receiverVisitorId: conversation.visitorId,
        message: {
          conversationId: conversation.conversationId,
          message: text.trim(),
          senderType: "admin",
          createdAt: new Date().toISOString(),
        },
      });

      const res = await getConversationMessages(
        conversation.conversationId
      );
      setMessages(res.data.data || []);
      onRefreshInbox();
    } catch (error) {
      setMessages((prev) => prev.filter((m) => m.id !== tempId));
      alert("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleAssign = async () => {
    try {
      await assignConversation(conversation.conversationId);
      onRefreshInbox();
    } catch {
      alert("Failed to assign conversation");
    }
  };

  if (!conversation) {
    return (
      <div className="h-full flex items-center justify-center text-gray-400">
        Select a conversation to start chatting
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-white">
      {/* HEADER */}
      <div className="px-4 py-3 border-b bg-gray-50 flex justify-between">
        <button onClick={onBack} className="lg:hidden">←</button>
        <div>
          <div className="font-bold">Visitor #{conversation.visitorId}</div>
          <div className="text-xs text-gray-500">
            {conversation.assignedAdminId ? "Assigned" : "Unassigned"}
          </div>
        </div>
        {!conversation.assignedAdminId && (
          <button
            onClick={handleAssign}
            className="text-sm px-3 py-1 bg-blue-600 text-white rounded"
          >
            Take chat
          </button>
        )}
      </div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
        {messages.map((m) => (
          <ChatMessage key={m.id || m.tempId} message={m} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* INPUT */}
      <div className="border-t p-3 flex gap-2">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          className="flex-1 border rounded px-3 py-2"
          placeholder="Type a message..."
          disabled={sending}
        />
        <button
          onClick={handleSend}
          disabled={!text.trim() || sending}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
