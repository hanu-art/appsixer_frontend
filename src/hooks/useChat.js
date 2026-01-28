import { useEffect, useState } from "react";


import { createVisitor,
    createConversation ,
    getMessages,
    sendMessageApi
 } from "../api/chat/userChatApi"; 

const VISITOR_KEY = "appsixer_visitor_id";
const CONVO_KEY = "appsixer_conversation_id";

const useChat = () => {
  const [open, setOpen] = useState(false);
  const [visitorId, setVisitorId] = useState(null);
  const [conversationId, setConversationId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setOpen((p) => !p);

  // init on first open
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

      setLoading(false);
    };

    initChat();
  }, [open]);

   
  const sendMessage = async (text) => {
  if (!text.trim()) return;

  if (!visitorId || !conversationId) {
    console.error("Chat not initialized yet");
    return;
  }

  const payload = {
    conversationId,
    senderType: "visitor",
    senderId: visitorId,
    message: text,
  };

  setMessages((p) => [
    ...p,
    { message: text,
         senderType: "visitor",
    
           temp: true },
  ]);

  await sendMessageApi(payload);
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
