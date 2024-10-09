import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import { Link } from "react-router-dom";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log(conversations);

  return (
    <>
      <div className="py-2 hidden lg:flex flex-col overflow-auto">
        {conversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIdx={idx === conversations.length - 1}
          />
        ))}

        {loading ? (
          <span className="loading loading-spinner mx-auto"></span>
        ) : null}
      </div>
      <div className="py-2 flex lg:hidden flex-col overflow-auto">
        <Link to={"/message"}>
          {conversations.map((conversation, idx) => (
            <Conversation
              key={conversation._id}
              conversation={conversation}
              emoji={getRandomEmoji()}
              lastIdx={idx === conversations.length - 1}
            />
          ))}
        </Link>

        {loading ? (
          <span className="loading loading-spinner mx-auto"></span>
        ) : null}
      </div>
    </>
  );
};

export default Conversations;
