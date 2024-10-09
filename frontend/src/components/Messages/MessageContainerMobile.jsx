import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainerMobile = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex h-screen w-screen justify-center rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg  bg-opacity-0">
      <div className="md:min-w-[450px] flex flex-col">
        
          <>
            {/* Header */}
            <div className="bg-slate-500 px-4 py-2 mb-2">
              <span className="label-text">To:</span>{" "}
              <span className="text-gray-900 font-bold">
                {selectedConversation.fullName}
              </span>
            </div>

            <Messages />
            <MessageInput />
          </>
      </div>
    </div>
  );
};
export default MessageContainerMobile;

