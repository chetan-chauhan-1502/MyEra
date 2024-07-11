import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Holiday.css";

const HolidayLinks = () => {
  return (
    <>
      <div className="container mx-auto mt-[30px] mb-[30px]">
        <OwlCarousel
          className="owl-theme Holiday-Link mt-[35px]"
          loop={false}
          margin={20}
          nav
          items={4}
          dots={false}
        >
          <div className="item">
            <div className="flex items-center justify-center gap-5 bg-white holiday-shadow">
              <div>
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/Heart.svg"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="w-[50%]">
                <h2 className="text-[18px] font-bold">Couples holidays</h2>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex items-center justify-center gap-5 bg-white holiday-shadow">
              <div>
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/Lunch.svg"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="w-[50%]">
                <h2 className="text-[18px] font-bold">
                  All inclusive holidays
                </h2>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex items-center justify-center gap-5 bg-white holiday-shadow">
              <div>
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/ball.svg"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="w-[50%]">
                <h2 className="text-[18px] font-bold">Last minute holidays</h2>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex items-center justify-center gap-5 bg-white holiday-shadow">
              <div>
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/Taddy.svg"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="w-[50%]">
                <h2 className="text-[18px] font-bold">Family Holidays</h2>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex items-center justify-center gap-5 bg-white holiday-shadow">
              <div>
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/Heart.svg"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="w-[50%]">
                <h2 className="text-[18px] font-bold">Couples holidays</h2>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex items-center justify-center gap-5 bg-white holiday-shadow">
              <div>
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/Lunch.svg"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="w-[50%]">
                <h2 className="text-[18px] font-bold">
                  All inclusive holidays
                </h2>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex items-center justify-center gap-5 bg-white holiday-shadow">
              <div>
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/ball.svg"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="w-[50%]">
                <h2 className="text-[18px] font-bold">Last minute holidays</h2>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex items-center justify-center gap-5 bg-white holiday-shadow">
              <div>
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/Taddy.svg"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="w-[50%]">
                <h2 className="text-[18px] font-bold">Family Holidays</h2>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default HolidayLinks;
