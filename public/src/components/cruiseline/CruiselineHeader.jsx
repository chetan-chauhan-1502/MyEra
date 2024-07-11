import React from "react";
import { ChevronDown } from "lucide-react";
import "./CruiseLine.css";

const CruiselineHeader = () => {
  return (
    <>
      {/* header design  */}
      <div className="CruiseLine_bg_header h-[140px]   flex pt-[19px] ">
        <div className="container mx-auto ">
          <div className="flex justify-center gap-[14px]">
            {/* search cruise by */}
            <label
              htmlFor="Alldeals"
              className="flex flex-col w-[374px] py-[5px]  rounded-[4px] bg-white bg-opacity-[0.1] relative z-10"
            >
              <p className="flex text-[12px] text-[#f27c2c] gap-2 px-3">
                SEARCH CRUISES BY
                <ChevronDown color="#f27c2c" size={20} />
              </p>
              <button
                type="button"
                className="text-[16px] inline-flex rounded-md  px-3 text-[#ffff] "
                id="Alldeals"
                aria-expanded=""
                aria-haspopup="true"
              >
                Iceland
              </button>
            </label>

            {/* destination,port,call,line,ship,deal.. */}
            <label
              htmlFor="Alldeals"
              className="flex flex-col w-[374px] py-[5px]  rounded-[4px] bg-white bg-opacity-[0.1] relative z-10"
            >
              <p className="flex text-[12px] text-[#f27c2c] gap-2 px-3">
                SELECT DATE
                <ChevronDown color="#f27c2c" size={20} />
              </p>
              <button
                type="button"
                className="text-[16px] inline-flex rounded-md  px-3 text-[#ffff] "
                id="Alldeals"
                aria-expanded=""
                aria-haspopup="true"
              >
                28 Dec'24
              </button>
            </label>

            {/* select date */}
            <label
              htmlFor="Alldeals"
              className="flex flex-col w-[374px] py-[5px]  rounded-[4px] bg-white bg-opacity-[0.1] relative z-10"
            >
              <p className="flex text-[12px] text-[#f27c2c] gap-2 px-3">
                SELECT DATE
                <ChevronDown color="#f27c2c" size={20} />
              </p>
              <button
                type="button"
                className="text-[16px] inline-flex rounded-md  px-3 text-[#ffff] "
                id="Alldeals"
                aria-expanded=""
                aria-haspopup="true"
              >
                28 Dec'24
              </button>
            </label>

            {/* search btn */}
            <div className="flex items-center">
              <button
                className="btn-main px-[41px] py-[9px] rounded-[19.5px] text-[#fff] font-bold"
                type="button"
              >
                SEARCH
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* sub cruiseLine  */}

      <div className="bg-[#ffffff] w-[800px] h-[260px]  mx-auto rounded-[16px] p-[46px] relative bottom-[38px]">
        <h1 className="text-[#000000] font-bold text-[24px] text-center  leading-7 pb-[13px]">
          CRUISE LINES
        </h1>
        <p className="text-[#000000] text-[16px] leading-6 text-center">
          Whether you're embarking on a family holiday, looking for a luxury
          experience or an adult-only voyage, there's a cruise line that's
          perfect for you. Click below to discover more.
        </p>

        <h2 className=" h-[48px] w-[341px] mx-auto rounded-[8px] flex items-center border border-[#d6d6d6] mt-[24px] ">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium "
            aria-expanded=""
          >
            <p className="text-[16px]  text-[#4a4a4a] ">Select Cruise Line</p>
            <ChevronDown className="w-[15px]" />
          </button>
        </h2>
      </div>
    </>
  );
};

export default CruiselineHeader;
