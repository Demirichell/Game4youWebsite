import { useState } from "react";
import game1 from "../../assets/Images/game1.png";

const RightSide = () => {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col h-screen bg-white shadow-lg border-2 rounded-l r-xl">
      <div className="flex flex-col items-center relative pt-10">
        <img className="h-48 rounded-md" src={game1} alt="" />
      </div>
      <p className="font-normal text-sm text-gray-700 max-w-fit no-underline tracking-normal leading-tight py-2 mx-2">
        I love Stardew Valley because it offers a perfect blend of farming,
        adventure, and community. The games charming pixel art and relaxing
        music create a soothing atmosphere. The freedom to design my farm,
        develop relationships with villagers, and explore the mines keeps me
        engaged. Its simple yet deep mechanics make every day in the game
        fulfilling and enjoyable.
      </p>
      <div className="mx-2 mt-10">
        <p className="font-medium text-sm text-gray-700  no-underline tracking-normal leading-none">
          Friends:
        </p>
        <input
          className="border-0 outline-none mt-4"
          name="input"
          value={input}
          placeholder="Search Gamers"
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
};
export default RightSide;
