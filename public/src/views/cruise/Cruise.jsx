import React from "react";
import CruiseCard from "../../components/cruisecard/CruiseCard";
import CruiseFilter from "../../components/filter/CruiseFilter";
import OfferSlider from "../../components/offereimageslider/offerSlider";
import WhyTravelodeal from "../../components/whytravelodeal/WhyTravelodeal";
import Subscribe from "../../components/subscribe/Subscribe";
import HandCraftSlider from "../../components/handcrafted/HandCraftSlider";
import Cruiseblog from "../../components/cruiseblog/Cruiseblog";
import CruiseType from "../../components/cruisetype/CruiseType";
import MoreCruiseIdeas from "../../components/cruiseideas/MoreCruiseIdeas";

const Cruise = () => {
  return (
    <>
      {/* <Header /> */}
      
      <div className="absolute left-0 right-0 top-[60px]">
        <div className="container mx-auto">
          <div className="flex flex-row items-center justify-center">
            <div className="flex bg-white items-center justify-center  xl:py-[45px] xl:px-[20px] xl:mt-[110px] lg:mt-[90px] lg:py-[34px] lg:px-[20px] rounded-[8px] relative">
              <div className="flex flex-col justify-center rounded-[4px]">
                <CruiseFilter />
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
      </div>

      {/* Offer Slider */}
      <div className="container mx-auto relative bottom-[40px]">
        <OfferSlider />
      </div>
      {/* Cruise Card */}
      <CruiseCard />
      {/* Why Travelodeal */}
      <WhyTravelodeal />
      {/* HandCrafted Sliders */}
      <HandCraftSlider />
      {/* Cruise Blog's */}
      <Cruiseblog />
      {/* Cruise Type */}
      <CruiseType />
      {/* Offer Slider */}
      <Subscribe />
      {/* More Cruise Ideas */}
      <MoreCruiseIdeas />
    </>
  );
};

export default Cruise;
