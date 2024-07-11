import React, { useEffect, useRef, useState } from "react";
import Profile from "../../components/myprofile/Profile";
import LoginDetail from "../../components/myprofile/LoginDetail";
import SaveTraveller from "../../components/myprofile/SaveTraveller";
import LoginDevice from "../../components/myprofile/LoginDevice";
import MyProfileBreadcrumb from "../../components/myprofile/MyProfileBreadcrumb";
import CompleteProfile from "../../components/myprofile/CompleteProfile";
import ProfileLeft from "../../components/myprofile/ProfileLeft";

const MyProfile = () => {
  // for popup

  const [currentPopup, setCurrentPopup] = useState(null);
  const modelRef = useRef();

  const closeModel = (e) => {
    if (modelRef.current === e.target) {
      setCurrentPopup(null);
    }
  };

  useEffect(() => {
    if (currentPopup !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [currentPopup]);

  return (
    <>
      {/* popup  */}

      {currentPopup === "edit" && (
        <div
          ref={modelRef}
          onClick={closeModel}
          className="fixed inset-0 z-10 flex justify-center items-center bg-[#000000] bg-opacity-[0.7]"
        >
          <div className="w-[640px] h-[640px] bg-[#ffffff] px-[38px] py-[27px] shadow-sm shadow-[#f2f2f2] rounded-xl">
            <h1 className="text-[32px] font-bold text-[#000000] mb-[41px]">
              Edit Profile
            </h1>
            <form action="#" className="flex mb-[39px]">
              {/* Left column */}
              <div className="flex-1 flex flex-col mr-[25px]">
                <div className=" flex flex-col">
                  <label className="text-[18px] font-bold text-[#000000] my-[13px]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="FullName"
                    className="py-[10px] rounded-md border-[#9e9e9e] border-[1px] focus:ring-0 focus:border-[#9e9e9e] focus:shadow-none "
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[18px] font-bold text-[#000000] my-[13px]">
                    Gender
                  </label>
                  <select
                    id="Gender"
                    className="py-[10px] border-[#9e9e9e] border-[1px] rounded-md focus:ring-0 focus:border-[#9e9e9e] focus:shadow-none "
                  >
                    <option
                      value=""
                      className="focus:ring-0 focus:border-[#9e9e9e] focus:shadow-none "
                    ></option>
                  </select>
                </div>
                <div className=" flex flex-col">
                  <label className="text-[18px] font-bold text-[#000000] my-[13px]">
                    Your Address
                  </label>
                  <input
                    type="text"
                    id="YourAddress"
                    className="py-[10px] border-[#9e9e9e] border-[1px] rounded-md   focus:ring-0 focus:border-[#9e9e9e] focus:shadow-none  "
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[18px] font-bold text-[#000000] my-[13px]">
                    State
                  </label>
                  <select
                    id="State"
                    className="py-[10px] border-[#9e9e9e] border-[1px] rounded-md focus:ring-0 focus:border-[#9e9e9e] focus:shadow-none "
                  >
                    <option value=""></option>
                  </select>
                </div>
              </div>
              {/* Right column */}
              <div className="flex-1 flex flex-col">
                <div className="flex flex-col">
                  <label className="text-[18px] font-bold text-[#000000] my-[13px]">
                    Birthday
                  </label>
                  <select
                    id="Birthday"
                    className="py-[10px] border-[#9e9e9e] border-[1px] rounded-md focus:ring-0 focus:border-[#9e9e9e] focus:shadow-none "
                  >
                    <option value=""></option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-[18px] font-bold text-[#000000] my-[13px]">
                    Marital Status
                  </label>
                  <select
                    id="MaritalStatus"
                    className="py-[10px] border-[#9e9e9e] border-[1px] rounded-md focus:ring-0 focus:border-[#9e9e9e] focus:shadow-none "
                  >
                    <option value=""></option>
                  </select>
                </div>
                <div className=" flex flex-col">
                  <label className="text-[18px] font-bold text-[#000000] my-[13px]">
                    Pincode
                  </label>
                  <input
                    type="text"
                    id="Pincode"
                    className="py-[10px] border-[#9e9e9e] border-[1px] rounded-md focus:ring-0 focus:border-[#9e9e9e] focus:shadow-none "
                  />
                </div>
              </div>
            </form>
            <div className="flex justify-end">
              <button
                className="text-[#4a4a4a] text-[18px] font-bold"
                onClick={() => setCurrentPopup(null)}
              >
                Cancel
              </button>
              <button className="py-[14px] px-[58px] btn-main text-[#ffffff] rounded-md ml-[41px] text-[20px] font-bold">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      {/* main  */}
      <div className="bg-[#f2f2f2] ">
        <MyProfileBreadcrumb />

        {/* SubMain  */}
        <div className="container mx-auto flex  relative bottom-[140px] ">
          {/* left side  */}
          <ProfileLeft />
          {/* Right side  */}
          <div className="bg-[#f2f2f2] w-[915px]  ">
            <CompleteProfile />
            <Profile />
            <LoginDetail />
            <SaveTraveller />
            <LoginDevice />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
