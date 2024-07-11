import React from "react";
import FlightsHotels from "../../components/filter/FlightsHotel";
import Offerslider from "../../components/offereimageslider/offerSlider";
import CollectionSlider from "../../components/collectionslider/CollectionSlider";
import PopularHolidays from "../../components/popularholidays/PopularHolidays";
import OfferSlider from "../../components/offerslider/offerSlider";
import Subscribe from "../../components/subscribe/Subscribe";
import HolidayLinks from "../../components/holidaylinks/HolidayLinks";

const FlightsHotel = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="absolute left-0 right-0 top-[60px]">
        <div className="container mx-auto">
          <div className="flex flex-row items-center justify-center">
            <div className="flex bg-white items-center justify-center  xl:py-[45px] xl:px-[20px] xl:mt-[110px] lg:mt-[90px] lg:py-[34px] lg:px-[20px] rounded-[8px] relative">
              <div className="flex flex-col justify-center rounded-[4px]">
                <FlightsHotels />
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
        <Offerslider />
      </div>
      {/* Collection Slider  */}
      <CollectionSlider />
      {/* Popular Holidays */}
      <PopularHolidays />
      {/* HolidayLink */}
      <HolidayLinks />
      {/* OfferSlider */}
      <OfferSlider />
      {/* Subscribe */}
      <div className="mb-[80px]">
        <Subscribe />
      </div>
    </>
  );
};

export default FlightsHotel;
