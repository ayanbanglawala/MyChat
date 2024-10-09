import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation}= useConversation();
  const {conversations}= useGetConversations();
  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(!search) return;
    if (search.length < 3) {
      return toast.error("Search must be at least 3 characters");
    }
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
    if (conversation) {
      setSelectedConversation(conversation)
      setSearch('');
    }else{
      toast.error('No such user found!');
    }
  }
  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
        <input type="text" placeholder="Search..." className='input input-bordered rounded-full'
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
        <button className='btn btn-circle bg-sky-500 text-white' type='submit'>
            <FaSearch className='text-lg'/>
        </button>
    </form>     
  )
}

export default SearchInput
