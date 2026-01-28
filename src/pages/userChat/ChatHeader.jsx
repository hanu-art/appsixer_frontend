const ChatHeader = ({ onClose }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 text-white">
      <div>
        <h3 className="text-sm font-semibold">Talk to us</h3>
        <p className="text-xs text-gray-400">
          We typically reply in a few minutes
        </p>
      </div>

      <button onClick={onClose} className="text-gray-400 hover:text-white">
        ✕
      </button>
    </div>
  );
};

export default ChatHeader;
