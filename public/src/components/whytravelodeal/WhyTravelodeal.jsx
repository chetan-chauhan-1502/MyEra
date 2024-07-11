import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./WhyTravelodeal.css";

const WhyTravelodeal = () => {
  return (
    <>
      <div className="container mx-auto bg-white px-[32px] py-[30px] my-[40px] rounded-lg regular-shadow">
        <h1 className="text-[32px] font-bold ">Why Travelodeal</h1>
        <OwlCarousel
          className="owl-theme whyTravel mt-[20px]"
          loop={false}
          margin={10}
          nav
          items={3}
          dots={false}
          slideBy={1}
        >
          <div className="item">
            <div className="cust-gradient flex gap-5 items-center">
              <div className="w-[80px]">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/Yourbookingissafe.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[18px] text-[#000] font-bold">
                  Your booking is safe
                </h2>
                <p className="text-[14px] text-[#4a4a4a] font-[300]">
                  All holidays are fully ATOL protected. We are members of ABTA
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="cust-gradient flex gap-5 items-center">
              <div className="w-[80px]">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/Bookdirectlywithus.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[18px] text-[#000] font-bold">
                  Book directly with us
                </h2>
                <p className="text-[14px] text-[#4a4a4a] font-[300]">
                  You can save between 30% - 50% on the cruise package price
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="cust-gradient flex gap-5 items-center">
              <div className="w-[80px]">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/Lastminuteholidays.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[18px] text-[#000] font-bold">
                  Last minute holidays
                </h2>
                <p className="text-[14px] text-[#4a4a4a] font-[300]">
                  Book with us for last-minute cruise packages at the best
                  prices
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="cust-gradient flex gap-5 items-center">
              <div className="w-[80px]">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/Yourbookingissafe.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[18px] text-[#000] font-bold">
                  Your booking is safe
                </h2>
                <p className="text-[14px] text-[#4a4a4a] font-[300]">
                  All holidays are fully ATOL protected. We are members of ABTA
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="cust-gradient flex gap-5 items-center">
              <div className="w-[80px]">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/Bookdirectlywithus.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[18px] text-[#000] font-bold">
                  Book directly with us
                </h2>
                <p className="text-[14px] text-[#4a4a4a] font-[300]">
                  You can save between 30% - 50% on the cruise package price
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="cust-gradient flex gap-5 items-center">
              <div className="w-[80px]">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/Lastminuteholidays.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[18px] text-[#000] font-bold">
                  Last minute holidays
                </h2>
                <p className="text-[14px] text-[#4a4a4a] font-[300]">
                  Book with us for last-minute cruise packages at the best
                  prices
                </p>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default WhyTravelodeal;
