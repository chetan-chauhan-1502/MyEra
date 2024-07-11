import React, { useEffect, useRef, useState } from "react";
import { Pencil, Plus } from "lucide-react";

const Profile = () => {
  // popup for
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
      {/* popup for edit profile for  */}

      {currentPopup === "edit" && (
        <div
          ref={modelRef}
          onClick={closeModel}
          className="fixed inset-0 z-10 flex justify-center items-center bg-[#000000] bg-opacity-[0.7]"
        >
          <div className="w-[640px] bg-[#ffffff] px-[38px] py-[27px] shadow-sm shadow-[#f2f2f2] rounded-xl">
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

      <div className="bg-[#ffffff] mt-[14px] rounded-lg shadow-lg  pt-[30px]   ">
        <div className="bg-white border-l-[5px] border-[#c3c3c3]   ">
          <div className="flex justify-between items-center">
            <h1 className="ml-[37px] text-[30px] font-bold text-[#000] ">
              Profile
            </h1>
            <button
              className="w-[90px] h-[42px] border-[1px] rounded-md mr-[36px] text-[14px] text-[#008cff] font-bold flex justify-center items-center"
              onClick={() => setCurrentPopup("edit")}
            >
              <Pencil className="w-[16px] h-[16px] mr-[7px] " /> EDIT
            </button>
          </div>
          <p className="ml-[37px] mt-[10px] text-[18px] text-[#4a4a4a] ">
            Basic info , for a faster booking experience
          </p>
        </div>

        <div className="flex flex-col pl-[39px] mt-[72px] ">
          <div className="flex items-center gap-32  pb-[26px] border-b-2 border-[#e7e7e7]">
            <label
              htmlFor=""
              className="text-[11px] text-[#4a4a4a]  w-[130px] "
            >
              NAME
            </label>
            <p className="border-none text-[#000000] text-start  text-bold text-[16px] cursor-pointer  ">
              John Smith
            </p>
          </div>
          <div className="flex items-center gap-32   py-[26px]  border-b-2 border-[#e7e7e7] ">
            <label
              htmlFor=""
              className="text-[11px] text-[#4a4a4a]  w-[130px]  "
            >
              BIRTHDAY
            </label>
            <p
              className="border-none text-[#008cff] text-bold text-[14px] flex items-center gap-1 cursor-pointer"
              onClick={() => setCurrentPopup("edit")}
            >
              <Plus className="w-3 font-bold cursor-pointer" />
              Add
            </p>
          </div>
          <div className="flex items-center gap-32   py-[26px]  border-b-2 border-[#e7e7e7] ">
            <label
              htmlFor=""
              className="text-[11px] text-[#4a4a4a]  w-[130px] "
            >
              GENDER
            </label>
            <p
              className="border-none text-[#008cff] text-bold text-[14px] flex items-center gap-1 cursor-pointer"
              onClick={() => setCurrentPopup("edit")}
            >
              <Plus className="w-3 font-bold cursor-pointer" />
              Add
            </p>
          </div>
          <div className="flex items-center gap-32  py-[26px]  border-b-2 border-[#e7e7e7] ">
            <label
              htmlFor=""
              className="text-[11px] text-[#4a4a4a]  w-[130px] "
            >
              MARITAL STATUS{" "}
            </label>
            <p
              className="border-none text-[#008cff] text-bold text-[14px] flex items-center gap-1 cursor-pointer"
              onClick={() => setCurrentPopup("edit")}
            >
              <Plus className="w-3 font-bold cursor-pointer" />
              Add
            </p>
          </div>
          <div className="flex items-center gap-32   py-[26px]  border-b-2 border-[#e7e7e7] ">
            <label
              htmlFor=""
              className="text-[11px] text-[#4a4a4a]  w-[130px]  "
            >
              YOUR AddRESS{" "}
            </label>
            <p
              className="border-none text-[#008cff] text-bold text-[14px] flex items-center gap-1 cursor-pointer"
              onClick={() => setCurrentPopup("edit")}
            >
              <Plus className="w-3 font-bold cursor-pointer" />
              Add
            </p>
          </div>
          <div className="flex items-center gap-32   py-[26px]  border-b-2 border-[#e7e7e7] ">
            <label
              htmlFor=""
              className="text-[11px] text-[#4a4a4a]   w-[130px] "
            >
              PINCODE
            </label>
            <p
              className="border-none text-[#008cff] text-bold text-[14px] flex items-center gap-1  cursor-pointer"
              onClick={() => setCurrentPopup("edit")}
            >
              <Plus className="w-3 font-bold cursor-pointer" />
              Add
            </p>
          </div>
          <div className="flex items-center gap-32   py-[26px]  ">
            <label
              htmlFor=""
              className="text-[11px] text-[#4a4a4a]   w-[130px] "
            >
              STATE{" "}
            </label>
            <p
              className="border-none text-[#008cff] text-bold text-[14px] flex items-center gap-1 cursor-pointer "
              onClick={() => setCurrentPopup("edit")}
            >
              <Plus className="w-3 font-bold cursor-pointer" />
              Add
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
