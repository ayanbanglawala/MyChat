import React from "react";
import useConversation from "../../zustand/useConversation";
import { useNavigate } from "react-router-dom";
import { useSocketContext } from "../../context/SocketContext"; // Import the SocketContext

const Conversation = ({ conversation, emoji, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext(); // Get online users from the context
  const isSelected = selectedConversation?._id === conversation._id;
  const isOnline = onlineUsers.includes(conversation._id); // Check if the conversation user is online

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-sky-500" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar ">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="Avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
          <p className={`text-xs ${isOnline ? "text-green-500" : "text-gray-500"}`}>
            {isOnline ? "Online" : "Offline"}
          </p>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
};

export default Conversation;
