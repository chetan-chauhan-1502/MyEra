import React, { useState } from "react";

const PopularFilters = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      {/* Popular filters */}
      <div className="bg-[#ffffff] rounded-[6px] mt-[10px] shadow-md  ">
        <h2 id="accordion-collapse-heading-1" className=" h-[63px]">
          <button
            type="button"
            className="flex items-center justify-between w-full px-[22px] py-[19px] "
            onClick={() => toggleAccordion(1)}
            aria-expanded={activeIndex === 1}
            aria-controls="accordion-collapse-body-1  "
          >
            <p className="text-[16px] font-bold text-[#000000] leading-[1.19] ">
              Popular filters
            </p>
            <svg
              data-accordion-icon
              className={`w-3 h-3 ${
                activeIndex === 1 ? "rotate-180 " : "" // here (rotate-0) for
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
          id="accordion-collapse-body-1"
          className={`${activeIndex === 1 ? "" : "hidden"}`} // here visible for accordian show
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className=" px-[20px] pb-[14px] ">
            <ul className="flex flex-wrap gap-[7px]">
              <li className="cursor-pointer">
                <input
                  className="cl-custom-check hidden"
                  id="marking_01"
                  type="checkbox"
                />
                <label
                  className="cl-custom-check-label "
                  htmlFor="marking_01"
                  title="Click to select/unselect"
                >
                  All inclusive
                </label>
              </li>
              <li className="cursor-pointer">
                <input
                  className="cl-custom-check hidden"
                  id="marking_02"
                  type="checkbox"
                />
                <label
                  className="cl-custom-check-label"
                  htmlFor="marking_02"
                  title="Click to select/unselect"
                >
                  5-star hotel
                </label>
              </li>
              <li className="cursor-pointer">
                <input
                  className="cl-custom-check hidden"
                  id="marking_03"
                  type="checkbox"
                />
                <label
                  className="cl-custom-check-label"
                  htmlFor="marking_03"
                  title="Click to select/unselect"
                >
                  Beach
                </label>
              </li>
              <li className="cursor-pointer">
                <input
                  className="cl-custom-check hidden"
                  id="marking_04"
                  type="checkbox"
                />
                <label
                  className="cl-custom-check-label"
                  htmlFor="marking_04"
                  title="Click to select/unselect"
                >
                  WiFi
                </label>
              </li>
              <li className="cursor-pointer">
                <input
                  className="cl-custom-check hidden"
                  id="marking_05"
                  type="checkbox"
                />
                <label
                  className="cl-custom-check-label"
                  htmlFor="marking_05"
                  title="Click to select/unselect"
                >
                  Water Slides
                </label>
              </li>
              <li className="cursor-pointer">
                <input
                  className="cl-custom-check hidden"
                  id="marking_06"
                  type="checkbox"
                />
                <label
                  className="cl-custom-check-label"
                  htmlFor="marking_06"
                  title="Click to select/unselect"
                >
                  Air Conditioning
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularFilters;
