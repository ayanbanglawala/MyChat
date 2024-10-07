import React from "react";

const Message = (props) => {
  return (
    <div className={`chat ${props.message == "sender"?"chat-end":"chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <div className={`chat-bubble  ${ props.message == "sender"? "bg-sky-600 text-white" : "" }`}>
        It was said that you would, destroy the Sith, not join them.
      </div>
      <div className="chat-footer opacity-50">Seen at 12:46</div>
    </div>
  );
};

export default Message;
