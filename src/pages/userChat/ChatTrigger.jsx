import useChat from "../../hooks/useChat";
import ChatPopup from "./ChatPopup";

const ChatTrigger = () => {
  const chat = useChat();

  return (
    <>
      <button
        onClick={chat.toggleChat}
        className="fixed bottom-6 right-6 z-[9999] rounded-full bg-black text-white px-5 py-3 shadow-lg"
      >
        Talk to us
      </button>

      {chat.open && <ChatPopup chat={chat} />}
    </>
  );
};

export default ChatTrigger;
