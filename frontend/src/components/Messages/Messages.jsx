import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
// import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	// useListenMessages();
	const lastMessageRef = useRef(null); // Initialize the ref

	useEffect(() => {
		// Scroll to the last message smoothly when messages change
		if (lastMessageRef.current) {
			lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [messages]);

	return (
		<div className='px-4 flex-1 overflow-auto'>
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
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
	);
};

export default Messages;
