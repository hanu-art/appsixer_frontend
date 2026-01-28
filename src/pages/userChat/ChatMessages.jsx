const ChatMessages = ({ messages, loading }) => {
  
  const formatTime = (date) =>
  new Date(date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  
    return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm text-white">
      {/* UI only greeting */}
      <div className="bg-gray-800 rounded-xl px-3 py-2 w-fit">
        Hi 👋 How can we help you today?
      </div>

      {loading && <p className="text-gray-400">Loading…</p>}

     {messages.map((m, i) => (
  <div
    key={i}
    className={`max-w-[75%] px-3 py-2 rounded-xl ${
      m.senderType === "visitor"
        ? "bg-blue-600 ml-auto"
        : "bg-gray-700"
    }`}
  >
    <p>{m.message}</p>

    {m.createdAt && (
      <p className="text-[10px] text-gray-200 text-right mt-1 opacity-70">
        {formatTime(m.createdAt)}
      </p>
    )}
  </div>
))}
    </div>
  );
};

export default ChatMessages;
