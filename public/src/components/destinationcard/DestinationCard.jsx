import React from "react";
import { useState } from "react";
import { MoveRight } from "lucide-react";
import SubDestination from "./SubDestination";
import "./Destination.css";

const DestinationCard = () => {
  return (
    <div className="container mx-auto mt-[40px] mb-[50px]  bg-white px-[32px] py-[26px] rounded-lg regular-shadow">
      <div className="flex flex-col md:flex-row items-center  justify-between pr-[97px]">
        <p className="text-[32px] font-bold ml-[10px]">Top Destination</p>
        <a href="#" className="flex gap-5 text-[16px] font-bold text-[#f15a22]">
          View All <MoveRight />
        </a>
      </div>
      <div className="mt-[30px]">
        <SubDestination />
      </div>
    </div>
  );
};

export default DestinationCard;
