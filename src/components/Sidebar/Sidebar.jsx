import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import Logout from "./Logout";

const Sidebar = ({ setShowSidebar }) => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col h-screen lg:h-full w-screen lg:w-full">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations setShowSidebar={setShowSidebar} />
      <Logout />
    </div>
  );
};

export default Sidebar;
