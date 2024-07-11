import React from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Hotel_3rd_page_cruise_page_popup = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-gray-500 ">
        {/* main  */}
        <div className="bg-[#ffffff] w-[1150px] h-[500px] rounded-[8px] border-[1px] border-[#d6d6d6] flex relative">
          {/* left side  */}
          <div className="w-[500px] h-[500px] ">
            <img
              src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/cruise_con.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          {/* right side  */}
          <div className="w-[650px] h-[500px] pl-[48px] pr-[30px]  ">
            <p className="mt-[30px]  flex justify-end items-center  ">
              <X
                size={24}
                color="#008cff"
                className="w-[30px] h-[30px] rounded-[50%] bg-[#ecf7ff] p-[9px]"
              />
            </p>
            <p className="text-[#000000] text-[18px] font-bold leading-[1.17] ">
              Coffee and Cones
            </p>
            <p className="text-[16px] leading-[1.56] text-[#4a4a4a] mt-[10px] ">
              Open for breakfast, lunch and dinner, this self-service café means
              you can dine on a variety of dishes from around the world.
            </p>
            <ul className="flex gap-[10px] mt-[9px] ">
              <li className="text-[12px] leading-[1.25] rounded-[80px] py-[7px] px-[15px] bg-[#f0f0f0] text-[#212121] ">
                Kids
              </li>
              <li className="text-[12px] leading-[1.25] rounded-[80px] py-[7px] px-[15px] bg-[#f0f0f0] text-[#212121] ">
                Restaurant
              </li>
            </ul>
          </div>
          {/* arrows  */}
          <ChevronLeft
            size={40}
            color="#f15a22"
            className="w-[48px] h-[48px] rounded-[50%] bg-[#f0f0f0] absolute top-[226px] left-[30px] shadow-md py-[7px] px-[9px] text-[50px]  "
          />
          <ChevronRight
            size={40}
            color="#f15a22"
            className=" w-[48px] h-[48px] rounded-[50%] bg-[#f0f0f0] absolute top-[226px] right-[30px]  shadow-md py-[7px] px-[9px] "
          />
        </div>
      </div>
    </>
  );
};

export default Hotel_3rd_page_cruise_page_popup;
