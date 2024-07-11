import React, { useState } from "react";
import CruiseSubCard from "./CruiseSubCards";
import "./CruiseCard.css";
import { MoveRight } from "lucide-react";

const CruiseCard = () => {
  const [activeTab, setActiveTab] = useState("Last minute");

  const tabs = [
    "Last minute",
    "Far east",
    "Caribbean",
    "Med",
    "Hawaii",
    "No Fly",
    "Alaska",
  ];

  return (
    <div className="container mx-auto bg-white px-[32px] py-[26px] rounded-lg regular-shadow">
      <div className="flex flex-col md:flex-row items-center w-auto">
        <p className="text-[32px] font-bold">Today's Cruise Deals </p>
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mt-4 md:mt-0 md:ml-[27px]">
          <ul className="flex flex-wrap -mb-px">
            {tabs.map((tab) => (
              <li className="mr-2" key={tab}>
                <a
                  href="#"
                  onClick={() => setActiveTab(tab)}
                  className={`inline-block pb-[5px] px-[10px] text-[14px] text-[300] text-[#4a4a4a] ${
                    activeTab === tab
                      ? "text-[#84129a] border-b-2 border-[#84129a] font-bold"
                      : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"
                  } rounded-t-lg dark:hover:text-gray-300`}
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="pl-[13%]">
          <a
            href="#"
            className="flex gap-5 text-[16px] font-bold text-[#f15a22]"
          >
            View All <MoveRight />
          </a>
        </div>
      </div>
      <div className="mt-6">
        {activeTab === "Last minute" && <CruiseSubCard />}
        {activeTab === "Far east" && <div>Content for All Inclusive</div>}
        {activeTab === "Caribbean" && <div>Content for City Breaks</div>}
        {activeTab === "Med" && <div>Content for Nile Cruise</div>}
        {activeTab === "Hawaii" && <div>Content for Multi Centre</div>}
        {activeTab === "No Fly" && <div>Content for Summer Holidays</div>}
        {activeTab === "Alaska" && <div>Content for The Sun</div>}
      </div>
    </div>
  );
};

export default CruiseCard;
