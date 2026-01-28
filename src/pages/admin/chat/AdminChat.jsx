// src/pages/admin/chat/AdminChat.jsx
import { useEffect, useState, useRef } from "react";
import ChatInbox from "./ChatInbox";
import ChatWindow from "./ChatWindow";
import { getAdminInbox } from "../../../api/chat/adminChat.api";

const AdminChat = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [loadingInbox, setLoadingInbox] = useState(false);
  const pollingRef = useRef(null);

  const fetchInbox = async () => {
    try {
      setLoadingInbox(true);
      const res = await getAdminInbox();
      setConversations(res.data.data);
    } finally {
      setLoadingInbox(false);
    }
  };

  useEffect(() => {
    fetchInbox();

    // Simple polling for updates (every 10 seconds)
    pollingRef.current = setInterval(fetchInbox, 10000);

    return () => {
      if (pollingRef.current) {
        clearInterval(pollingRef.current);
      }
    };
  }, []);

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col">
      {/* Breadcrumb Navigation */}
      <div className="mb-4 text-sm text-gray-600">
        <a href="/admin/dashboard" className="hover:text-blue-600">Dashboard</a>
        <span className="mx-2">/</span>
        <span className="font-medium">Live Chat</span>
      </div>
      
      <div className="flex flex-1 border rounded-xl bg-white overflow-hidden shadow-sm">
        {/* LEFT: Inbox */}
        <ChatInbox
          loading={loadingInbox}
          conversations={conversations}
          selectedConversation={selectedConversation}
          onSelect={setSelectedConversation}
        />

        {/* RIGHT: Chat */}
        <div className="flex-1">
          <ChatWindow
            conversation={selectedConversation}
            onRefreshInbox={fetchInbox}
            onBack={() => setSelectedConversation(null)}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminChat;