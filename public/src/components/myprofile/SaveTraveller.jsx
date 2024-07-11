import React, { useEffect, useRef, useState } from "react";
import { Pencil, User } from "lucide-react";

const SaveTraveller = () => {
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
      {currentPopup === "addTraveller" && (
        <div
          ref={modelRef}
          onClick={closeModel}
          className="fixed inset-0 z-10 flex justify-center items-center bg-[#000000] bg-opacity-[0.7]"
        >
          <div className="w-[862px]   max-h-[85vh]  bg-[#ffffff]  shadow-sm shadow-[#f2f2f2] rounded-xl overflow-y-auto ">
            <h1 className="px-[38px] text-[26px] font-bold text-[#000000] mt-[30px]  ">
              Add Traveller’s Info
            </h1>
            <ul className="flex justify-start items-center gap-5   border-b-[1px] border-[#e7e7e7] mb-[33px] px-[38px] sticky top-0 bg-[#ffffff] ">
              <li className="text-[18px] font-bold text-[#84129a] py-[12px] border-b-[3px] border-[#84129a] ">
                BASIC INFO
              </li>
              <li className="text-[18px] font-bold text-[#4a4a4a] py-[12px] ">
                PASSPORT
              </li>
            </ul>

            <div>
              <h1 className="text-[23px] font-bold text-[#000000] mb-[2px] px-[38px] ">
                Basic Information
              </h1>
              <p className="text-[18px] text-[#4a4a4a]  px-[38px]  ">
                Basic Info, like your email and number that you use on Personal
                Profile
              </p>
              <form action="#" className="flex  px-[38px]  py-[35px] ">
                {/* Left column */}
                <div className="flex-1 flex flex-col mr-[25px]">
                  <div className=" flex flex-col">
                    <label className="text-[18px] font-bold text-[#000000] mb-[9px] ">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="FullName"
                      className="py-[9px]  rounded-md border-[#9e9e9e]  border-[1px] ring-[#9e9e9e] ring-0 outline-none focus:ring-0 focus:border-[#9e9e9e] focus:shadow-none"
                    />
                  </div>
                  <div className=" flex flex-col">
                    <label className="text-[18px] font-bold text-[#000000] mb-[9px] mt-[26px]">
                      Email ID
                    </label>
                    <input
                      type="text"
                      id="EmailID"
                      className="py-[10px] rounded-md border-[#9e9e9e] border-[1px] focus:ring-0 focus:border-[#9e9e9e] focus:shadow-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[18px] font-bold text-[#000000] my-[9px] mt-[26px]">
                      Birthday
                    </label>
                    <select
                      id="Birthday"
                      className="py-[10px] border-[#9e9e9e] border-[1px] rounded-md focus:ring-0 focus:border-[#9e9e9e] focus:shadow-none"
                    >
                      <option
                        value=""
                        className="focus:ring-0 focus:border-[#9e9e9e] focus:shadow-none"
                      ></option>
                    </select>
                  </div>
                </div>
                {/* Right column */}
                <div className="flex-1 flex flex-col">
                  <div className="flex flex-col">
                    <label className="text-[18px] font-bold text-[#000000] mb-[9px]">
                      Gender
                    </label>
                    <select
                      id="Gender"
                      className="py-[10px] border-[#9e9e9e] border-[1px] rounded-md focus:ring-0 focus:border-[#9e9e9e] focus:shadow-none"
                    >
                      <option
                        value=""
                        className="focus:ring-0 focus:border-[#9e9e9e] focus:shadow-none"
                      ></option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[18px] font-bold text-[#000000] my-[9px] mt-[26px]">
                      Phone No
                    </label>
                    <input
                      type="text"
                      id="PhoneNo"
                      className="py-[10px] rounded-md border-[#9e9e9e] border-[1px] focus:ring-0 focus:border-[#9e9e9e] focus:shadow-none"
                    />
                  </div>
                </div>
              </form>

              <hr className="border-b-[5px] border-[#f7f7f7] mx-[38px] " />

              <h1 className="text-[23px] font-bold text-[#000000] mb-[2px] px-[38px] mt-[30px] ">
                Passprot Details
              </h1>
              <p className="text-[18px] text-[#4a4a4a]  px-[38px]  ">
                Add your Passport details for a faster flight booking experience
              </p>
              <form action="#" className="flex  px-[38px] mt-[32px]  ">
                {/* Left column */}
                <div className="flex-1 flex flex-col mr-[25px]">
                  <div className=" flex flex-col">
                    <label className="text-[18px] font-bold text-[#000000] mb-[9px]">
                      Passprot Number
                    </label>
                    <input
                      type="text"
                      id="FullName"
                      className="py-[10px] rounded-md border-[#9e9e9e] border-[1px] focus:ring-0 focus:border-[#9e9e9e] focus:shadow-none"
                    />
                  </div>
                  <div className=" flex flex-col">
                    <label className="text-[18px] font-bold text-[#000000] mb-[9px]">
                      Expiry Date
                    </label>
                    <select
                      id="Gender"
                      className="py-[10px] border-[#9e9e9e] border-[1px] rounded-md focus:ring-0 focus:border-[#9e9e9e] focus:shadow-none"
                    >
                      <option
                        value=""
                        className="focus:ring-0 focus:border-[#9e9e9e] focus:shadow-none"
                      ></option>
                    </select>
                  </div>
                </div>
                {/* Right column */}
                <div className="flex-1 flex flex-col">
                  <div className="flex flex-col">
                    <label className="text-[18px] font-bold text-[#000000] mb-[9px]">
                      Issuing Country
                    </label>
                    <select
                      id="Gender"
                      className="py-[10px] border-[#9e9e9e] border-[1px] rounded-md focus:ring-0 focus:border-[#9e9e9e] focus:shadow-none"
                    >
                      <option
                        value=""
                        className="focus:ring-0 focus:border-[#9e9e9e] focus:shadow-none"
                      ></option>
                    </select>
                  </div>
                </div>
              </form>
              <div className="flex justify-end  border-t-[1px] border-[#e7e7e7] px-[38px] mt-[71px] sticky bottom-0 bg-[#ffffff]  ">
                <button
                  className="text-[#4a4a4a] text-[18px] font-bold"
                  onClick={() => setCurrentPopup(null)}
                >
                  Cancel
                </button>
                <button className="py-[14px] px-[58px] btn-main text-[#ffffff] rounded-md ml-[41px] my-[27px] text-[20px] font-bold">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-[#ffffff] mt-[14px] rounded-lg shadow-lg  py-[30px]   ">
        <div className="bg-white border-l-[5px] border-[#c3c3c3]   ">
          <div className="flex justify-between items-center">
            <h1 className="ml-[37px] text-[30px] font-bold text-[#000000] ">
              Save Traveller(s)
            </h1>
            <button
              className="w-[164px] h-[42px] border-[1px] border-[#d6d6d6] rounded-md mr-[36px] text-[14px] text-[#008cff] font-bold flex justify-center items-center gap-1 "
              onClick={() => setCurrentPopup("addTraveller")}
            >
              <Pencil className=" w-[16px] h-[16px] mr-[7px] " />
              ADD TRAVELLER
            </button>
          </div>
          <p className="ml-[37px] mt-[10px] mb-[17px] text-[18px] text-[#4a4a4a] ">
            You have 7 Traveller(s)
          </p>
        </div>

        <div className="flex flex-col pl-[39px] mt-[38px] ">
          <div className="flex items-center gap-6  pb-[22px] border-b-2 border-[#e7e7e7] ">
            <User className="w-[44px] h-[44px] rounded-[50%] p-2 border-[1px] border-[#e7e7e7] text-[#4a4a4a]  " />
            <p className="text-[16px] text-[#000000]  ">
              John Smith{" "}
              <span className="text-[#4a4a4a] "> (MALE24, years)</span>
            </p>
            <p className="text-[14px] text-[#4a4a4a] ml-[200px] ">
              johnsmith91@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-6  py-[25px] border-b-2 border-[#e7e7e7] ">
            <User className="w-[44px] h-[44px] rounded-[50%] p-2 border-[1px] border-[#e7e7e7] text-[#4a4a4a]  " />
            <p className="text-[16px] text-[#000000]  ">
              Claire <span className="text-[#4a4a4a] "> (FEMALE16, years)</span>
            </p>
          </div>
          <div className="flex items-center gap-6  py-[25px] border-b-2 border-[#e7e7e7] ">
            <User className="w-[44px] h-[44px] rounded-[50%] p-2 border-[1px] border-[#e7e7e7] text-[#4a4a4a]  " />
            <p className="text-[16px] text-[#000000]  ">
              Vanessa{" "}
              <span className="text-[#4a4a4a] "> (FEMALE29, years)</span>
            </p>
          </div>
          <div className="flex items-center gap-6  py-[25px]  ">
            <User className="w-[44px] h-[44px] rounded-[50%] p-2 border-[1px] border-[#e7e7e7] text-[#4a4a4a]  " />
            <p className="text-[16px] text-[#000000]  ">
              Olivia <span className="text-[#4a4a4a] "> (FEMALE29, years)</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaveTraveller;
