import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import MessageContainer from "../../components/Messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg  bg-opacity-0">
      <Sidebar />
      <div className="w-full hidden lg:flex h-full flex justify-center">
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
