import { Plus } from 'lucide-react'
import React from 'react'

const CompleteProfile = () => {
  return (
   <>
     <div className="border-2 rounded-lg px-[37px] py-[29px] shadow-lg bg-[#ffffff] ">
              <div className="w-[351px] flex  items-center  mb-[10px] ">
                <p className="text-[#4a4a4a] text-[14px] font-bold mr-[163px]">
                  Complete your Profile
                </p>
                <p className=" text-[14px] text-[#4a4a4a]">75%</p>
              </div>
              <div
                className="flex w-[351px] h-[9px] mb-[10px] bg-[#e3e7eb] rounded-full overflow-hidden dark:bg-neutral-700"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="flex flex-col justify-center rounded-full overflow-hidden bg-[#31b79c]  text-xs text-white text-center whitespace-nowrap dark:bg-blue-500 transition duration-500 w-[75%]"></div>
              </div>
              <p className="text-[12px] text-[#4a4a4a] mt-[10px] ">
                Get the best out of Travelodeal by adding the remaining details!
              </p>
              <div>
                <ul className="bg-[#e4f1ff] px-[23px] py-[25px] flex justify-between rounded-lg mt-[42px] ">
                  <li className="text-[#008cff] font-bold  text-[16px] flex items-center  ">
                    <img
                      src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/Done-with-green-bac.svg"
                      alt=""
                      className="w-[30px] h-[30px] mr-[13px] "
                    />
                    Verified Email ID
                  </li>
                  <li className="text-[#008cff] font-bold text-[16px]  flex items-center  ">
                    <img
                      src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/Done-with-green-bac.svg"
                      alt=""
                      className="w-[30px] h-[30px] mr-[13px] "
                    />
                    Verified mobile Number
                  </li>
                  <li
                    className="text-[#4a4a4a] font-bold text-[16px]  flex items-center "
                    onClick={() => setCurrentPopup("edit")}
                  >
                    {/* <img
                        src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/Done-with-green-bac.svg"
                        alt=""
                        className="w-[30px] h-[30px]  mr-[13px] "
                      /> */}
                    <Plus className="w-[30px] h-[30px]  mr-[13px] bg-[#008cff] text-[#fff] p-1 rounded-[50%] " />
                    Complete Basic Info
                  </li>
                </ul>
              </div>
            </div>
   </>
  )
}

export default CompleteProfile
