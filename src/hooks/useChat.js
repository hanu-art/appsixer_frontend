import { useEffect, useState } from "react";
import {
  createVisitor,
  createConversation,
  getMessages,
  sendMessageApi,
} from "../api/chat/userChatApi";
import { socket } from "../socket/socket"; // ✅ ADD

const VISITOR_KEY = "appsixer_visitor_id";
const CONVO_KEY = "appsixer_conversation_id";

const useChat = () => {
  const [open, setOpen] = useState(false);
  const [visitorId, setVisitorId] = useState(null);
  const [conversationId, setConversationId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setOpen((p) => !p);

  // 🔹 INIT CHAT (unchanged logic)
  useEffect(() => {
    if (!open) return;

    const initChat = async () => {
      setLoading(true);

      let vId = localStorage.getItem(VISITOR_KEY);
      let cId = localStorage.getItem(CONVO_KEY);

      if (!vId) {
        const vRes = await createVisitor();
        vId = vRes.data.data.visitorId;
        localStorage.setItem(VISITOR_KEY, vId);
      }

      if (!cId) {
        const cRes = await createConversation(Number(vId));
        cId = cRes.data.data.conversationId;
        localStorage.setItem(CONVO_KEY, cId);
      }

      setVisitorId(Number(vId));
      setConversationId(Number(cId));

      const msgRes = await getMessages(cId);
      setMessages(msgRes.data.data || []);

      /* ✅ SOCKET CONNECT + JOIN (ADD ONLY THIS) */
      socket.connect();
      socket.emit("join", {
        role: "visitor",
        visitorId: Number(vId),
      });

      setLoading(false);
    };

    initChat();

    return () => {
      socket.off("chat:message");
    };
  }, [open]);

  // 🔹 SOCKET LISTENER (NEW)
  useEffect(() => {
    socket.on("chat:message", (data) => {
      // admin → visitor
      setMessages((prev) => [...prev, data]);
    });

    return () => socket.off("chat:message");
  }, []);

  // 🔹 SEND MESSAGE (API SAME + socket emit after success)
  const sendMessage = async (text) => {
    if (!text.trim()) return;
    if (!visitorId || !conversationId) return;

    const payload = {
      conversationId,
      senderType: "visitor",
      senderId: visitorId,
      message: text,
    };

    // optimistic UI (tera hi logic)
    setMessages((p) => [
      ...p,
      { message: text, senderType: "visitor", temp: true },
    ]);

    const res = await sendMessageApi(payload);
    const savedMessage = res.data.data;

    // ✅ SOCKET EMIT (ADD THIS ONLY)
    socket.emit("chat:message", {
      senderRole: "visitor",
      receiverAdminId: savedMessage.adminId,
      message: savedMessage,
    });
  };

  return {
    open,
    toggleChat,
    messages,
    sendMessage,
    loading,
  };
};

export default useChat;
