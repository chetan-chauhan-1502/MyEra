import { Star } from 'lucide-react';
import React, { useState } from 'react'

const Rating = () => {
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
         {/* Rating */}
         <div className="bg-[#ffffff] rounded-[6px] mt-[10px] shadow-md">
                  <h2 id="accordion-collapse-heading-3" className=" h-[63px]">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right gap-3"
                      onClick={() => toggleAccordion(3)}
                      aria-expanded={activeIndex === 3}
                      aria-controls="accordion-collapse-body-3"
                    >
                      <p className="text-[16px] font-bold text-[#000000] leading-[1.19]">
                        Rating
                      </p>
                      <svg
                        data-accordion-icon
                        className={`w-3 h-3 ${
                          activeIndex === 3 ? "rotate-180" : ""
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
                    id="accordion-collapse-body-3"
                    className={`${activeIndex === 3 ? "" : "hidden"}`}
                    aria-labelledby="accordion-collapse-heading-3"
                  >
                    <div className=" px-[20px] pb-[14px] ">
                      <div className="flex flex-col gap-[19px]">
                        <label className="flex items-center  justify-between  ">
                          <label className="text-[12px] text-[#212121] flex items-center gap-[19px]">
                            <input
                              id="r1"
                              type="checkbox"
                              value=""
                              className="w-[18px] h-[18px] border-[1px] border-[#d6d6d6] rounded-[3px]   
                             checked:bg-[#212121]  focus:ring-0  focus:shadow-none focus:ring-offset-0"
                            />

                            <label htmlFor="r1" className="flex cursor-pointer">
                              <Star
                                color="#212121"
                                className="w-[13px] h-[13px] "
                              />
                              <Star
                                color="#212121"
                                className="w-[13px] h-[13px] "
                              />
                              <Star
                                color="#212121"
                                className="w-[13px] h-[13px] "
                              />
                              <Star
                                color="#212121"
                                className="w-[13px] h-[13px] "
                              />
                              <Star
                                color="#212121"
                                className="w-[13px] h-[13px] "
                              />
                            </label>
                          </label>
                          <p className="text-[12px] text-[#212121]">77</p>
                        </label>
                        <label className="flex items-center  justify-between  ">
                          <label className="text-[12px] text-[#212121] flex items-center gap-[19px] ">
                            <input
                              id="r2"
                              type="checkbox"
                              value=""
                              className="w-[18px] h-[18px] border-[1px] border-[#d6d6d6] rounded-[3px]   
                             checked:bg-[#212121]  focus:ring-0  focus:shadow-none focus:ring-offset-0"
                            />

                            <label htmlFor="r2" className="flex cursor-pointer">
                              <Star
                                color="#212121"
                                className="w-[13px] h-[13px] "
                              />
                              <Star
                                color="#212121"
                                className="w-[13px] h-[13px] "
                              />
                              <Star
                                color="#212121"
                                className="w-[13px] h-[13px] "
                              />
                              <Star
                                color="#212121"
                                className="w-[13px] h-[13px] "
                              />
                              <Star
                                color="#212121"
                                className="w-[13px] h-[13px] "
                              />
                            </label>
                          </label>
                          <p className="text-[12px] text-[#212121] ">61</p>
                        </label>
                        <label className="flex items-center  justify-between  ">
                          <label className="text-[12px] text-[#212121] flex items-center gap-[19px]">
                            <input
                              id="r3"
                              type="checkbox"
                              value=""
                              className="w-[18px] h-[18px] border-[1px] border-[#d6d6d6] rounded-[3px]   
                             checked:bg-[#212121]  focus:ring-0  focus:shadow-none focus:ring-offset-0"
                            />

                            <label htmlFor="r3" className="flex cursor-pointer">
                              <Star
                                color="#212121"
                                className="w-[13px] h-[13px] "
                              />
                              <Star
                                color="#212121"
                                className="w-[13px] h-[13px] "
                              />
                              <Star
                                color="#212121"
                                className="w-[13px] h-[13px] "
                              />
                              <Star
                                color="#212121"
                                className="w-[13px] h-[13px] "
                              />
                              <Star
                                color="#212121"
                                className="w-[13px] h-[13px] "
                              />
                            </label>
                          </label>
                          <p className="text-[12px] text-[#212121]">11</p>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default Rating
