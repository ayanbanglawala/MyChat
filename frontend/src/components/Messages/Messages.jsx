import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import { useSocketContext } from "../../context/SocketContext"; // Import your SocketContext
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const { socket } = useSocketContext(); // Get the socket from context
  const lastMessageRef = useRef(null); // Initialize the ref
  useListenMessages();

  // Effect to scroll to the last message smoothly when messages change
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Effect to listen for incoming messages
  useEffect(() => {
    if (socket) {
      socket.on("receiveMessage", (message) => {
        // Update your messages state with the new message
        // This should ideally be handled by your state management (like Zustand)
        // Assuming you have a method to add a new message
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      return () => {
        socket.off("receiveMessage"); // Cleanup listener on unmount
      };
    }
  }, [socket]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {/* Render loading skeletons */}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {/* Render messages */}
      {!loading && messages.length > 0 && messages.map((message, index) => (
        <div
          key={message._id}
          ref={index === messages.length - 1 ? lastMessageRef : null} // Only assign ref to the last message
        >
          <Message message={message} />
        </div>
      ))}

      {/* No messages found */}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
