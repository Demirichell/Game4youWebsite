//import React from "react";
import LeftSide from "../LeftSideBar/LeftSide";
import RightSide from "../RightSideBar/RightSide";
import NavBar from "../NavBar/NavBar";

const Home = () => {
  return (
    <div className="w-full">
      <div className="top-0 z-10 w-full bg-white">
        <NavBar></NavBar>
      </div>
      <div className="flex bg-gray-100">
        <div className="flex-auto w-[20%] fixed top-13">
          <LeftSide></LeftSide>
        </div>
        <div className="flex-auto w-[20%] fixed right-0 top-13">
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
};
export default Home;
