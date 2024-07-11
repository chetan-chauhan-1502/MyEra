import React from "react";
import HotellistHeader from "../../../components/hotellist/HotellistHeader";
import HotellistSubHeader from "../../../components/hotellist/HotellistSubHeader";
import HotellistMap from "../../../components/hotellist/HotellistMap";
import PopularFilters from "../../../components/hotellist/PopularFilters";
import BoardBasis from "../../../components/hotellist/BoardBasis";
import Rating from "../../../components/hotellist/Rating";
import HolidayType from "../../../components/hotellist/HolidayType";
import Facilities from "../../../components/hotellist/Facilities";
import HotelListCard from "../../../components/hotellist/HotelListCard";



const HotelList = () => {
  return (
    <>
      {/* header  */}
      <HotellistHeader />
      {/* subHeader  */}
      <HotellistSubHeader />
      {/* main */}
      <div className="bg-[#f2f2f2] container mx-auto pt-[30px] ">
        <div className="flex">
          {/* left section  */}
          <div className="left w-[315px] mr-[31px]  ">
            {/* map  */}
            <HotellistMap />

            <div id="accordion-collapse" data-accordion="collapse">
              {/* filter sections  */}
              <PopularFilters />
              <BoardBasis />
              <Rating />
              <HolidayType />
              <Facilities />
            </div>
          </div>

          {/* right section  */}
          <div className="right w-[974px]  flex flex-col gap-[22px] pb-[215px] ">
            {/* HotelListCard  */}
            <HotelListCard />
            <HotelListCard />
            <HotelListCard />
            <HotelListCard />
            <HotelListCard />
            <HotelListCard />
            <HotelListCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelList;
