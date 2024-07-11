import { Search } from "lucide-react";
import React from "react";

const HotellistSubHeader = () => {
  return (
    <>
      <div className="w-full  bg-[#cae5fe] border-[1px] border-[#8cc9f9] ">
        <div className="container mx-auto h-[50px] flex items-center ">
          <p className="text-[#000000] font-bold mr-[115px] leading-[1.19] ">
            SORT BY:
          </p>

          <ul className="flex items-center  gap-[114px]  ">
            <li className=" border-b-[2px]  border-[#1192e8]">
              <p className=" text-[14px]  text-[#1192e8] font-bold py-[17px] leading-[1.14] cursor-pointer ">
                Popular
              </p>
            </li>
            <li>
              <p className=" text-[14px] text-[#292828] font-bold py-[17px] leading-[1.14] cursor-pointer ">
                User Rating
                <span className="text-[#707070]  font-normal ">
                  (Highest First)
                </span>
              </p>
            </li>
            <li>
              <p className=" text-[14px]  text-[#292828] font-bold py-[17px] leading-[1.14] cursor-pointer ">
                Price
                <span className="text-[#707070] font-normal ">
                  (Highest First)
                </span>
              </p>
            </li>
            <li>
              <p className=" text-[14px] text-[#292828] font-bold py-[17px]  leading-[1.14] cursor-pointer ">
                Price
                <span className="text-[#707070] font-normal ">
                  (Lowest First)
                </span>
              </p>
            </li>
          </ul>

          <label className="w-[250px] h-[36px] bg-[#ffffff] p-[10px]  flex items-center gap-[5px] rounded-[4px] ml-[65px] cursor-pointer ">
            <Search size={17} color="#000000" />
            <input
              type="text"
              placeholder="Search for locality / hotel name "
              className="w-full text-[14px] bg-[#ffffff]   border-none focus:ring-0 m-0 p-0 leading-[1.14]  "
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default HotellistSubHeader;
