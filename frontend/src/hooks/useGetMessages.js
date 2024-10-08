import React, { useEffect, useState } from 'react';
import useConversation from '../zustand/useConversation';

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // State for handling errors
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      if (!selectedConversation?._id) return; // Prevent fetching if no conversation is selected

      setLoading(true);
      setError(null); // Reset error state before fetching
      try {
        const res = await fetch(`/api/message/${selectedConversation._id}`);
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || 'Failed to fetch messages'); // Handle HTTP errors

        setMessages(data);
      } catch (error) {
        setError(error.message); // Update error state
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMessages(); // Call the function directly
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading, error }; // Return the error state
};

export default useGetMessages;
