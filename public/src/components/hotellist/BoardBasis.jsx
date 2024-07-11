import React, { useState } from "react";

const BoardBasis = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      {/* Board basis */}
      <div className="bg-[#ffffff] rounded-[6px] mt-[10px] shadow-md">
        <h2 id="accordion-collapse-heading-2" className=" h-[63px]">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right gap-3"
            onClick={() => toggleAccordion(2)}
            aria-expanded={activeIndex === 2}
            aria-controls="accordion-collapse-body-2"
          >
            <p className="text-[16px] font-bold text-[#000000] leading-[1.19]">
              Board basis
            </p>
            <svg
              data-accordion-icon
              className={`w-3 h-3 ${
                activeIndex === 2 ? "rotate-180" : ""
              } shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          className={`  ${activeIndex === 2 ? "" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div className=" px-[20px] pb-[14px] ">
            <div className="flex flex-col gap-[19px]">
              <label className="flex items-center gap-4">
                <input
                  id="all"
                  type="checkbox"
                  value=""
                  className="w-[18px] h-[18px] border-[1px] border-[#d6d6d6] rounded-[3px]   
                             checked:bg-[#212121]  focus:ring-0  focus:shadow-none focus:ring-offset-0"
                />
                <label
                  htmlFor="all"
                  className="text-[12px] text-[#212121] cursor-pointer"
                >
                  All
                </label>
              </label>
              <label className="flex items-center gap-4">
                <input
                  id="AllInclusive"
                  type="checkbox"
                  value=""
                  className="w-[18px] h-[18px] border-[1px] border-[#d6d6d6] rounded-[3px]   
                             checked:bg-[#212121] focus:ring-0 focus:shadow-none focus:ring-offset-0"
                />
                <label
                  htmlFor="AllInclusive"
                  className="text-[12px] text-[#212121] cursor-pointer"
                >
                  All Inclusive
                </label>
              </label>
              <label className="flex items-center gap-4">
                <input
                  id="FullBoard"
                  type="checkbox"
                  value=""
                  className="w-[18px] h-[18px] border-[1px] border-[#d6d6d6] rounded-[3px]   
                             checked:bg-[#212121] focus:ring-0 focus:shadow-none focus:ring-offset-0"
                />
                <label
                  htmlFor="FullBoard"
                  className="text-[12px] text-[#212121] cursor-pointer"
                >
                  Full Board
                </label>
              </label>
              <label className="flex items-center gap-4">
                <input
                  id="BreakfastDinner"
                  type="checkbox"
                  value=""
                  className="w-[18px] h-[18px] border-[1px] border-[#d6d6d6] rounded-[3px]   
                             checked:bg-[#212121] focus:ring-0 focus:shadow-none focus:ring-offset-0"
                />
                <label
                  htmlFor="BreakfastDinner"
                  className="text-[12px] text-[#212121] cursor-pointer "
                >
                  Breakfast & Dinner
                </label>
              </label>
              <label className="flex items-center gap-4">
                <input
                  id=" BreakfastIncluded"
                  type="checkbox"
                  value=""
                  className="w-[18px] h-[18px] border-[1px] border-[#d6d6d6] rounded-[3px]   
                             checked:bg-[#212121] focus:ring-0 focus:shadow-none focus:ring-offset-0"
                />
                <label
                  htmlFor=" BreakfastIncluded"
                  className="text-[12px] text-[#212121] cursor-pointer"
                >
                  Breakfast Included
                </label>
              </label>
              <label className="flex items-center gap-4">
                <input
                  id=" SelfCatering"
                  type="checkbox"
                  value=""
                  className="w-[18px] h-[18px] border-[1px] border-[#d6d6d6] rounded-[3px]   
                             checked:bg-[#212121] focus:ring-0 focus:shadow-none focus:ring-offset-0"
                />
                <label
                  htmlFor=" SelfCatering"
                  className="text-[12px] text-[#212121] cursor-pointer"
                >
                  Self Catering
                </label>
              </label>
              <label className="flex items-center gap-4">
                <input
                  id="RoomOnly"
                  type="checkbox"
                  value=""
                  className="w-[18px] h-[18px] border-[1px] border-[#d6d6d6] rounded-[3px]   
                             checked:bg-[#212121] focus:ring-0 focus:shadow-none focus:ring-offset-0"
                />
                <label
                  htmlFor="RoomOnly"
                  className="text-[12px] text-[#212121] cursor-pointer"
                >
                  Room Only
                </label>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardBasis;
