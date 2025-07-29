import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
//   const navigate = useNavigate(); 

  // Logout function
  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://my-chat-two-drab.vercel.app/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      // Remove user data from localStorage
      localStorage.removeItem("chat-user");

      // Clear user context
      setAuthUser(null);
      
      toast.success("Logged out successfully!");
      setAuthUser(null);
    //   navigate("/login");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }

    

  };

  // Return both loading and logout function
  return { loading, logout };
};

export default useLogout;
