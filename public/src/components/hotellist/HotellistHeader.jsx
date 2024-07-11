import { ChevronDown } from 'lucide-react'
import React from 'react'

const HotellistHeader = () => {
  return (
    <>
       {/* header  */}

       <div className="hotel_list_bg    ">
        <div className="container mx-auto ">
          <div className=" flex justify-between items-center pt-[19px] ">
            <div className="flex justify-start gap-[5px] ">
              <label className="w-[220px]   bg-[#ffffff] bg-opacity-[0.1] py-[6px] px-[10px] rounded-[4px] ">
                <p className="text-[12px] flex justify-start items-center gap-[7px]  text-[#f27c2c] ">
                  FROM
                  <ChevronDown size={16} />
                </p>
                <p className="mt-[3px]  text-[16px] text-[#ffffff] leading-[1.19]">Greece</p>
              </label>
              <label className="w-[220px] bg-[#ffffff] bg-opacity-[0.1] py-[6px] px-[10px] rounded-[4px]  ">
                <p className="text-[12px] flex justify-start items-center gap-[7px]  text-[#f27c2c] ">
                  TO
                  <ChevronDown size={16} />
                </p>
                <p className="mt-[3px] text-[16px] text-[#ffffff] leading-[1.19]">Rimini</p>
              </label>
              <label className="w-[220px] bg-[#ffffff] bg-opacity-[0.1] py-[6px] px-[10px] rounded-[4px] ">
                <p className="text-[12px] flex justify-start items-center gap-[7px]  text-[#f27c2c] ">
                  DEPARTURE
                  <ChevronDown size={16} />
                </p>
                <p className="mt-[3px] text-[16px] text-[#ffffff] leading-[1.19]">
                  21 Dec'24
                </p>
              </label>
              <label className="w-[220px] bg-[#ffffff] bg-opacity-[0.1] py-[6px] px-[10px]  rounded-[4px] ">
                <p className="text-[12px] flex justify-start items-center gap-[7px]  text-[#f27c2c] ">
                  RETURN
                  <ChevronDown size={16} />
                </p>
                <p className="mt-[3px] text-[16px] text-[#ffffff] leading-[1.19]">
                  28 Dec'24
                </p>
              </label>
              <label className="w-[220px] bg-[#ffffff] bg-opacity-[0.1] py-[6px] px-[10px] rounded-[4px]  ">
                <p className="text-[12px] flex justify-start items-center gap-[7px]  text-[#f27c2c] ">
                  TRAVELERS
                  <ChevronDown size={16} />
                </p>
                <p className="mt-[3px] text-[16px] text-[#ffffff] leading-[1.19] ">
                  02 Traveller
                </p>
              </label>
            </div>

            <div>
              <p className="px-[49px] py-[9px]  hotel_list_search rounded-[27px] text-[18px] font-bold text-[#ffffff] leading-[1.17] cursor-pointer ">
                SEARCH
              </p>
            </div>
          </div>
          <div className='pb-[12px] '>
            <p className="text-[12px] text-[#ffffff] mt-[14px] leading-[1.17] ">
              Hotels and more in Greece
            </p>

            <p className="text-[24px] text-[#ffffff] font-bold  leading-[1.21]">
              1946 Properties in Greece
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HotellistHeader
