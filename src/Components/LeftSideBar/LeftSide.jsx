import { Tooltip } from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";
import game1 from "../../assets/Images/game1.png";

import location from "../../assets/Images/location.png";
import gamingcontroller from "../../assets/Images/gamingcontroller.png";
import avatar from "../../assets/Images/avatar.png";
import discordlogo from "../../assets/Images/discordlogo.png";
import instagramlogo from "../../assets/Images/instagramlogo.png";

const LeftSide = () => {
  return (
    <div className="flex flex-col h-screen bg-white pb-4 border-2 rounden-r-xl shadow-lg">
      <div className="flex flex-col items-center relative">
        <img className="h-28 w-full rounded-r" src={game1} alt="game" />
        <div className="absolute -bottom-4 ">
          <Tooltip content="Profile" placement="topj">
            <Avatar src={avatar} size="xs" alt="Avatar"></Avatar>
          </Tooltip>
        </div>
      </div>
      <div className="flex flex-col items-center pt-6">
        <p className="font-medium text-md text-gray-600 no-underline tracking-normal leading-none">
          User email
        </p>
        <p className="font-medium text-xs text-gray-600 no-underline tracking-normal leading-none">
          Access exclusive tools & insight
        </p>
        <p className="font-medium text-sm text-gray-600 no-underline tracking-normal leading-none py-2">
          Try premium for mee
        </p>
      </div>
      <div className="flex flex-col items-center pl-2">
        <div className="flex items-center pb-4">
          <img className="h-10 " src={location} alt="location" />
          <p className="font-bold text-lg no-underline tracking-normal leading-none">
            Nijmegen
          </p>
        </div>
        <div className="flex items-center pb-4">
          <img className="h-10 " src={gamingcontroller} alt="" />
          <p className="font-bold text-lg no-underline tracking-normal leading-none">
            React Developer
          </p>
        </div>
        <div className="flex justify-center items-center pt-4">
          <p className="font-bold text-md text-[#0177b7] no-underline tracking-normal leading-none">
            Events
          </p>
          <p className="font-bold text-md text-[#0177b7] no-underline tracking-normal leading-none mx-2">
            Groups
          </p>
          <p className="font-bold text-md text-[#0177b7] no-underline tracking-normal leading-none">
            Follow
          </p>
          <p className="font-bold text-md text-[#0177b7] no-underline tracking-normal leading-none mx-2">
            more
          </p>
        </div>
      </div>
      <div className="ml-2">
        <p className="font-bold text-lg no-underline tracking-normal leading-none py-2">
          Social profiles
        </p>
        <div className="flex items-center">
          <img className="h-10 mb-3 mr-2" src={discordlogo} alt="discord" />
          <p className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-blue-500 no-underline tracking-normal leading-none py-2">
            Social network
          </p>
        </div>
        <div className="flex items-center">
          <img
            className="h-10 mb-3 mr-2"
            src={instagramlogo}
            alt="instagramlogo"
          />
          <p className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-blue-500 no-underline tracking-normal leading-none py-2">
            Social network
          </p>
        </div>
      </div>
    </div>
  );
};
export default LeftSide;
