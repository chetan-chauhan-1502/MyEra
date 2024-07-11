import React, { useState } from "react";

const HolidayType = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      {/* Holiday type */}
      <div className="bg-[#ffffff] rounded-[6px] mt-[10px] shadow-md ">
        <h2 id="accordion-collapse-heading-4" className=" h-[63px]">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right gap-3"
            onClick={() => toggleAccordion(4)}
            aria-expanded={activeIndex === 4}
            aria-controls="accordion-collapse-body-4"
          >
            <p className="text-[16px] font-bold text-[#000000] leading-[1.19] ">
              Holiday type
            </p>
            <svg
              data-accordion-icon
              className={`w-3 h-3 ${
                activeIndex === 4 ? "rotate-180" : ""
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
          id="accordion-collapse-body-4"
          className={`${activeIndex === 4 ? "" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-4"
        >
          <div className=" px-[20px] pb-[14px] ">
            <div className="flex flex-col gap-[19px]">
              <label className="flex items-center  justify-between  ">
                <label className="text-[12px] text-[#212121] flex items-center gap-[19px]">
                  <input
                    id="BeachHotel"
                    type="checkbox"
                    value=""
                    className="w-[18px] h-[18px] border-[1px] border-[#d6d6d6] rounded-[3px]   
                             checked:bg-[#212121]  focus:ring-0  focus:shadow-none focus:ring-offset-0"
                  />
                  <label
                    htmlFor="BeachHotel"
                    className="text-[12px] text-[#212121] cursor-pointer"
                  >
                    Beach Hotel
                  </label>
                </label>
                <p className="text-[12px] text-[#212121]">65</p>
              </label>
              <label className="flex items-center  justify-between  ">
                <label className="text-[12px] text-[#212121] flex items-center gap-[19px] ">
                  <input
                    id="FamilyHotel"
                    type="checkbox"
                    value=""
                    className="w-[18px] h-[18px] border-[1px] border-[#d6d6d6] rounded-[3px]   
                             checked:bg-[#212121]  focus:ring-0  focus:shadow-none focus:ring-offset-0"
                  />
                  <label
                    htmlFor="FamilyHotel"
                    className="text-[12px] text-[#212121] cursor-pointer"
                  >
                    Family Hotel
                  </label>
                </label>
                <p className="text-[12px] text-[#212121] ">14</p>
              </label>
              <label className="flex items-center  justify-between  ">
                <label className="text-[12px] text-[#212121] flex items-center gap-[19px]">
                  <input
                    id="CityHotel"
                    type="checkbox"
                    value=""
                    className="w-[18px] h-[18px] border-[1px] border-[#d6d6d6] rounded-[3px]   
                             checked:bg-[#212121]  focus:ring-0  focus:shadow-none focus:ring-offset-0"
                  />
                  <label
                    htmlFor="CityHotel"
                    className="text-[12px] text-[#212121] cursor-pointer"
                  >
                    City Hotel
                  </label>
                </label>
                <p className="text-[12px] text-[#212121]">13</p>
              </label>
              <label className="flex items-center  justify-between  ">
                <label className="text-[12px] text-[#212121] flex items-center gap-[19px]">
                  <input
                    id="SpaHotel"
                    type="checkbox"
                    value=""
                    className="w-[18px] h-[18px] border-[1px] border-[#d6d6d6] rounded-[3px]   
                             checked:bg-[#212121]  focus:ring-0  focus:shadow-none focus:ring-offset-0"
                  />
                  <label
                    htmlFor="SpaHotel"
                    className="text-[12px] text-[#212121] cursor-pointer"
                  >
                    Spa Hotel
                  </label>
                </label>
                <p className="text-[12px] text-[#212121]">4</p>
              </label>
              <label className="flex items-center  justify-between  ">
                <label className="text-[12px] text-[#212121] flex items-center gap-[19px]">
                  <input
                    id="ApartmentHotel"
                    type="checkbox"
                    value=""
                    className="w-[18px] h-[18px] border-[1px] border-[#d6d6d6] rounded-[3px]   
                             checked:bg-[#212121]  focus:ring-0  focus:shadow-none focus:ring-offset-0"
                  />
                  <p
                    htmlFor="ApartmentHotel"
                    className="text-[12px] text-[#212121] cursor-pointer"
                  >
                    Apartment Hotel
                  </p>
                </label>
                <p className="text-[12px] text-[#212121]">54</p>
              </label>
              <label className="flex items-center  justify-between  ">
                <label className="text-[12px] text-[#212121] flex items-center gap-[19px]">
                  <input
                    id="ClubResort"
                    type="checkbox"
                    value=""
                    className="w-[18px] h-[18px] border-[1px] border-[#d6d6d6] rounded-[3px]   
                             checked:bg-[#212121]  focus:ring-0  focus:shadow-none focus:ring-offset-0"
                  />
                  <label
                    htmlFor="ClubResort"
                    className="text-[12px] text-[#212121] cursor-pointer"
                  >
                    Club Resort
                  </label>
                </label>
                <p className="text-[12px] text-[#212121]">8</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HolidayType;
