import { Avatar } from "@material-tailwind/react";
import avatar from "../../assets/Images/avatar.png";
import hearticon from "../../assets/Images/hearticon.png";
import comment from "../../assets/Images/comment.png";
import delet from "../../assets/Images/delete.png";

//import { db } from "../firebase/firebase";

const PostCard = ({ uid, id, logo, name, email, text, image, timestamp }) => {
  return (
    <div className="mb-4">
      <div className="flex flex-col py-4 bg-white rounded-t-3xl">
        <div className="flex items-center pb-4 ml-2">
          <Avatar
            size="sm"
            variant="circular"
            alt="avatar"
            src={logo || avatar}
          ></Avatar>
          <div className="flex flex-col">
            <p className="ml-4 py-2 font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
              {email}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="ml-4 py-2 font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
              Published:{timestamp}
            </p>
          </div>
          {/*addFriendImage*/}
        </div>
        <div>
          <p className="ml-4 pb-4 font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
            {text}
          </p>
        </div>
        {image && (
          <img className="h-[500px] w-full" src={image} alt="post"></img>
        )}
      </div>
      <div className="flex justify-around items-start pt-4">
        <button className="flex items-center cursor-pointer rounded-lg p-2 hover:bg-gray-100">
          <img className="h-8 mr-4" src={hearticon} alt="like" />
          {/** <p>display likes</p> */}
        </button>
        <div className="flex items-center cursor-pointer rounded-lg p-2 hover:bg-gray-100">
          <div className="flex items-center cursor-pointer">
            <img className="h-8 mr-4" src={comment} alt="comment" />
            <p className="font-roboto font-medium text-md text-gray-700  no-underline tracking-normal leading-none">
              comments
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <img className="h-8 mr-4" src={delet} alt="delete" />
          <p className="font-roboto font-medium text-md text-gray-700  no-underline tracking-normal leading-none">
            delete
          </p>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
