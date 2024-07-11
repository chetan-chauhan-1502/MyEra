import React, { useState } from "react";
import { Smartphone, Monitor, ChevronDown } from "lucide-react";
 
const LoginDevice = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
 
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
 
  return (
    <div id="accordion-open" data-accordion="open">
      {/* Accordion Item 1 */}
      <div className="bg-[#ffffff] mt-[14px] rounded-lg py-[30px] shadow-lg">
        <h2 id="accordion-open-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full px-[40px] gap-3 border-l-[5px] border-[#c3c3c3]"
            data-accordion-target="#accordion-open-body-1"
            aria-expanded={openAccordion === 1}
            onClick={() => toggleAccordion(1)}
            aria-controls="accordion-open-body-1"
          >
            <div className="order-l-[10px]">
              <p className="text-[30px] font-bold text-[#000] flex flex-col text-start">
                Logged in Devices
              </p>
              <p className="mt-[10px] text-[18px] text-[#4a4a4a] font-normal">
                Check all the devices where your account is logged in
              </p>
            </div>
            <ChevronDown 
              size={18} 
              color="#008cff"  
              className={`w-18px h-10px text-[#008cff] transform ${
                openAccordion === 1 ? "rotate-180" : "rotate-0"
              } shrink-0`} 
              strokeWidth={2.5} 
            />
          </button>
        </h2>
        <div
          id="accordion-open-body-1"
          className={`transition-all duration-300 ${
            openAccordion === 1 ? "block" : "hidden"
          }`}
          aria-labelledby="accordion-open-heading-1"
        >
          <div className="p-5">{/* content  */}</div>
        </div>
      </div>  
 
      {/* Accordion Item 2 */}
      <div className="bg-[#ffffff] mt-[14px] rounded-lg py-[30px] shadow-lg">
        <h2 id="accordion-open-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full px-[40px] gap-3 border-l-[5px] border-[#c3c3c3]"
            data-accordion-target="#accordion-open-body-2"
            aria-expanded={openAccordion === 2}
            onClick={() => toggleAccordion(2)}
            aria-controls="accordion-open-body-2"
          >
            <div>
              <p className="text-[30px] font-bold text-[#000] flex flex-col text-start">
                Logged in Devices
              </p>
              <p className="mt-[10px] text-[18px] text-[#4a4a4a] font-normal">
                Check all the devices where your account is logged in
              </p>
            </div>
            <ChevronDown 
              size={18} 
              color="#008cff"  
              className={`w-18px h-10px text-[#008cff] transform ${
                openAccordion === 2 ? "rotate-180" : "rotate-0"
              } shrink-0`} 
              strokeWidth={2.5} 
            />
          </button>
        </h2>
        <div
          id="accordion-open-body-2"
          className={`transition-all duration-300 ${
            openAccordion === 2 ? "block" : "hidden"
          }`}
          aria-labelledby="accordion-open-heading-2"
        >
          <div className="mt-[22px] px-[39px]">
            <div className="flex flex-col gap-6 py-[29px] border-b-[1px] border-[#e7e7e7]">
              <Monitor color="#000000" className="xl:w-[40px] h-[35px]" />
              <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-[16px] font-bold text-[#000000]">
                    Chrome{" "}
                    <span className="text-[14px] text-[#4a4a4a] font-normal">
                      (Current device)
                    </span>
                  </p>
                  <p className="text-[14px] text-[#4a4a4a]">Desktop Web</p>
                  <p className="text-[14px] text-[#4a4a4a]">BERMINGHAM, UK</p>
                  <p className="text-[14px] text-[#4a4a4a]">
                    Logged In since 11:19 am, 5th Jun'24
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 py-[29px] border-b-[1px] border-[#e7e7e7]">
              <Monitor color="#000000" className="xl:w-[40px] h-[35px]" />
              <div className="w-full flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-[16px] font-bold text-[#000000]">
                    Chrome web
                  </p>
                  <p className="text-[14px] text-[#4a4a4a]">MANCHESTER, UK</p>
                  <p className="text-[14px] text-[#4a4a4a]">bermingham, UK</p>
                  <p className="text-[14px] text-[#4a4a4a]">
                    Logged In since 11:27 am, 6th Jun'24
                  </p>
                </div>
                <div>
                  <button className="text-[16px] px-[38px] py-[10px] text-bold text-[#008cff] border-[#008cff] rounded-[10px] border-[1px] mr-5">
                    LOGOUT
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 py-[29px]">
              <Smartphone color="#000000" className="xl:w-[40px] h-[35px]" />
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col gap-1">
                  <p className="text-[16px] font-bold text-[#000000]">
                    IOS Device
                  </p>
                  <p className="text-[14px] text-[#4a4a4a]">
                    Logged In since 10:55 am, 28th Apr'24
                  </p>
                  <p className="text-[14px] text-[#4a4a4a]"></p>
                  <p className="text-[14px] text-[#4a4a4a]"></p>
                </div>
                <div>
                  <button className="text-[16px] px-[38px] py-[10px] text-bold text-[#008cff] border-[#008cff] rounded-[10px] border-[1px] mr-5">
                    LOGOUT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default LoginDevice;