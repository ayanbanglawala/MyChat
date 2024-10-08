import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const GetConversations = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/users');
                
                // Parse JSON data once
                const data = await response.json();
                
                if (response.ok) {
                    setConversations(data);
                } else {
                    throw new Error(data.error || 'Failed to fetch conversations');
                }

            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        GetConversations();
    }, []);

    return { loading, conversations };
};

export default useGetConversations;
