import React, { useState } from "react";

const Facilities = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      {/* Facilities */}
      <div className="bg-[#ffffff] rounded-[6px] mt-[10px] shadow-md">
        <h2 id="accordion-collapse-heading-5" className=" h-[63px]">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right gap-3"
            onClick={() => toggleAccordion(5)}
            aria-expanded={activeIndex === 5}
            aria-controls="accordion-collapse-body-5"
          >
            <p className="text-[16px] font-bold text-[#000000] leading-[1.19]">Facilities</p>
            <svg
              data-accordion-icon
              className={`w-3 h-3 ${
                activeIndex === 5 ? "rotate-180" : ""
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
          id="accordion-collapse-body-5"
          className={`${activeIndex === 5 ? "" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-5"
        >
          <div className=" px-[20px] pb-[14px] ">{/* <h1>content</h1> */}</div>
        </div>
      </div>
    </>
  );
};

export default Facilities;
