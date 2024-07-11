import React from "react";
import Card from "../../components/card/Card";
import Support from "../../components/support/Support";
import HotelFilter from "../../components/filter/HotelFilter";
import PopularHolidays from "../../components/popularholidays/PopularHolidays";
import HolidayLinks from "../../components/holidaylinks/HolidayLinks";
import Subscribe from "../../components/subscribe/Subscribe";
import UnbetabelDeal from "../../components/unbeatabeldeal_slider/UnbetabelDeal";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

const Hotel = () => {
  const navigator = useNavigate();
  const location = useLocation();
  const searchSubmit = () => {
    navigator("/hotels/hotel-listing");
  };
  const isHotelListingRoute = location.pathname.includes("hotel-listing");
  return (
    <>
      {!isHotelListingRoute && (
        <>
          {/* <Header /> */}
          <div className="absolute left-0 right-0 top-[60px]">
            <div className="container mx-auto">
              <div className="flex flex-row items-center justify-center">
                <div className="flex bg-white items-center justify-center  xl:py-[45px] xl:px-[20px] xl:mt-[110px] lg:mt-[90px] lg:py-[34px] lg:px-[20px] rounded-[8px] relative">
                  <div className="flex flex-col justify-center rounded-[4px]">
                    <HotelFilter />
                  </div>
                  <button
                    type="submit"
                    className="btn_search_cust btn-color xl:text-[18px] lg:text-[13px] xl:w-[215px] lg:w-[150px] xl:h-[45px] lg:h[10px] lg:py-[10px] lg:px-0"
                    onClick={searchSubmit}
                  >
                    SEARCH
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Support />
          {/* // card section */}
          <UnbetabelDeal />
          {/* Popular Holidays */}
          <div className="my-10">
            <PopularHolidays />
          </div>
          {/* Holidays Link */}
          <HolidayLinks />
          {/* Subscribe */}
          <div className="mb-[80px]">
            <Subscribe />
          </div>
        </>
      )}
      <Outlet />
    </>
  );
};

export default Hotel;
