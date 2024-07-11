import React from "react";
import "./holiday_packges.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Holiday_packges = () => {
  return (
    <div className="main-container">
      <div className="main-div ">
        <div className="  bg-[#0a223d] flex justify-center py-[10px]  ">
          <div className="flex gap-[14px] ">
            <div className="deal-types px-[90px] py-[5px] opacity-[0.1] rounded-[4px] bg-white">
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-[12px]  text-[#f27c2c]  "
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                DEAL TYPES
                <svg
                  className="-mr-1 h-5 w-5 text-[#f27c2c]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="select-destination deal-types  px-[50px] py-[5px] opacity-[0.1] rounded-[4px] bg-white ">
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-[12px]  text-[#f27c2c]  "
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                SELECT A DESTINATION
                <svg
                  className="-mr-1 h-5 w-5 text-[#f27c2c]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="date-month deal-types px-[40px] py-[5px] opacity-[0.1] rounded-[4px] bg-white ">
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-[12px]  text-[#f27c2c]  "
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                CHOOSE DATE AND MONTH
                <svg
                  className="-mr-1 h-5 w-5 text-[#f27c2c]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <button className="bg-btn px-[41px] rounded-[20px]" type="button">
              SEARCH{" "}
            </button>
          </div>
        </div>

        <div className="img flex items-center justify-center relative">
          <img src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/header-img.png" />
          <div className="absolute left-[291px] right-0">
            <p className="text-[40px] font-bold text-white">Greece Packages</p>
            <p className="text-[20px] font-thin text-white">
              Experience beaches and sunset
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-[67px]">
        <div className="content ">
          <p className="text-[32px] text-black font-bold">
            This Week’s Top 10 Deals
          </p>
          <p className="text-[16px] text-[#4a4a4a] pb-[31px]">
            Every week we search more than 2,000 companies worldwide for their
            very best deals and compile this Top 10 list.
          </p>
        </div>
        <div className="flex w-full  box-shadow mb-[30px] rounded-[10px]">
          {/* img-slider */}
          <div className=" w-[50%] Slider-img items-stretch">
            <OwlCarousel
              className="owl-theme Holiday_slider flex-1"
              loop={false}
              margin={10}
              nav
              items={1}
              dots={true}
              slideBy={1}
            >
              <div className="item rounded-l-[10px]">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-1.png"
                  className="w-[100%]"
                />
              </div>
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-2.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-3.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-4.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-5.png"
                  className="w-full h-full object-cover"
                />
              </div>
            </OwlCarousel>
          </div>
          {/* content */}
          <div className="content w-[50%] px-[20px] py-[20px] h-[333px]  rounded-r-[15px] bg-[#f2f2f2] ">
            <p className="text-[22px] font-bold text-black leading-none">
              Crete: luxury all-inc week w/flights & suite
            </p>
            <p className="text-[14px] text-[#4a4a4a] pb-[9px] border-b-2 font-light ">
              Crete, Greece
            </p>
            <p className="text-[#4a4a4a] text-[14px] py-[9px] font-light ">
              At £329 per person for the entire week covering flights, meals,
              unlimited drinks, and suite accommodation this holiday is up to
              60% less compared to booking on other websites. buzzing tavernas
              and calm seas.
            </p>
            <div className="flex py-[20px] justify-between font-light mr-[60px]">
              <ul className="ul-dot text-[#757575] ">
                <li>5 Star Hotel</li>
                <li>3 Activities</li>
              </ul>
              <ul className="ul-dot text-[#757575]">
                <li>Airport Transfer</li>
                <li>Selected Meals</li>
              </ul>
              <ul className="ul-right text-[#007e7d] ">
                <li>Dolphin Trip</li>
                <li>Mandovi River Cruises</li>
              </ul>
            </div>
            <div className="btn rounded-[8px] px-[28px] py-[18px] border-[2px] flex justify-between mb-[10px]">
              <button
                type="button"
                className="bg-[#4abb10] text-white px-[14px] py-[6px] rounded-[20px] "
              >
                Save up to 62%
              </button>

              <div className="Price leading-none ">
                <p className="text-[22px] font-bold">£293</p>
                <p className="text-[14px] text-[#4a4a4a]">per person</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full  box-shadow mb-[30px] rounded-[10px]">
          {/* img-slider */}
          <div className=" w-[50%] Slider-img items-stretch">
            <OwlCarousel
              className="owl-theme Holiday_slider flex-1"
              loop={false}
              margin={10}
              nav
              items={1}
              dots={true}
              slideBy={1}
            >
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-1.png"
                  className="w-[100%]"
                />
              </div>
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-2.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-3.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-4.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-5.png"
                  className="w-full h-full object-cover"
                />
              </div>
            </OwlCarousel>
          </div>
          {/* content */}
          <div className="content w-[50%] px-[20px] py-[20px] h-[333px]  rounded-r-[15px] bg-[#f2f2f2] ">
            <p className="text-[22px] font-bold text-black leading-none">
              Crete: luxury all-inc week w/flights & suite
            </p>
            <p className="text-[14px] text-[#4a4a4a] pb-[9px] border-b-2 font-light ">
              Crete, Greece
            </p>
            <p className="text-[#4a4a4a] text-[14px] py-[9px] font-light ">
              At £329 per person for the entire week covering flights, meals,
              unlimited drinks, and suite accommodation this holiday is up to
              60% less compared to booking on other websites. buzzing tavernas
              and calm seas.
            </p>
            <div className="flex py-[20px] justify-between font-light mr-[60px]">
              <ul className="ul-dot text-[#757575] ">
                <li>5 Star Hotel</li>
                <li>3 Activities</li>
              </ul>
              <ul className="ul-dot text-[#757575]">
                <li>Airport Transfer</li>
                <li>Selected Meals</li>
              </ul>
              <ul className="ul-right text-[#007e7d] ">
                <li>Dolphin Trip</li>
                <li>Mandovi River Cruises</li>
              </ul>
            </div>
            <div className="btn rounded-[8px] px-[28px] py-[18px] border-[2px] flex justify-between mb-[10px]">
              <button
                type="button"
                className="bg-[#4abb10] text-white px-[14px] py-[6px] rounded-[15px] "
              >
                Save up to 62%
              </button>

              <div className="Price leading-none ">
                <p className="text-[22px] font-bold">£293</p>
                <p className="text-[14px] text-[#4a4a4a]">per person</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full  box-shadow mb-[30px] rounded-[10px]">
          {/* img-slider */}
          <div className=" w-[50%] Slider-img items-stretch">
            <OwlCarousel
              className="owl-theme Holiday_slider flex-1"
              loop={false}
              margin={10}
              nav
              items={1}
              dots={true}
              slideBy={1}
            >
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-1.png"
                  className="w-[100%]"
                />
              </div>
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-2.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-3.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-4.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-5.png"
                  className="w-full h-full object-cover"
                />
              </div>
            </OwlCarousel>
          </div>
          {/* content */}
          <div className="content w-[50%] px-[20px] py-[20px] h-[333px]  rounded-r-[15px] bg-[#f2f2f2] ">
            <p className="text-[22px] font-bold text-black leading-none">
              Crete: luxury all-inc week w/flights & suite
            </p>
            <p className="text-[14px] text-[#4a4a4a] pb-[9px] border-b-2 font-light ">
              Crete, Greece
            </p>
            <p className="text-[#4a4a4a] text-[14px] py-[9px] font-light ">
              At £329 per person for the entire week covering flights, meals,
              unlimited drinks, and suite accommodation this holiday is up to
              60% less compared to booking on other websites. buzzing tavernas
              and calm seas.
            </p>
            <div className="flex py-[20px] justify-between font-light mr-[60px]">
              <ul className="ul-dot text-[#757575] ">
                <li>5 Star Hotel</li>
                <li>3 Activities</li>
              </ul>
              <ul className="ul-dot text-[#757575]">
                <li>Airport Transfer</li>
                <li>Selected Meals</li>
              </ul>
              <ul className="ul-right text-[#007e7d] ">
                <li>Dolphin Trip</li>
                <li>Mandovi River Cruises</li>
              </ul>
            </div>
            <div className="btn rounded-[8px] px-[28px] py-[18px] border-[2px] flex justify-between mb-[10px]">
              <button
                type="button"
                className="bg-[#4abb10] text-white px-[14px] py-[6px] rounded-[15px] "
              >
                Save up to 62%
              </button>

              <div className="Price leading-none ">
                <p className="text-[22px] font-bold">£293</p>
                <p className="text-[14px] text-[#4a4a4a]">per person</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full  box-shadow mb-[30px] rounded-[10px]">
          {/* img-slider */}
          <div className=" w-[50%] Slider-img items-stretch">
            <OwlCarousel
              className="owl-theme Holiday_slider flex-1"
              loop={false}
              margin={10}
              nav
              items={1}
              dots={true}
              slideBy={1}
            >
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-1.png"
                  className="w-[100%]"
                />
              </div>
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-2.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-3.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-4.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-5.png"
                  className="w-full h-full object-cover"
                />
              </div>
            </OwlCarousel>
          </div>
          {/* content */}
          <div className="content w-[50%] px-[20px] py-[20px] h-[333px]  rounded-r-[15px] bg-[#f2f2f2] ">
            <p className="text-[22px] font-bold text-black leading-none">
              Crete: luxury all-inc week w/flights & suite
            </p>
            <p className="text-[14px] text-[#4a4a4a] pb-[9px] border-b-2 font-light ">
              Crete, Greece
            </p>
            <p className="text-[#4a4a4a] text-[14px] py-[9px] font-light ">
              At £329 per person for the entire week covering flights, meals,
              unlimited drinks, and suite accommodation this holiday is up to
              60% less compared to booking on other websites. buzzing tavernas
              and calm seas.
            </p>
            <div className="flex py-[20px] justify-between font-light mr-[60px]">
              <ul className="ul-dot text-[#757575] ">
                <li>5 Star Hotel</li>
                <li>3 Activities</li>
              </ul>
              <ul className="ul-dot text-[#757575]">
                <li>Airport Transfer</li>
                <li>Selected Meals</li>
              </ul>
              <ul className="ul-right text-[#007e7d] ">
                <li>Dolphin Trip</li>
                <li>Mandovi River Cruises</li>
              </ul>
            </div>
            <div className="btn rounded-[8px] px-[28px] py-[18px] border-[2px] flex justify-between mb-[10px]">
              <button
                type="button"
                className="bg-[#4abb10] text-white px-[14px] py-[6px] rounded-[15px] "
              >
                Save up to 62%
              </button>

              <div className="Price leading-none ">
                <p className="text-[22px] font-bold">£293</p>
                <p className="text-[14px] text-[#4a4a4a]">per person</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full  box-shadow mb-[30px] rounded-[10px]">
          {/* img-slider */}
          <div className=" w-[50%] Slider-img items-stretch">
            <OwlCarousel
              className="owl-theme Holiday_slider flex-1"
              loop={false}
              margin={10}
              nav
              items={1}
              dots={true}
              slideBy={1}
            >
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-1.png"
                  className="w-[100%]"
                />
              </div>
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-2.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-3.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-4.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-5.png"
                  className="w-full h-full object-cover"
                />
              </div>
            </OwlCarousel>
          </div>
          {/* content */}
          <div className="content w-[50%] px-[20px] py-[20px] h-[333px]  rounded-r-[15px] bg-[#f2f2f2] ">
            <p className="text-[22px] font-bold text-black leading-none">
              Crete: luxury all-inc week w/flights & suite
            </p>
            <p className="text-[14px] text-[#4a4a4a] pb-[9px] border-b-2 font-light ">
              Crete, Greece
            </p>
            <p className="text-[#4a4a4a] text-[14px] py-[9px] font-light ">
              At £329 per person for the entire week covering flights, meals,
              unlimited drinks, and suite accommodation this holiday is up to
              60% less compared to booking on other websites. buzzing tavernas
              and calm seas.
            </p>
            <div className="flex py-[20px] justify-between font-light mr-[60px]">
              <ul className="ul-dot text-[#757575] ">
                <li>5 Star Hotel</li>
                <li>3 Activities</li>
              </ul>
              <ul className="ul-dot text-[#757575]">
                <li>Airport Transfer</li>
                <li>Selected Meals</li>
              </ul>
              <ul className="ul-right text-[#007e7d] ">
                <li>Dolphin Trip</li>
                <li>Mandovi River Cruises</li>
              </ul>
            </div>
            <div className="btn rounded-[8px] px-[28px] py-[18px] border-[2px] flex justify-between mb-[10px]">
              <button
                type="button"
                className="bg-[#4abb10] text-white px-[14px] py-[6px] rounded-[15px] "
              >
                Save up to 62%
              </button>

              <div className="Price leading-none ">
                <p className="text-[22px] font-bold">£293</p>
                <p className="text-[14px] text-[#4a4a4a]">per person</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full  box-shadow mb-[30px] rounded-[10px]">
          {/* img-slider */}
          <div className=" w-[50%] Slider-img items-stretch">
            <OwlCarousel
              className="owl-theme Holiday_slider flex-1"
              loop={false}
              margin={10}
              nav
              items={1}
              dots={true}
              slideBy={1}
            >
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-1.png"
                  className="w-[100%]"
                />
              </div>
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-2.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-3.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-4.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="item">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/h-5.png"
                  className="w-full h-full object-cover"
                />
              </div>
            </OwlCarousel>
          </div>
          {/* content */}
          <div className="content w-[50%] px-[20px] py-[20px] h-[333px]  rounded-r-[15px] bg-[#f2f2f2] ">
            <p className="text-[22px] font-bold text-black leading-none">
              Crete: luxury all-inc week w/flights & suite
            </p>
            <p className="text-[14px] text-[#4a4a4a] pb-[9px] border-b-2 font-light ">
              Crete, Greece
            </p>
            <p className="text-[#4a4a4a] text-[14px] py-[9px] font-light ">
              At £329 per person for the entire week covering flights, meals,
              unlimited drinks, and suite accommodation this holiday is up to
              60% less compared to booking on other websites. buzzing tavernas
              and calm seas.
            </p>
            <div className="flex py-[20px] justify-between font-light mr-[60px]">
              <ul className="ul-dot text-[#757575] ">
                <li>5 Star Hotel</li>
                <li>3 Activities</li>
              </ul>
              <ul className="ul-dot text-[#757575]">
                <li>Airport Transfer</li>
                <li>Selected Meals</li>
              </ul>
              <ul className="ul-right text-[#007e7d] ">
                <li>Dolphin Trip</li>
                <li>Mandovi River Cruises</li>
              </ul>
            </div>
            <div className="btn rounded-[8px] px-[28px] py-[18px] border-[2px] flex justify-between mb-[10px]">
              <button
                type="button"
                className="bg-[#4abb10] text-white px-[14px] py-[6px] rounded-[15px] "
              >
                Save up to 62%
              </button>

              <div className="Price leading-none ">
                <p className="text-[22px] font-bold">£293</p>
                <p className="text-[14px] text-[#4a4a4a]">per person</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Holiday_packges;
