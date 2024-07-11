import React, { useState } from "react";
import SubCard from "./SubCards";
import "./Card.css";
import { MoveRight } from "lucide-react";

const Card = () => {
  const [activeTab, setActiveTab] = useState("Top Deals");

  const tabs = [
    "Top Deals",
    "All Inclusive",
    "City Breaks",
    "Nile Cruise",
    "Multi Centre",
    "Summer Holidays",
    "The Sun",
  ];

  return (
    <div className="container mx-auto bg-white px-8 py-8 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center w-full">
        <p className="text-2xl md:text-3xl font-bold text-black lg:text-[32px]">Hot Picks</p>
        <div className="text-sm font-medium text-center text-gray-500  dark:text-gray-400 dark:border-gray-700 mt-4 md:mt-0 md:ml-7 flex-1 overflow-hidden">
          <ul className="flex flex-nowrap overflow-x-auto no-scrollbar border-b border-gray-200 2xl:w-[80%] xl:w-[77%] lg:w-[82%] ">
            {tabs.map((tab) => (
              <li className="mr-2" key={tab}>
                <a
                  href="#"
                  onClick={() => setActiveTab(tab)}
                  className={`inline-block pb-1 px-3 text-base lg:whitespace-nowrap sm:whitespace-nowrap lg:text-[14px] ${
                    activeTab === tab
                      ? "text-[#84129a] border-b-2 border-[#84129a] font-medium " 
                      : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"
                  } rounded-t-lg dark:hover:text-gray-300`}
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="pl-4 mt-4 md:mt-0 md:ml-[5%] md:pr-[9%] sm:ml-[12%] sm:pr-[20%] ">
          <a
            href="#"
            className="flex items-center gap-2 text-lg font-bold text-[#f15a22]"
          >
            View All <MoveRight />
          </a>
        </div>
      </div>
      <div className="mt-6">
        {activeTab === "Top Deals" && <SubCard />}
        {activeTab === "All Inclusive" && <div>Content for All Inclusive</div>}
        {activeTab === "City Breaks" && <div>Content for City Breaks</div>}
        {activeTab === "Nile Cruise" && <div>Content for Nile Cruise</div>}
        {activeTab === "Multi Centre" && <div>Content for Multi Centre</div>}
        {activeTab === "Summer Holidays" && <div>Content for Summer Holidays</div>}
        {activeTab === "The Sun" && <div>Content for The Sun</div>}
      </div>
    </div>
  );
};

export default Card;
