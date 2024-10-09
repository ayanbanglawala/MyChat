import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import MessageContainer from "../../components/Messages/MessageContainer";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(true); // Control sidebar visibility on mobile view

  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      {/* Sidebar: Control visibility based on screen size */}
      <div
        className={`${
          showSidebar ? "block" : "hidden"
        } lg:block w-full lg:w-full h-screen lg:h-full`}
      >
        <Sidebar setShowSidebar={setShowSidebar} />
      </div>

      {/* Message Container: Hide on mobile when sidebar is visible */}
      <div
        className={`  ${
          showSidebar ? "hidden lg:flex" : "flex"
        } justify-center`}
      >
        <MessageContainer setShowSidebar={setShowSidebar} />
      </div>
    </div>
  );
};

export default Home;
