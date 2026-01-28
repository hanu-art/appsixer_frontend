// src/pages/admin/chat/ChatWindow.jsx
import { useEffect, useState, useRef } from "react";
import {
  getConversationMessages,
  sendAdminMessage,
  assignConversation,
} from "../../../api/chat/adminChat.api";
import ChatMessage from "./ChatMessage";

const ChatWindow = ({ conversation, onRefreshInbox, onBack }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef(null);

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

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (!conversation) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-gray-400 p-8">
        <div className="text-center max-w-md">
          <div className="text-5xl mb-4 opacity-20">💬</div>
          <h3 className="font-medium text-gray-500 mb-2">No conversation selected</h3>
          <p className="text-sm text-gray-400">
            Select a conversation from the inbox to start chatting
          </p>
        </div>
      </div>
    );
  }

  const handleSend = async () => {
    if (!text.trim() || sending) return;

    const tempId = Date.now();
    const tempMessage = {
      id: tempId,
      conversationId: conversation.conversationId,
      message: text.trim(),
      senderType: "admin",
      createdAt: new Date().toISOString(),
      isSending: true
    };

    // Optimistic update
    setMessages(prev => [...prev, tempMessage]);
    setText("");
    setSending(true);

    try {
      await sendAdminMessage({
        conversationId: conversation.conversationId,
        message: text.trim(),
      });

      const res = await getConversationMessages(conversation.conversationId);
      setMessages(res.data.data || []);
      onRefreshInbox();
    } catch (error) {
      setMessages(prev => prev.filter(m => m.id !== tempId));
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
    } catch (error) {
      alert("Failed to assign conversation");
    }
  };

  // Format date for chat header
  const formatChatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleDateString([], { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Chat Header - WhatsApp style */}
      <div className="px-4 py-3 border-b bg-gray-50 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          {/* Left side: Back button + Conversation info */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="lg:hidden text-gray-600 hover:text-gray-800 hover:bg-gray-200 p-2 rounded-full transition-colors"
              title="Back to inbox"
            >
              ←
            </button>
            
            <div className="flex items-center gap-3">
              {/* Visitor Avatar */}
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  #{conversation.visitorId?.toString().slice(-2)}
                </span>
              </div>
              
              <div>
                <div className="font-bold text-gray-800">
                  Visitor #{conversation.visitorId}
                </div>
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${
                    conversation.isOnline ? 'bg-green-500' : 'bg-gray-400'
                  }`}></div>
                  <span className="text-xs text-gray-500">
                    {conversation.assignedAdminId 
                      ? `Assigned • ${conversation.assignedAdminName || 'You'}`
                      : 'Unassigned'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: Actions */}
          <div className="flex items-center gap-2">
            {/* Dashboard button - only on desktop */}
            <button
              onClick={() => window.location.href = '/admin/dashboard'}
              className="hidden md:inline-flex text-sm px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 items-center gap-1"
              title="Exit to Dashboard"
            >
              <span>←</span>
              <span>Dashboard</span>
            </button>
            
            {!conversation.assignedAdminId && (
              <button
                onClick={handleAssign}
                className="text-sm px-4 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-200 font-medium shadow-sm"
              >
                Take this chat
              </button>
            )}
            
            {conversation.assignedAdminId && conversation.assignedAdminId === 'current-admin-id' && (
              <button
                onClick={() => {/* Mark as resolved function */}}
                className="text-sm px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-lg"
              >
                ✓ Resolve
              </button>
            )}
          </div>
        </div>
        
        {/* Date separator */}
        <div className="text-center mt-2">
          <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {formatChatDate(conversation.createdAt || new Date())}
          </span>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-50 to-gray-100 p-4">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
              <p className="text-gray-400 mt-2">Loading messages...</p>
            </div>
          </div>
        ) : messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-5xl mb-4 text-gray-300">👋</div>
            <p className="text-gray-500 font-medium">Start the conversation</p>
            <p className="text-sm text-gray-400 mt-1">Say hello to your visitor!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {messages.map((m) => (
              <ChatMessage key={m.id || m.tempId} message={m} />
            ))}
            
            {/* Sending indicator */}
            {sending && (
              <div className="flex justify-end">
                <div className="max-w-[75%]">
                  <div className="px-4 py-2.5 rounded-2xl bg-blue-600/80 text-white text-sm shadow-sm rounded-br-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="h-1.5 w-1.5 bg-white/70 rounded-full animate-bounce"></div>
                        <div className="h-1.5 w-1.5 bg-white/70 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        <div className="h-1.5 w-1.5 bg-white/70 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                      </div>
                      <span>Sending...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Message Input - Modern style */}
      <div className="border-t bg-white p-3">
        <div className="flex gap-2 items-end">
          {/* Optional: Add emoji button */}
          <button className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100">
            😊
          </button>
          
          {/* Text area */}
          <div className="flex-1 bg-gray-100 rounded-2xl px-3 py-2 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500 transition-all">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
              className="w-full bg-transparent text-sm resize-none border-0 focus:ring-0 outline-none placeholder:text-gray-500"
              placeholder="Type a message..."
              disabled={sending}
            />
          </div>
          
          {/* Send button */}
          <button
            onClick={handleSend}
            disabled={!text.trim() || sending}
            className={`p-2.5 rounded-full transition-all duration-200 ${
              !text.trim() || sending
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-sm'
            }`}
            title="Send message"
          >
            {sending ? (
              <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <span className="font-bold">↑</span>
            )}
          </button>
        </div>
        
        {/* Helper text */}
        <div className="text-center mt-2">
          <span className="text-xs text-gray-400">
            Press <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-xs">Enter</kbd> to send • 
            <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-xs mx-1">Shift</kbd> + 
            <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-xs ml-1">Enter</kbd> for new line
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;