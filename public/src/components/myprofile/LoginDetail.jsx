import React, { useEffect, useRef, useState } from "react";

const LoginDetail = () => {
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
      {/* popup for change password   */}

      {currentPopup === "changePass" && (
        <div
          ref={modelRef}
          onClick={closeModel}
          className="fixed inset-0 z-10  flex justify-center items-center bg-[#000000] bg-opacity-[0.7] "
        >
          <div className="w-[640px] bg-[#ffffff] px-[38px] py-[27px] shadow-sm shadow-[#f2f2f2] rounded-xl ">
            <h1 className="text-[32px] font-bold text-[#000000] mb-[41px] ">
              Change Password?
            </h1>

            <form action="#" className="flex   mb-[39px]">
              <div className="flex-1 flex flex-col mr-[25px]">
                <div className="flex flex-col">
                  <label className="text-[18px] font-bold text-[#000000] my-[13px]  ">
                    Old Password
                  </label>
                  <input
                    type="password"
                    id="OldPasword"
                    placeholder="Enter Old Password"
                    className="py-[10px]  rounded-md border-[#9e9e9e] border-[1px] focus:ring-0 focus:border-[#9e9e9e] focus:shadow-none "
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[18px] font-bold text-[#000000] my-[13px] ">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="NewPassword"
                    placeholder="Enter New Password"
                    className="py-[10px] border-[#9e9e9e] border-[1px]  rounded-md focus:ring-0 focus:border-[#9e9e9e] focus:shadow-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[18px] font-bold text-[#000000] my-[13px] ">
                    Conform New Password
                  </label>
                  <input
                    type="password"
                    id="ConformNewPassword"
                    placeholder="Conform New Password"
                    className="py-[10px] border-[#9e9e9e] border-[1px]  rounded-md focus:ring-0 focus:border-[#9e9e9e] focus:shadow-none"
                  />
                </div>
              </div>
            </form>

            <div className="flex justify-end">
              <button
                className="text-[#4a4a4a] text-[18px] font-bold "
                onClick={() => setCurrentPopup(null)}
              >
                Cancel
              </button>
              <button className="py-[14px] px-[58px] bg-[#c2c2c2]  text-[#ffffff] rounded-md ml-[41px] text-[20px] font-bold  ">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-[#ffffff] mt-[14px] rounded-lg shadow-lg  pt-[26px]   ">
        <div className="  h-[87px] bg-white border-l-[5px] border-[#c3c3c3]   ">
          <h1 className="ml-[37px] text-[30px] font-bold text-[#00000] ">
            Login Details
          </h1>

          <p className="ml-[37px] mt-[10px] mb-[20px] text-[18px] text-[#4a4a4a] ">
            Manage your email address mobile number and password
          </p>
        </div>

        <div className="flex flex-col pl-[39px] mt-[55px] ">
          <div className="flex items-center gap-10  pb-[25px] border-b-2 border-[#e7e7e7] ">
            <label
              htmlFor=""
              className="text-[11px] text-[#4a4a4a]  w-[130px] "
            >
              MOBILE NUMBER
            </label>
            <p className=" text-[#000000] text-[16px]  text-start ">
              +44-795-554-9498
            </p>
            {/* <input
              type="text"
              placeholder="+44-795-554-9498"
              className="border-none text-black text-bold text-[16px]  text-start  "
            /> */}
            <p className="text-[#1a7971] flex items-center text-[14px]  ">
              <img
                src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/Done-with-green-bac.svg"
                alt=""
                className="w-[22px] h-[22px] mr-[3px]  "
              />
              Verified
            </p>
          </div>
          <div className="flex items-center gap-10  py-[25px] border-b-2 border-[#e7e7e7] ">
            <label
              htmlFor=""
              className="text-[11px] text-[#4a4a4a]  w-[130px] "
            >
              EMAIL ID
            </label>
            <p className=" text-[#000000] text-[16px] text-start  ">
              johnsmith91@gmail.com
            </p>
            {/* <input
              type="text"
              placeholder="johnsmith91@gmail.com"
              className="border-none text-black text-bold text-[16px] text-start m-0 p-0 "
            /> */}
            <p className="text-[#1a7971] flex items-center text-[14px]  ">
              <img
                src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/Done-with-green-bac.svg"
                alt=""
                className="w-[22px] h-[22px] mr-[3px]  "
              />
              Verified
            </p>
          </div>
          <div className="flex items-center justify-between gap-12  py-[25px] border-b-2 border-[#e7e7e7] ">
            <div className="flex items-center  gap-10">
              <label
                htmlFor=""
                className="text-[11px] text-[#4a4a4a]   w-[130px]  text-start m-0 p-0  "
              >
                PASSWORD
              </label>
              <p className=" text-[#000000] text-[16px]  text-start   ">
                ......
              </p>
              {/* <input
                type="password"
                placeholder="......"
                className="border-none text-black text-bold text-[16px]  text-start m-0 p-0  "
              /> */}
            </div>
            <p
              className=" text-[#008cff] text-[14px] float-end mr-[37px] cursor-pointer "
              onClick={() => setCurrentPopup("changePass")}
            >
              Change Password?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginDetail;
