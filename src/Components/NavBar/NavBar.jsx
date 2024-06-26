//import React from "react";

import NavLinks from "./NavLinks";
import UserLinks from "./UserLinks";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center bg-violet-900 border-b border-gray-100 w-full px-44 py-2">
      <div className="text-3xl font-extrabold text-gray-900 dark:text-white">
        <span className=" text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-blue-600">
          Game4You
        </span>
      </div>
      <div className="flex justify-center item-center mx-auto">
        <NavLinks></NavLinks>
      </div>
      <div>
        <UserLinks></UserLinks>
      </div>
    </div>
  );
};
export default NavBar;
