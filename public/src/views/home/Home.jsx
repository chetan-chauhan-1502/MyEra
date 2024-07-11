import Support from "../../components/support/Support";
import Card from "../../components/card/Card";
import React from "react";
import Header from "../../components/header/Header";
import TopDealsFilter from "../../components/filter/TopDealsFilter";
import DestinationCard from "../../components/destinationcard/DestinationCard";
import OfferSlider from "../../components/offerslider/offerSlider";
import Subscribe from "../../components/subscribe/Subscribe";
; // Import the CSS file
// import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="absolute left-0 right-0 top-[60px]">
        <div className="container mx-auto">
          <div className="flex flex-row items-center  justify-center">
            <div className="flex bg-white items-center justify-center  2xl:py-[45px] xl:py-[45px] lg:py-[34px] 2xl:px-[20px] xl:px-[20px]  lg:px-[20px] 2xl:mt-[110px] xl:mt-[110px] lg:mt-[90px]  rounded-[8px] relative">
              <div className="flex flex-col justify-center rounded-[4px]">
                <TopDealsFilter />
              </div>
            </div>
            <button
              type="submit"
              className="btn_search_cust btn-color xl:text-[18px] lg:text-[13px] xl:w-[215px] lg:w-[150px] xl:h-[45px] lg:h[10px] lg:py-[10px] lg:px-0"
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>

      <Support />
      {/* // card section */}
      <Card />

      <div className="container mx-auto mt-[20px]"></div>
      {/* Destination Card  */}
      {/* <DestinationCard /> */}
      {/* Offer Slider With Image */}
      {/* <OfferSlider /> */}
      {/* subscrib */}
      {/* <div className="mb-[80px]">
        <Subscribe />
      </div> */}
    </>




  );
};

export default Home;
