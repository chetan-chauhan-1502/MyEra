import React from "react";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./offerSlider.css";

// Ensure jQuery is accessible globally
window.$ = window.jQuery = $;

// Import OwlCarousel after setting jQuery globally
import OwlCarousel from "react-owl-carousel";

const OfferSlider = () => {
  return (
    <div className="container mx-auto offer-slider ">
      <OwlCarousel
        className="owl-theme offer_slider"
        loop
        margin={10}
        items={1}
      >
        <div className="item">
          <div className="relative offer-inner-continer ">
            <img
              src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/paris.png"
              alt=""
              className=" object-cover"
            />
            <div className="absolute top-[84px] left-[136px]  block">
              <h2 className="text-[32px] font-bold leading-[30px]">
                Experience Europe with The Best!
              </h2>
              <p className="text-[22px] font-bold">Book packages starting</p>
              <h2 className="text-[32px] font-bold">@ £1000* incl. Flights.</h2>
              <span className="offer-tabs block"></span>
              <a
                href="#"
                className="btn-color text-[#fff] px-[27px] py-[7px] rounded-[19px] inline-flex text-[20px]"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="relative offer-inner-continer ">
            <img
              src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/paris.png"
              alt=""
              className=" object-cover"
            />
            <div className="absolute top-[84px] left-[136px]  block">
              <h2 className="text-[32px] font-bold leading-[30px]">
                Experience Europe with The Best!
              </h2>
              <p className="text-[22px] font-bold">Book packages starting</p>
              <h2 className="text-[32px] font-bold">@ £1000* incl. Flights.</h2>
              <span className="offer-tabs block"></span>
              <a
                href="#"
                className="btn-color text-[#fff] px-[27px] py-[7px] rounded-[19px] inline-flex text-[20px]"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="relative offer-inner-continer ">
            <img
              src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/paris.png"
              alt=""
              className=" object-cover"
            />
            <div className="absolute top-[84px] left-[136px]  block">
              <h2 className="text-[32px] font-bold leading-[30px]">
                Experience Europe with The Best!
              </h2>
              <p className="text-[22px] font-bold">Book packages starting</p>
              <h2 className="text-[32px] font-bold">@ £1000* incl. Flights.</h2>
              <span className="offer-tabs block"></span>
              <a
                href="#"
                className="btn-color text-[#fff] px-[27px] py-[7px] rounded-[19px] inline-flex text-[20px]"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="relative offer-inner-continer ">
            <img
              src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/paris.png"
              alt=""
              className=" object-cover"
            />
            <div className="absolute top-[84px] left-[136px]  block">
              <h2 className="text-[32px] font-bold leading-[30px]">
                Experience Europe with The Best!
              </h2>
              <p className="text-[22px] font-bold">Book packages starting</p>
              <h2 className="text-[32px] font-bold">@ £1000* incl. Flights.</h2>
              <span className="offer-tabs block"></span>
              <a
                href="#"
                className="btn-color text-[#fff] px-[27px] py-[7px] rounded-[19px] inline-flex text-[20px]"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="relative offer-inner-continer ">
            <img
              src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/paris.png"
              alt=""
              className=" object-cover"
            />
            <div className="absolute top-[84px] left-[136px]  block">
              <h2 className="text-[32px] font-bold leading-[30px]">
                Experience Europe with The Best!
              </h2>
              <p className="text-[22px] font-bold">Book packages starting</p>
              <h2 className="text-[32px] font-bold">@ £1000* incl. Flights.</h2>
              <span className="offer-tabs block"></span>
              <a
                href="#"
                className="btn-color text-[#fff] px-[27px] py-[7px] rounded-[19px] inline-flex text-[20px]"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default OfferSlider;
