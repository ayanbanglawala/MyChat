import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async ({ fullName, username, password, cPassword, gender }) => {
        const success = handleaInputError({ fullName, username, password, cPassword, gender })
        if (!success) {
            return
        }

        setLoading(true);
        try {
            const res = await fetch("https://mychat-ycy8.onrender.com/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ fullName, username, password, cPassword, gender })
            })
            const data = await res.json();
            console.log(data);
            if (res.ok) {
                toast.success("Signup successful! Redirecting to login...");
                // Add redirection logic, e.g., using navigate('/login') if using react-router
            } else {
                toast.error(data.message || "Signup failed!");
            }
            if (data.error) {
                throw new Error(data.error) // rethrow the error for other error handling
            }
            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false)
        }
    }
    return { loading, signup }
}

export default useSignup

function handleaInputError({ fullName, username, password, cPassword, gender }) {
    if (!fullName || !username || !password || !cPassword || !gender) {
        toast.error("All fields are required!");
        return false;
    }
    if (password !== cPassword) {
        toast.error("Passwords do not match!");
        return false;
    }
    if (password.length < 6) {
        toast.error("Password must be at least 6 characters long!");
        return false;
    }
    return true;
}