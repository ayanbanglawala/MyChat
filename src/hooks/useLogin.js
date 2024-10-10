import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async ({ username, password }) => {
        const success = handleaInputError(username, password)
        if (!success) {
            return
        }
        setLoading(true)
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await res.json();

            if (res.ok) {
                toast.success('Login successful! Redirecting to chat...');
                localStorage.setItem("chat-user", JSON.stringify(data))
                setAuthUser(data)
            } else {
                toast.error(data.message || 'Login failed!');
            }

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return { loading, login };
}

export default useLogin;

function handleaInputError(username, password) {
    if (!username || !password) {
        toast.error("All fields are required!");
        return false;
    }
    return true;
}