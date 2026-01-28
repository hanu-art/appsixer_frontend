// src/pages/admin/chat/ChatInbox.jsx
const ChatInbox = ({ conversations, selectedConversation, onSelect, loading }) => {
  
  // Format time for inbox (SHORT format like WhatsApp)
  const formatInboxTime = (timestamp) => {
    if (!timestamp) return '';
    
    const date = new Date(timestamp);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const messageDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    
    const diffDays = Math.round((today - messageDate) / (1000 * 60 * 60 * 24));
    
    // For today - show time only
    if (diffDays === 0) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    
    // For yesterday
    if (diffDays === 1) {
      return 'Yesterday';
    }
    
    // For this week
    if (diffDays < 7) {
      return date.toLocaleDateString([], { weekday: 'short' });
    }
    
    // Older - show date
    return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
  };

  // Get last message preview (trim if too long)
  const getLastMessagePreview = (message) => {
    if (!message) return 'No messages yet';
    if (message.length > 35) return message.substring(0, 35) + '...';
    return message;
  };

  return (
    <div className="w-1/3 border-r overflow-y-auto bg-white flex flex-col">
      {/* Header with refresh button */}
      <div className="p-4 border-b bg-white sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg text-gray-800">Inbox</h2>
          <button
            onClick={() => window.location.reload()}
            className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full"
            title="Refresh"
          >
            ↻
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          {conversations.length} {conversations.length === 1 ? 'conversation' : 'conversations'}
        </p>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="p-4 space-y-4">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : conversations.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            <div className="text-4xl mb-4 text-gray-300">💬</div>
            <p className="text-gray-500 font-medium">No conversations</p>
            <p className="text-sm text-gray-400 mt-1">When visitors message, they'll appear here</p>
          </div>
        ) : (
          conversations.map((c) => {
            const isSelected = selectedConversation?.conversationId === c.conversationId;
            const hasUnread = c.unreadCount > 0;
            
            return (
              <div
                key={c.conversationId}
                onClick={() => onSelect(c)}
                className={`p-3 border-b cursor-pointer transition-all duration-200 ${
                  isSelected 
                    ? "bg-blue-50 border-l-4 border-l-blue-500" 
                    : "hover:bg-gray-50 border-l-4 border-l-transparent"
                } ${hasUnread ? 'bg-blue-50/60' : ''}`}
              >
                <div className="flex items-start gap-3">
                  {/* Avatar/Icon */}
                  <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                    c.assignedAdminId 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-orange-100 text-orange-600'
                  }`}>
                    <span className="font-bold text-sm">#{c.visitorId?.toString().slice(-2)}</span>
                  </div>
                  
                  {/* Conversation Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-800 text-sm truncate">
                          Visitor #{c.visitorId}
                        </span>
                        
                        {/* Status Badges */}
                        <div className="flex items-center gap-1">
                          {!c.assignedAdminId && (
                            <span className="text-[10px] px-1.5 py-0.5 bg-red-100 text-red-700 rounded-full font-medium">
                              Unassigned
                            </span>
                          )}
                          
                          {hasUnread && (
                            <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                          )}
                        </div>
                      </div>
                      
                      {/* TIME - WhatsApp style */}
                      {c.lastMessageTime && (
                        <span className={`text-xs whitespace-nowrap ${
                          hasUnread ? 'text-blue-600 font-medium' : 'text-gray-500'
                        }`}>
                          {formatInboxTime(c.lastMessageTime)}
                        </span>
                      )}
                    </div>
                    
                    {/* Last Message Preview */}
                    <p className={`text-sm truncate mt-1 ${
                      hasUnread ? 'text-gray-800 font-medium' : 'text-gray-600'
                    }`}>
                      {getLastMessagePreview(c.lastMessage)}
                    </p>
                    
                    {/* Bottom Row - Status & Info */}
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center gap-2">
                        {/* Assigned Admin */}
                        {c.assignedAdminName && (
                          <span className="text-xs text-gray-500">
                            👤 {c.assignedAdminName}
                          </span>
                        )}
                        
                        {/* Unread Count Badge */}
                        {hasUnread && (
                          <span className="text-xs px-2 py-0.5 bg-blue-500 text-white rounded-full font-medium">
                            {c.unreadCount}
                          </span>
                        )}
                      </div>
                      
                      {/* Message Status Icon (if last message is from admin) */}
                      {c.lastMessageFrom === 'admin' && (
                        <span className="text-xs text-gray-400">
                          ✓
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ChatInbox;