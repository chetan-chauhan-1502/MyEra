import { MapPin } from "lucide-react";
import React from "react";

const HotellistMap = () => {
  return (
    <>
      <div className="w-full h-[104px] relative ">
        <img
          src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/map.png"
          alt=""
          className="w-full h-full rounded-[6px] shadow-md"
        />

        <button className="absolute bottom-[18px] left-[18px] mx-[18px] w-[230px] h-[32px] bg-[#f2f2f2] border-[1px] border-[#84129a] rounded-[4px] text-[10px] font-bold text-[#84129a] flex justify-center items-center gap-[2px] leading-[1.2] ">
          EXPLORE ON MAP
          <MapPin size={11} color="#84129a" />
        </button>
      </div>
    </>
  );
};

export default HotellistMap;
