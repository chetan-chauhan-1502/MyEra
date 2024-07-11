import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./PopularHolidays.css";

const PopularHolidays = () => {
  return (
    <>
      <div className="container mx-auto bg-white pl-[32px] py-[30px] rounded-lg regular-shadow mb-9">
        <div className="flex items-center  justify-between">
          <h1 className="text-[32px] font-bold leading">Popular holidays</h1>
          <a
            href="#"
            class="flex gap-5 text-[16px] font-bold text-[#f15a22] pr-[9%]"
          >
            View All{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-move-right"
            >
              <path d="M18 8L22 12L18 16"></path>
              <path d="M2 12H22"></path>
            </svg>
          </a>
        </div>
        <OwlCarousel
          className="owl-theme popular-holidays mt-[20px]"
          loop={false}
          margin={10}
          nav
          items={4}
          dots={false}
        >
          <div class="item">
            <div>
              <div className="w-[297px] h-[240px] ">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/barcelona.png"
                  alt=""
                  srcset=""
                  className="h-full object-cover rounded-[8px]"
                />
              </div>
              <div className="mt-[16px] mb-[14px]">
                <p className="text-[20px] font-bold text-[#000]">
                  Visit the Canaries
                </p>
                <p className="text-[14px] font-[300] text-[#4a4a4a]">
                  Book an all-inclusive getaway to the popular Canary Islands
                </p>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <div className="w-[297px] h-[240px] ">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/Gran%20Canaria_1.png"
                  alt=""
                  srcset=""
                  className="h-full object-cover rounded-[8px]"
                />
              </div>
              <div className="mt-[16px] mb-[14px]">
                <p className="text-[20px] font-bold text-[#000]">
                  Visit the Canaries
                </p>
                <p className="text-[14px] font-[300] text-[#4a4a4a]">
                  Book an all-inclusive getaway to the popular Canary Islands
                </p>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <div className="w-[297px] h-[240px] ">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/barcelona.png"
                  alt=""
                  srcset=""
                  className="h-full object-cover rounded-[8px]"
                />
              </div>
              <div className="mt-[16px] mb-[14px]">
                <p className="text-[20px] font-bold text-[#000]">
                  Visit the Canaries
                </p>
                <p className="text-[14px] font-[300] text-[#4a4a4a]">
                  Book an all-inclusive getaway to the popular Canary Islands
                </p>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <div className="w-[297px] h-[240px] ">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/Gran%20Canaria_1.png"
                  alt=""
                  srcset=""
                  className="h-full object-cover rounded-[8px]"
                />
              </div>
              <div className="mt-[16px] mb-[14px]">
                <p className="text-[20px] font-bold text-[#000]">
                  Visit the Canaries
                </p>
                <p className="text-[14px] font-[300] text-[#4a4a4a]">
                  Book an all-inclusive getaway to the popular Canary Islands
                </p>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <div className="w-[297px] h-[240px] ">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/Marrakech,%20Morrocco_2.png"
                  alt=""
                  srcset=""
                  className="h-full object-cover rounded-[8px]"
                />
              </div>
              <div className="mt-[16px] mb-[14px]">
                <p className="text-[20px] font-bold text-[#000]">
                  Visit the Canaries
                </p>
                <p className="text-[14px] font-[300] text-[#4a4a4a]">
                  Book an all-inclusive getaway to the popular Canary Islands
                </p>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <div className="w-[297px] h-[240px] ">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/maxresdefault.jpg"
                  alt=""
                  srcset=""
                  className="h-full object-cover rounded-[8px]"
                />
              </div>
              <div className="mt-[16px] mb-[14px]">
                <p className="text-[20px] font-bold text-[#000]">
                  Visit the Canaries
                </p>
                <p className="text-[14px] font-[300] text-[#4a4a4a]">
                  Book an all-inclusive getaway to the popular Canary Islands
                </p>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <div className="w-[297px] h-[240px] ">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/Marrakech,%20Morrocco_2.png"
                  alt=""
                  srcset=""
                  className="h-full object-cover rounded-[8px]"
                />
              </div>
              <div className="mt-[16px] mb-[14px]">
                <p className="text-[20px] font-bold text-[#000]">
                  Visit the Canaries
                </p>
                <p className="text-[14px] font-[300] text-[#4a4a4a]">
                  Book an all-inclusive getaway to the popular Canary Islands
                </p>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <div className="w-[297px] h-[240px] ">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/Marrakech,%20Morrocco_2.png"
                  alt=""
                  srcset=""
                  className="h-full object-cover rounded-[8px]"
                />
              </div>
              <div className="mt-[16px] mb-[14px]">
                <p className="text-[20px] font-bold text-[#000]">
                  Visit the Canaries
                </p>
                <p className="text-[14px] font-[300] text-[#4a4a4a]">
                  Book an all-inclusive getaway to the popular Canary Islands
                </p>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default PopularHolidays;
