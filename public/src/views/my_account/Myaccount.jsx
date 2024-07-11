import React, { useState } from "react";
import "./myaccount.css";
import { ChevronRight, Search, ChevronsUp } from "lucide-react";

const Myaccount = () => {
  const [toggleState, setToggleState] = useState(1);
  const [accountBgColor, setAccountBgColor] = useState("upcoming_bg"); 
  const [textColor,setTextColor]= useState(false);



  // Function to toggle active tab
  const 
  toggleTab = (index) => {
    setToggleState(index);

    switch (index) {
      case 1:
        setAccountBgColor("upcoming_bg"); // Upcoming tab color
        break;
      case 2:
        setAccountBgColor("cancel_bg"); // Cancelled tab color
        break;
      case 3:
        setAccountBgColor("complete_bg"); // Completed tab color
        break;
      default:
    }
  };

  // Function to get image source based on toggleState
  const getImageSrc = (index) => {
    switch (index) {
      case 1:
        return toggleState === 1 
          ? "https://todblobstore.blob.core.windows.net/img-new-cdn/svg/upcoming-active-icon.svg"
          : "https://todblobstore.blob.core.windows.net/img-new-cdn/svg/upcoming-icone.svg";
      case 2:
        return toggleState === 2 
          ? "https://todblobstore.blob.core.windows.net/img-new-cdn/svg/cancle-active-icon.svg"
          : "https://todblobstore.blob.core.windows.net/img-new-cdn/svg/cancle-icon.svg";
      case 3:
        return toggleState === 3 
          ? "https://todblobstore.blob.core.windows.net/img-new-cdn/svg/completed-active-icon.svg"
          : "https://todblobstore.blob.core.windows.net/img-new-cdn/svg/completed-icon.svg";
      default:
        return "";
    }
  };

  return (
    <>
      <div className={`account_bg h-[261px] flex ${accountBgColor}`}>
        <div className="container mx-auto">
          <div className="flex justify-between gap-10">
            <ul className="flex px-[34px] py-[27px] text-[16px] gap-3">
              <li className="flex">My Account </li>
              <ChevronRight className="w-[18px]" />
              <li>My Trips</li>
            </ul>
            <div className="px-[6px] py-[17px] flex gap-1">
              <input
                type="text"
                placeholder="Search for a booking"
                className="text-[12px] border-white rounded-[2px]"
                required
              />
              <span className="py-[14px] btn-main px-[10px] rounded-[3px] text-white">
                <Search />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className=" container bg-white mx-auto h-[500px] rounded-b-lg shadow-lg rounded-t-[10px] relative bottom-[180px]">
        {/* Active tabs */}
        <div className="myaccount-list  flex text-[16px]  items-center justify-normal gap-[19px] px-[65px] py-[40px] shadow-lg "> 
          <p
            className=  {` flex ${toggleState === 1 ? " active" : ""}`}
            onClick={() => toggleTab(1)}
          >
            <img
              src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/upcoming-active-icon.svg"
              alt=""
              width={25}  
              
              className=""
            />
            <span className="flex items-center justify-normal ml-[10px]">UPCOMING</span>
          </p>
          <p
            className={` flex  ${toggleState === 2 ? "  active " : ""}`}
            onClick={() => toggleTab(2)}
          >
            <img
              src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/cancle-icon.svg"
              alt=""
              width={35}  
             
              className=""
            />
            <span className="flex items-center justify-normal ml-[10px]">CANCELLED</span>
          </p>
          <p
            className={` flex  ${toggleState === 3 ? "active " : ""}`}
            onClick={() => toggleTab(3)}
          >
            <img
              src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/completed-active-icon.svg"
              alt=""
              width={25}  
             
              
            />
            <span className="flex items-center  ml-[10px]  justify-normal 
              ">COMPLETED</span>
          </p>
        </div>

        {/* Active content based on toggleState */}
        <div className="px-[137px] py-[100px]">
          {toggleState === 1 && (
            <div className="flex">
              <img
                src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/completed-img.png"
                alt=""
                className="me-2"
              />
              <div className="px-[70px]">
                <p className="mb-[16px] text-[22px] font-bold tracking-tight leading-normal text-left text-gray-700">
                  Looks empty you've no upcoming bookings.
                </p>
                <p className="mt-[16px] text-xs tracking-tight leading-normal text-left text-gray-700">
                  When you book a trip, you will see your itinerary here.
                </p>
                <button
                  type="button"
                  className="py-[10px] px-[50px] mt-[20px] rounded-[21px] btn-main text-white text-sm font-bold tracking-wider text-left bg-[#eb6206]"
                >
                  PLAN A TRIP
                </button>
              </div>
            </div>
          )}
          {toggleState === 2 && (
            <div className="content">
               <div className="flex">
              <img
                src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/cancel-img.png"
                alt=""
                
                className="me-2"
              />
              <div className="px-[70px]">
                <p className="mb-[16px] text-[22px] font-bold tracking-tight leading-normal text-left text-gray-700">
                  Looks empty you've no upcoming bookings.
                </p>
                <p className="mt-[16px] text-xs tracking-tight leading-normal text-left text-gray-700">
                  When you book a trip, you will see your itinerary here.
                </p>
                <button
                  type="button"
                  className="py-[10px] px-[50px] mt-[20px] rounded-[21px] btn-main text-white text-sm font-bold tracking-wider text-left bg-[#eb6206]"
                >
                  PLAN A TRIP
                </button>
              </div>
            </div>
            </div>
          )}
          {toggleState === 3 && (
            <div className="content">
               <div className="flex">
              <img
                src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/upcoming-img%20(1).png"
                alt=""
                className="me-2"
              />
              <div className="px-[70px]">
                <p className="mb-[16px] text-[22px] font-bold tracking-tight leading-normal text-left text-gray-700">
                  Looks empty you've no upcoming bookings.
                </p>
                <p className="mt-[16px] text-xs tracking-tight leading-normal text-left text-gray-700">
                  When you book a trip, you will see your itinerary here.
                </p>
                <button
                  type="button"
                  className="py-[10px] px-[50px] mt-[20px] rounded-[21px] btn-main text-white text-sm font-bold tracking-wider text-left bg-[#eb6206]"
                >
                  PLAN A TRIP
                </button>
              </div>
            </div>
            </div>
          )}
        </div>

        {/* Back to top button */}
        <div className="btn py-[70px] flex justify-end">
          <button
            type="button"
            className="bg-white gap-3 shadow-xl px-[36px] py-[23px] flex rounded-[35px] text-[#0084ff] font-bold"
          >
            <ChevronsUp /> Back To Top
          </button>
        </div>
      </div>
    </>
  );
};

export default Myaccount;
  