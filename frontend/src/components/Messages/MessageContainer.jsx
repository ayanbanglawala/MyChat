import React from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { MdArrowBack } from "react-icons/md"; // Import back arrow icon

const MessageContainer = ({ setShowSidebar }) => {
  const { selectedConversation } = useConversation();

  return (
    <div className="md:min-w-[450px] h-screen lg:h-full w-screen lg:w-full flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header with Back Button */}
          <div className="bg-slate-500 px-4 py-2 mb-2 flex items-center">
            {/* Back Button for mobile view */}
            <button
              className="lg:hidden mr-2"
              onClick={() => setShowSidebar(true)} // Show sidebar when back button is clicked
            >
              <MdArrowBack className="text-white text-2xl" />
            </button>
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

// NoChatSelected Component (for no conversation selected state)
const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 John Doe</p>
        <p>Select a message to start a conversation</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
