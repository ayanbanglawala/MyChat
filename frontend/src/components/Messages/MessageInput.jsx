import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 pr-10 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
        />
        <button
          type="submit"
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white"
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
