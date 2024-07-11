import {
  LogIn,
  LogOut,
  MonitorSmartphone,
  Pencil,
  UserRound,
  UsersRound,
} from "lucide-react";
import React, { useState } from "react";

const ProfileLeft = () => {
  const [activeIndex, setActiveIndex] = useState(-1); // Initialize state to track active index

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index); // Toggle active index
  };
  return (
    <>
      <div className="bg-white w-[354px] h-[675px]  mr-[50px] shadow-lg rounded-lg  py-[40px] sticky top-4  ">
        <div className="w-[200px] h-[200px] flex justify-center items-center mx-auto rounded-[11px] text-[50px] text-[#ffffff] font-bold btn-main relative">
          JS
          <span className=" w-[38px] h-[38px] flex justify-center items-center  absolute left-[11.5rem] top-[8.5rem]  bg-[#9e9e9e] p rounded-[50%] text-sm border-[3px] border-[#ffffff] p-2">
            <Pencil className="cursor-pointer" />
          </span>
        </div>

        <h1 className="text-center text-[20px] text-[#000000] mt-[27px] font-bold cursor-pointer">
          John Smith
        </h1>
        <p className="text-[12px]  text-center text-[#4a4a4a] mt-[10px] cursor-pointer">
          PROFESIONAL PROFILE
        </p>

        <ul className="  flex  flex-col justify-center items-center  mt-[35px]  ">
          <li
            className={`rounded-md w-[304px]  px-[39px] text-start  text-[14px] font-extrabold flex items-center gap-[25px] h-[55px]  cursor-pointer ${
              activeIndex === 0
                ? "bg-[#e4f1ff] text-[#008cff]"
                : "bg-[#ffffff] text-[#4a4a4a]"
            } hover:bg-[#e4f1ff]`}
            onClick={() => handleClick(0)}
          >
            <UserRound
              size={28}
              strokeWidth={1.5}
              absoluteStrokeWidth
              className={`w-[25px] h-[20px]  ${
                activeIndex === 0 ? "text-[#008cff]" : "text-[#4a4a4a]"
              }`}
              color={activeIndex === 0 ? "#008cff" : "#161615"} // Set icon color dynamically
            />
            Profile
          </li>
          <li
            className={`rounded-md w-[304px] px-[39px]  text-[14px]    flex gap-[25px] items-center h-[55px]  cursor-pointer ${
              activeIndex === 1
                ? "bg-[#e4f1ff] text-[#008cff]  font-bold"
                : "bg-[#ffffff] text-[#4a4a4a]"
            } hover:bg-[#e4f1ff]`}
            onClick={() => handleClick(1)}
          >
            <LogIn
              size={28}
              color={activeIndex === 1 ? "#008cff" : "#161615"} // Set icon color dynamically
              strokeWidth={1.5}
              absoluteStrokeWidth
              className={`w-[25px] h-[20px] ${
                activeIndex === 1 ? "text-[#008cff] " : "text-[#4a4a4a]"
              }`}
            />
            Login Detail
          </li>
          <li
            className={`rounded-md w-[304px] px-[39px] text-[14px]   flex gap-[25px] items-center h-[55px]  cursor-pointer ${
              activeIndex === 2
                ? "bg-[#e4f1ff] text-[#008cff] font-bold"
                : "bg-[#ffffff] text-[#4a4a4a]"
            } hover:bg-[#e4f1ff]`}
            onClick={() => handleClick(2)}
          >
            <UsersRound
              size={28}
              color={activeIndex === 2 ? "#008cff" : "#161615"} // Set icon color dynamically
              strokeWidth={1.5}
              absoluteStrokeWidth
              className={`w-[25px] h-[20px] ${
                activeIndex === 2 ? "text-[#008cff]" : "text-[#4a4a4a]"
              }`}
            />
            Save Travellers
          </li>
          <li
            className={`rounded-md w-[304px] px-[39px] text-[14px]    flex gap-[25px] items-center h-[55px]  cursor-pointer ${
              activeIndex === 3
                ? "bg-[#e4f1ff] text-[#008cff] font-bold"
                : "bg-[#ffffff] text-[#4a4a4a]"
            } hover:bg-[#e4f1ff]`}
            onClick={() => handleClick(3)}
          >
            <MonitorSmartphone
              size={28}
              color={activeIndex === 3 ? "#008cff" : "#161615"} // Set icon color dynamically
              strokeWidth={1.5}
              absoluteStrokeWidth
              className={`w-[25px] h-[20px]  ${
                activeIndex === 3 ? "text-[#008cff]" : "text-[#4a4a4a]"
              }`}
            />
            Logged In Device
          </li>
          <li
            className={` rounded-md w-[304px]  px-[39px] text-[14px]   flex gap-[25px] items-center h-[55px]  cursor-pointer ${
              activeIndex === 4
                ? "bg-[#e4f1ff] text-[#008cff] font-bold"
                : "bg-[#ffffff] text-[#4a4a4a]"
            } hover:bg-[#e4f1ff]`}
            onClick={() => handleClick(4)}
          >
            <LogOut
              size={28}
              color={activeIndex === 4 ? "#008cff" : "#161615"} // Set icon color dynamically
              strokeWidth={1.5}
              absoluteStrokeWidth
              className={`w-[25px] h-[20px]  ${
                activeIndex === 4 ? "text-[#008cff]" : "text-[#4a4a4a]"
              }`}
            />
            Logout
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProfileLeft;
