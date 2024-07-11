import React from "react";
import CruiselineHeader from "../../components/cruiseline/CruiselineHeader";
import CruiselineCard from "../../components/cruiseline/CruiselineCard";
import MoreCruiseIdeas from "../../components/cruiseline/MoreCruiseIdeas";

const CruiseLines = () => {
  return (
    <>
      {/* main div  */}
      <div className="main bg-[#f2f2f2] ">
        {/* CruiseKine Header Section Design  */}
        <CruiselineHeader />
        {/* Cruisecard */}
        <CruiselineCard />
        {/* More Cruise Ideas section */}
        <MoreCruiseIdeas />
      </div>
    </>
  );
};

export default CruiseLines;
