import Message from "./Message";

const Messages = () => {
	return (
		<div className='px-4 flex-1 overflow-auto'>
			<Message message="sender"/>
			<Message message="receiver"/>
			<Message message="sender"/>
			<Message message="receiver"/>
			<Message message="sender"/>
			<Message message="receiver"/>
			<Message message="sender"/>
			<Message message="receiver"/>
			<Message message="sender"/>
			<Message message="receiver"/>
		</div>
	);
};
export default Messages;