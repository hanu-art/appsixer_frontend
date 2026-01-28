// src/pages/admin/chat/ChatMessage.jsx
const ChatMessage = ({ message }) => {
  const isAdmin = message.senderType === "admin";
  
  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // If message is sending (optimistic update)
  if (message.isSending) {
    return (
      <div className="flex justify-end mb-3 opacity-70">
        <div className="max-w-[75%]">
          <div className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm shadow-sm rounded-br-sm">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="h-1.5 w-1.5 bg-white/70 rounded-full animate-bounce"></div>
                <div className="h-1.5 w-1.5 bg-white/70 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="h-1.5 w-1.5 bg-white/70 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
              </div>
              <span>{message.message}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex ${isAdmin ? "justify-end" : "justify-start"} mb-3`}>
      <div className={`max-w-[75%] ${isAdmin ? 'ml-auto' : 'mr-auto'}`}>
        <div
          className={`px-4 py-2.5 rounded-2xl text-sm shadow-sm ${
            isAdmin
              ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-sm"
              : "bg-white text-gray-800 rounded-bl-sm border border-gray-200"
          }`}
        >
          <div className="break-words leading-relaxed">{message.message}</div>
        </div>
        
        {/* Timestamp & Status */}
        <div className={`flex items-center gap-2 mt-1 px-1 ${isAdmin ? 'justify-end' : 'justify-start'}`}>
          <span className="text-xs text-gray-500">
            {formatTime(message.createdAt)}
          </span>
          
          {/* Seen status for admin messages */}
          {isAdmin && message.seen && (
            <span className="text-xs text-blue-500">✓ Seen</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;