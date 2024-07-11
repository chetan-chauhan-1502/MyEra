import React from "react";
import "../../assets/css/global.css";

const Footers = () => {
  return (
    <footer className="footer-1 bg-[#333333] py-8 sm:py-12 ">
      <div className="container mx-auto px-4">
        <div className="sm:flex  sm:-mx-4 md:py-4 grid grid-cols-4  gap-[85px] justify-center">
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6  ">
            <h5 className="  mb-[18px] text-[#d6d6d6]  text-[14px] font-bold">INFORMATION</h5>
            <ul className="list-none footer-links leading-8">
              <li >
                <a href="#" className="border-b border-solid border-transparent text-white   text-[12px] font-normal ">About travelodeal</a>
              </li>
              <li >
                <a href="#" className="border-b border-solid border-transparent text-white text-[12px] font-normal ">FAQ's</a>
              </li>
              <li >
                <a href="#" className="border-b border-solid border-transparent text-white text-[12px] font-normal ">Terms & Conditions</a>
              </li>
              <li >
                <a href="#" className="border-b border-solid border-transparent text-white text-[12px] font-normal ">Privacy Policy</a>
              </li>
              <li >
                <a href="#" className="border-b border-solid border-transparent text-white text-[12px] font-normal ">Cookies</a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0 ">
            <h5 className="mb-[18px] text-[#d6d6d6] text-[14px] font-bold" >HOTELS</h5>
            <ul className="list-none footer-links  leading-8">
              <li >
                <a href="#" className="border-b border-solid border-transparent text-[12px] font-normal  text-[#ffffff]">Hotel in Malta</a>
              </li>
              <li >
                <a href="#" className="border-b border-solid border-transparent text-[12px] font-normal  text-white">Hotel in Iceland</a>
              </li>
              <li >
                <a href="#" className="border-b border-solid border-transparent text-[12px] font-normal  text-white">Hotel in Gibraltar</a>
              </li>
              <li >
                <a href="#" className="border-b border-solid border-transparent text-[12px] font-normal  text-white">Hotel in Dubrovnik</a>
              </li>
              <li >
                <a href="#" className="border-b border-solid border-transparent text-[12px] font-normal  text-white">Hotel in Croatia</a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0 ">
            <h5 className="text-[14px]  mb-[18px] text-[#d6d6d6] font-bold">HOLIDAYS</h5>
            <ul className="list-none footer-links leading-8">
              <li >
                <a href="#" className="border-b border-solid border-transparent text-[12px] font-normal text-white">All Inclusive</a>
              </li>
              <li >
                <a href="#" className="border-b border-solid border-transparent text-[12px] font-normal text-white">City Break</a>
              </li>
              <li >
                <a href="#" className="border-b border-solid border-transparent text-[12px] font-normal text-white">Beach</a>
              </li>
              <li >
                <a href="#" className="border-b border-solid border-transparent text-[12px] font-normal text-white">Family</a>
              </li>
              <li >
                <a href="#" className="border-b border-solid border-transparent text-[12px] font-normal text-white">Cookies</a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0 ">
            <h5 className="text-[14px]  mb-[18px] text-[#d6d6d6] font-bold">DESTINATIONS</h5>
            <ul className="list-none footer-links leading-8">
              <li >
                <a href="#" className="border-b border-solid border-transparent text-[12px] font-normal text-white">Greece</a>
              </li>
              <li >
                <a href="#" className="border-b border-solid border-transparent text-[12px] font-normal text-white">Spain</a>
              </li>
              <li >
                <a href="#" className="border-b border-solid border-transparent text-[12px] font-normal text-white">France</a>
              </li>
              <li >
                <a href="#" className="border-b border-solid border-transparent text-[12px] font-normal text-white">Italy</a>
              </li>
              <li >
                <a href="#" className="border-b border-solid border-transparent text-[12px] font-normal text-white">Portugal</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex mt-6 pt-6 sm:mt-12 sm:pt-12 border-t ... justify-items-between relative flex-row gap-16 ">
          <img
            src="https://todblobstore.blob.core.windows.net/img-new-cdn/logo/tod-logo.svg"
            alt=""
            className="absolute top-[-27%]  right-[0px] left-[0px] m-auto py-0 px-[45px] bg-[#333]"
          />
          <div className=" px-6 md:w-1/8 text-[#ffffff] w-[80%]">
            <p className="mb-[12px]">
              © 2020 Travelodeal Holidays. All Rights Reserved
            </p>
            <p className="text-xs  ">
              The Foreign, Commonwealth & Development Office (FCDO) provides the
              latest travel advice by country including safety and security,
              entry requirements, travel warnings and health. For the latest
              FCDO advice please refer to www.travelaware.campaign.gov.uk. Keep
              up to date with current travel health news by visiting
              www.travelhealthpro.org.uk. Please note the advice can change so
              check regularly for updates.
            </p>
          </div>
          <div className="w-[50%]  flex flex-col items-end ">
            <p className=" mb-2 text-white pr-[70px] ">PAYMENTS PARTNERS</p>
            <div className="flex flex-row items-center gap-8">
              <img
                src="https://todblobstore.blob.core.windows.net/img-new-cdn/icons/Debit%20Card.png"
                alt="Debit-card"
                className="w-[82px] h-[42px]"
              />
              <img
                src="https://todblobstore.blob.core.windows.net/img-new-cdn/icons/visa.png"
                alt="Debit-card"
                className="w-[65px] h-[20px]"
              />
              <img
                src="https://todblobstore.blob.core.windows.net/img-new-cdn/icons/Amex.png"
                alt="Debit-card"
                className="w-[44px] h-[43px]"
              />
            </div>
            <ul className="flex flex-row text-white pt-5   ">
              <li className=" text-xs border-r-2 pr-2 mr-2 h-[15px]">Help</li>
              <li className=" text-xs border-r-2  pr-2 mr-2 h-[15px] ">Send</li>
              <li className=" text-xs border-r-2  pr-2 mr-2 h-[15px] ">
                Feedback
              </li>
              <li className=" text-xs mr-2 h-[10px] "> Privacy Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
