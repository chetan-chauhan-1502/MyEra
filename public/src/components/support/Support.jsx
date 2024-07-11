import React from "react";

const Support = () => {
  return (
    <div className="container mx-auto  2xl:w-[934px] xl:w-[934px] lg:w-[800px] ">
      <ul className="flex gap-10 items-center justify-center bg-white relative left-0 right-0 top-[-35px] px-5 py-5 rounded-[50PX]">
        <li className="flex gap-5 border-r-2 border-[#dedede] xl:pr-[60px] lg:pr-[30px]">
          <img
            src="https://todblobstore.blob.core.windows.net/img-new-cdn/icons/Group%2010159.svg"
            alt=""
          />
          <p className="xl:text-[12px] lg:text-[11px] text-[#000]">
            100% Secure <br />{" "}
            <span className="xl:text-[10px] lg:text-[9px] text-[#616161]  font-light">
              {" "}
              Loreum Ipsum
            </span>
          </p>
        </li>
        <li className="flex gap-5 border-r-2 border-[#dedede] xl:pr-[60px] lg:pr-[30px]">
          <img
            src="https://todblobstore.blob.core.windows.net/img-new-cdn/icons/Group%2010160.svg"
            alt=""
          />
          <p className="xl:text-[12px] lg:text-[11px] text-[#000]">
            Best Prices <br />{" "}
            <span className="xl:text-[10px] lg:text-[9px] text-[#616161]  font-light">
              {" "}
              Guaranteed
            </span>
          </p>
        </li>
        <li className="flex gap-5 border-r-2 border-[#dedede] xl:pr-[60px] lg:pr-[30px]">
          <img
            src="https://todblobstore.blob.core.windows.net/img-new-cdn/icons/call.svg"
            alt=""
          />
          <p className="xl:text-[12px] lg:text-[11px] text-[#000]">
            24x7 <br />
            <span className="xl:text-[10px] lg:text-[9px] text-[#616161]  font-light">
              {" "}
              Support Provided
            </span>
          </p>
        </li>
        <li className="flex gap-5 ">
          <img
            src="https://todblobstore.blob.core.windows.net/img-new-cdn/icons/Group%202509.svg"
            alt=""
          />
          <p className="xl:text-[12px] lg:text-[11px] text-[#000]">
            Discounts <br />{" "}
            <span className="xl:text-[10px] lg:text-[9px] text-[#616161]  font-light">
              {" "}
              For You Only
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Support;
