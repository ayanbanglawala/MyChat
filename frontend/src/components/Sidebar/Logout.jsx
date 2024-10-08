import React from 'react';
import { LuLogOut } from "react-icons/lu";
import useLogout from '../../hooks/useLogout.js';

const Logout = () => {
  const { loading, logout } = useLogout();

  return (
    <div className='mt-auto'>
      {!loading ? (
        <LuLogOut 
          className='w-6 h-6 text-white cursor-pointer' 
          onClick={logout} 
        />
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  );
};

export default Logout;
