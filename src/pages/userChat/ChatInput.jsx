import { useState } from "react";

const ChatInput = ({ onSend, disabled }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  const handleKeyDown = (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleSend();
  }
};

  return (
    <div className="p-3 border-t border-gray-800 flex gap-2">
      
      <input
  value={text}
  onChange={(e) => setText(e.target.value)}
  onKeyDown={handleKeyDown}
  placeholder="Type your message…"
  disabled={disabled}
  className="flex-1 bg-gray-900 text-white rounded-lg px-3 py-2 outline-none disabled:opacity-50"
/>

      <button
        onClick={handleSend}
        disabled={disabled}
        className="bg-blue-600 px-4 rounded-lg text-white disabled:opacity-50"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
