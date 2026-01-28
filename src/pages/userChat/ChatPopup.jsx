import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

const ChatPopup = ({ chat }) => {
  const { messages, sendMessage, loading, toggleChat } = chat;

  return (
    <div className="fixed bottom-20 right-1/2 translate-x-1/2 sm:right-6 sm:translate-x-0
      w-[90%] sm:w-[380px] h-[520px] bg-[#0f0f0f] rounded-2xl shadow-2xl flex flex-col z-50">

      <ChatHeader onClose={toggleChat} />

      <ChatMessages messages={messages} loading={loading} />

      <ChatInput
        onSend={sendMessage}
        disabled={loading}
      />
    </div>
  );
};

export default ChatPopup;
