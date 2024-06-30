import { Avatar } from "@material-tailwind/react";
import avatar from "../../assets/Images/avatar.png";
import hearticon from "../../assets/Images/hearticon.png";
import controllericon from "../../assets/Images/controllericon.png";
import addimg from "../../assets/Images/addimg.png";
import { Button } from "@material-tailwind/react";

const Main = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col py-4 w-full bg-white rounded-3xl shadow-lg">
        <div className="flex items-center border-b-2 border-gray-300 pb-4 pl-4 w-full">
          <Avatar
            size="sm"
            variant="circular"
            src={avatar}
            alt="avatar"
          ></Avatar>
          <form className="w-full">
            <div className="flex justify-between items-center">
              <div className="w-full ml-4 ">
                <input
                  type="text"
                  name="text"
                  placeholder="Whats on your mind?"
                  className="outline-none w-full bg-white rounded-md"
                />
              </div>
              <div className="mx-4"> {/* TO:DO previewImage*/}</div>
              <div className="mr-4">
                <Button variant="text" type="submit">
                  Share
                </Button>
              </div>
            </div>
          </form>
        </div>
        <span>{/* TO:DO progressBar*/}</span>
        <div className="flex justify-around items-center pt-4">
          <div className="flex items-center">
            <label
              htmlFor="addimg"
              className=" cursor-pointer flex items-center"
            >
              <img className="h-10 mb-3 mr-2" src={addimg} alt="add" />
              <input id="addimg" type="file" style={{ display: "none" }} />
            </label>
          </div>
          <div className="flex items-center">
            <img className="h-10 mb-3 mr-2" src={controllericon} alt="live" />
            <p className="font-medium text-md text-gray-700 no-underline tracking-normal leading-none">
              live
            </p>
          </div>
          <div className="flex items-center">
            <img className="h-10 mb-3 mr-2" src={hearticon} alt="feeling" />
            <p className="font-medium text-md text-gray-700 no-underline tracking-normal leading-none">
              Feeling
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-4 w-full">{/*posts */}</div>
      <div> {/* reffernce for later */} </div>
    </div>
  );
};

export default Main;
