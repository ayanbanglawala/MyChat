import React, { useState } from 'react';
import useConversation from '../zustand/useConversation';
import useGetMessages from './useGetMessages'; // Import the `useGetMessages` hook

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation } = useConversation();
  const { getMessages } = useGetMessages(); // Destructure `getMessages` from `useGetMessages`

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/message/send/${selectedConversation._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      // Refresh the messages list after sending
      getMessages();

    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
