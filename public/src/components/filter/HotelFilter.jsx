import "../filter/filter.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import { addDays } from "date-fns";
import "react-date-range/dist/theme/default.css";
import { getDays, getMonths } from "../../common/DatePicker";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Calendar, Minus,Plus } from "lucide-react";
import DropdownComponent from "./Dropdown";


const HotelFilter = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      currentDate : new Date(),

      key: "selection",
    },
  ]);
  const [count, setCount] = useState(0);
  const [hidden, setHidden] = useState(false);
  // const [startDate, setStartDate] = useState(false);
  // const [endDate, setEndDate] = useState(true);
  const [isEditOpen, setEditOpen] = useState(false);
  const [isEditOpen1, setEditOpen1] = useState(false);
  const [isDatePicker, setIsDatePicker] = useState(false);
  const [isCityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [isTravellerDropdownOpen, setTravellerDropdownOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const destinationType = [
    { title: "Iceland", subTitle: "Iceland", code: "Country" },
    { title: "Greece", subTitle: "Greece", code: "UK" },
    { title: "France", subTitle: "France", code: "France" },
  
   
  ];
 
console.log(state[0].currentDate);
  const date = state[state.length- 1];
  const minDate = date.currentDate;
  // const maxDate = addDays(minDate,30);

  const [numChildren, setNumChildren] = useState(0);

  const handleChildrenChange = (event) => {
    setNumChildren(parseInt(event.target.value, 10));
  };

  const handleClear = () => {
    setSearchText("");
  };
  const handleChildrenClick = (event) => {
    event.stopPropagation(); // Prevent click event from bubbling up
  };
  const handleDropdownItemClick = (clickedItem) => {
    console.log("Clicked Item:", clickedItem);
    // Use the clickedItem value in this component or pass it further down
  }; 
  const toggleEditOpen = () => {
    setEditOpen(!isEditOpen);
    setEditOpen1(false);
  };
  const toggleEditOpen1 = () => {
    setEditOpen1(!isEditOpen1);
    setEditOpen(false);
  };
  const toggleCityDropdown = () => {
    setCityDropdownOpen(!isCityDropdownOpen);
    setTravellerDropdownOpen(false);
    setIsDatePicker(false);
  };
  const toggleTravellerDropdown = () => {
    setTravellerDropdownOpen(!isTravellerDropdownOpen);
    setCityDropdownOpen(false);
    setIsDatePicker(false);
  };
  const onClick = () => {
    setIsDatePicker(!isDatePicker);
    // setStartDate(!startDate);
    // setEndDate(!endDate);
    setTravellerDropdownOpen(false);
    setCityDropdownOpen(false);
  };
  return (
    <>
      <div className="flex items-center bg-white border-[1px] rounded-[20px] h-[100px] relative">
        {/* City, Property Name Or Location */}
       
        <DropdownComponent
          type="destination"
          onItemClick={handleDropdownItemClick}
          defaultDropdownItem={destinationType[0]}
          dropdownItems={destinationType}
          divClassName={
            "  px-[20px] w-[481px] pt-[11px]   border-r-[1px] h-[100%] hover:bg-[#f2f2f2] rounded-l-[18px] relative"
          }
          ulClassName={
            "border overflow-y-auto h-[141px]  holidayquotes_scroll   deals_dropdown w-full rounded-b-[10px] bg-[#ffffff]"
          }
          dropdownMenuClass={"bottom-[75px] z-[2] w-full relative dropdown_main_search"}
          dropdownHeading={"From"}
          defaultSubHeading={"ATH, Athens Airport Greece"}


       
          
        >
          <div className="relative top-[34px]" onClick={handleChildrenClick}>
            <input
              type="text"
              placeholder="Search country"
              className="cust_search p-2 border-b  text-[14px] pr-[60px]"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            {searchText && (
              <button
                className="absolute right-2 top-[12px] text-[12px] transform-translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={handleClear}
              >
                CLEAR
              </button>
            )}
          </div>
        </DropdownComponent>
        {/* Check In  */}
        <div
          className={`w-[159px]  pl-[21px] pt-[11px]  h-[100%] border-r-[1px] relative hover:bg-[#f2f2f2] ${
            isDatePicker ? "bg-[#f2f2f2] " : ""
          }`}
        >
          <a href="#" onClick={onClick}>
            <p className="text-[14px] font-light text-[#4a4a4a] flex items-center leading-normal">
              Check In{""}
              <ChevronDown
                color="#84129a"
                strokeWidth={1.25}
                size={"20px"}
                className="pl-[5px]"
              />
            </p>
            <h3
              id="To_selectedCountry"
              className="text-[30px] font-bold text-[#000000]  leading-tight"
            >
              {date.startDate.getDate()}
              <span className="text-[20px] font-light text-[#000000] mx-[6px]">
                {getMonths(date.startDate.getMonth())}'
                {date.startDate.getFullYear().toString().slice(2)}
              </span>
            </h3>
            <span
              id="To_selectedAirport"
              className="text-[14px] font-light text-[#4a4a4a] leading-normal"
            >
              {getDays(date.startDate.getDay())}
            </span>
          </a>
        </div>

        {/* Check Out */}
        <div
          className={`w-[159px] pl-[21px] pt-[11px]   h-[100%] border-r-[1px] hover:bg-[#f2f2f2] ${
            isDatePicker ? "bg-[#f2f2f2]" : ""
          }`}
        >
          <a href="#" onClick={onClick}>
            <p className="text-[14px] font-light text-[#4a4a4a] flex items-center leading-normal">
              Check Out{""}
              <ChevronDown
                color="#84129a"
                strokeWidth={1.25}
                size={"20px"}
                className="pl-[5px]"
              />
            </p>
            <h3
              id="To_selectedCountry"
              className="text-[30px] font-bold text-[#000000] leading-tight"
            >
              {date.endDate.getDate()}
              <span className="text-[20px] font-light text-[#000000] mx-[6px]">
                {getMonths(date.endDate.getMonth())}'
                {date.endDate.getFullYear().toString().slice(2)}
              </span>
            </h3>
            <span
              id="To_selectedAirport"
              className="text-[14px] font-light text-[#4a4a4a] leading-normal"
            >
              {getDays(date.endDate.getDay())}
            </span>
          </a>
          {hidden && (
            <div className="absolute z-10 top-[90px] left-[630px]" id="tooltip">
              <span className="tooltip-text" id="bottom_tooltip">
                You can selct up to 14 Days only!
              </span>
            </div>
          )}
        </div>
        {isDatePicker ? (
          <div className=" absolute z-10 top-[30px] right-[12.4%] applybox_btn_shadow rounded-md  ">
            <div className="flex flex-row border border-gray-100  gap-8 justify-start pt-[10px] pl-[20px] pb-[2px] bg-[#ffffff] rounded-t-[4px] applybox_btn_shadow z-10 relative">
              <div className="flex items-center gap-2 text-[#000000] ">
                <Calendar className="h-[12px] w-[12px] text-[#707070] " />
                <p
                  className={`  font-medium text-[16px] 
                  } `}
                >
                  {date.startDate.getDate()}{" "}
                  {getMonths(date.startDate.getMonth())}'
                  {date.startDate.getFullYear().toString().slice(2)}{" "}
                </p>
              </div>
              <div className="">
                <p className="text-[#000000]  font-bold">-</p>
              </div>
              <div className="flex  items-center gap-1 text-[#000000]">
                <Calendar className="h-[12px] w-[12px] text-[#707070]  " />
                <p className=" pl-[3px] text-[16px] font-medium">
                  {date.endDate.getDate()} {getMonths(date.endDate.getMonth())}'
                  {date.endDate.getFullYear().toString().slice(2)}
                </p>
              </div>
            </div>
            <DateRange
              className="w-[640px] cust_date"
              onChange={(item) => {
                setState([item.selection]);
                setCount(count + 1);
                item.selection.endDate > addDays(item.selection.startDate, 14)
                  ? setHidden(true)
                  : setHidden(false);
                count % 2 === 1
                  ? setIsDatePicker(!isDatePicker)
                  : setIsDatePicker(isDatePicker);
              }}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={state}
              direction="horizontal"
              minDate={minDate}
              //maxDate={maxDate}
              color="#f27c2c"
              rangeColors={["#f27c2c"]}
            />
          </div>
        ) : (
          <div className="absolute"></div>
        )}
        {/* Room & Guests */}

        <div
          className={`w-[483px] px-[20px] pt-[6px]  pb-[10px] h-[100%] relative hover:bg-[#f2f2f2] rounded-r-[18px]${
            isTravellerDropdownOpen ? "bg-[#f2f2f2] rounded-r-[20px] " : ""
          }`}
        >
          <a href="#" onClick={toggleTravellerDropdown}>
            <p className="text-[14px] font-light text-[#4a4a4a] flex items-center leading-normal">
              Rooms & Guests{" "}
              <ChevronDown
                color="#84129a"
                strokeWidth={1.25}
                size={"18px"}
                className="mx-[9px] mb-[5px]"
              />
            </p>
            <h3
              id="To_selectedCountry"
              className="text-[30px] font-bold text-[#000000] leading-tight"
            >
              02
              <span className="text-[20px] font-light text-[#000000] mx-[6px]">
                Traveller
              </span>
            </h3>
            <span
              id="To_selectedAirport"
              className="text-[14px] font-light text-[#4a4a4a] leading-normal"
            >
              Economy/Premium Economy
            </span>
          </a>
          {isTravellerDropdownOpen && (
            <div className="absolute bg-white w-[483px]  shadow-lg mt-[-60px] z-10 left-[-1px] rounded-[4px] ">
              <div className="  px-[20px] py-[30px] ">
                {!isEditOpen && (
                  <>
                    {/* Room Title & Edit option  */}
                    <div className=" mb-[15px] border-b">
                      <p className="text-[#4a4a4a] text-[12px] font-bold">
                        ROOM1
                      </p>
                      <p className="text-[14px] text-[#4a4a4a] font-normal pb-[10px]">
                        2 Adults{" "}
                        <span
                          className="text-[12px] text-[#f27c2c] font-normal pl-[8px]"
                          onClick={toggleEditOpen}
                        >
                          Edit{" "}
                        </span>
                      </p>
                    </div>
                  </>
                )}
                {isEditOpen && (
                  <>
                    {/* Total 4 guests(Max. 3 adults) allowed in a room */}

                    <div className=" bg-[#e9e9e9] items-center justify mt-[15px] ">
                      <p className="text-[14px] text-[#4a4a4a] px-[16px] py-[10px]">
                        Total 4 guests(Max. 3 adults) allowed in a room
                      </p>
                    </div>

                    <div className="flex flex-col py-[16px] ">
                      {/* Room & Remove  */}
                      <div className="flex justify-between mb-[15px]">
                        <p className="text-[12px] font-bold text-[#4a4a4a]">
                          ROOM 1
                        </p>
                        <p className="text-[12px] font-bold text-[#f27c2c]">
                          REMOVE
                        </p>
                      </div>
                      {/* Adults & child  */}
                      <div className="flex justify-between">
                        {/* Adults  */}
                        <div className="">
                          <p className="font-bold text-[#4a4a4a] text-[12px]">
                            Adults{" "}
                            <span className="font-light text-[#4a4a4a] text-[12px]">
                              - Above 12 Years
                            </span>
                          </p>
                          <div
                            className=" border rounded-[4px] w-[70%] mr-[18px] mt-[5px] flex items-center justify-center"
                            style={{
                              boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
                            }}
                          >
                            <Minus size={20} />
                            <input
                              type="text"
                              readonly
                              className="text-[22px] w-[50%] border-none text-center"
                              value="02"
                            />
                            <Plus size={20} />
                          </div>
                        </div>
                        {/* Child */}
                        <div className="flex flex-col items-end">
                          <p className="font-bold text-[#4a4a4a] text-[12px] pr-[32px]">
                            Children{" "}
                            <span className="font-light text-[#4a4a4a] text-[12px]">
                              - Below 12 Years
                            </span>
                          </p>
                          <div
                            className=" border rounded-[4px] w-[70%] mr-[18px] mt-[5px] flex items-center justify-center"
                            style={{
                              boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
                            }}
                          >
                            <Minus size={20} />

                            <input
                              type="text"
                              readonly
                              className="text-[22px] w-[50%] border-none text-center"
                              value="01"
                            />
                            <Plus size={20} />
                          </div>
                        </div>
                      </div>

                      {/* child Age  */}
                      <div className=" mt-[28px]">
                        <p className=" font-bold text-[#4a4a4a] text-[12px]">
                          Child - Age Needed
                        </p>
                        <p className="flex">
                          <p className="text-[#4a4a4a] text-[12px] font-normal w-[80%] truncate ... ">
                            Please select child's age as on the last day of
                            travel{" "}
                          </p>
                          <span className=" text-[12px] text-[#f27c2c] w-[20%] font-normal text-right">
                            Know More
                          </span>
                        </p>
                        <p className="text-[#4a4a4a] text-[14px] font-normal my-[13px] ">
                          Age of Child 1
                        </p>

                        <ul className="flex  border-solid border-none border-2  rounded-[4px] box_shadow_age text-[14px] font-normal  justify-center ">
                          <li className="hover:bg-[#f27c2c] hover:text-[#ffffff] hover:rounded-[4px] py-[10px] px-[14px] ">
                            0
                          </li>
                          <li className="hover:bg-[#f27c2c]  hover:text-[#ffffff] hover:rounded-[4px] py-[10px] px-[14px]">
                            1
                          </li>
                          <li className="hover:bg-[#f27c2c] hover:text-[#ffffff] hover:rounded-[4px] py-[10px] px-[14px]">
                            2
                          </li>
                          <li className="hover:bg-[#f27c2c] hover:text-[#ffffff] hover:rounded-[4px] py-[10px] px-[14px]">
                            3
                          </li>
                          <li className="hover:bg-[#f27c2c]  hover:text-[#ffffff] hover:rounded-[4px] py-[10px] px-[14px]">
                            4
                          </li>
                          <li className="hover:bg-[#f27c2c] hover:text-[#ffffff] hover:rounded-[4px] py-[10px] px-[14px]">
                            5
                          </li>
                          <li className="hover:bg-[#f27c2c] hover:text-[#ffffff] hover:rounded-[4px] py-[10px] px-[14px]">
                            6
                          </li>
                          <li className="hover:bg-[#f27c2c] hover:text-[#ffffff] hover:rounded-[4px] py-[10px] px-[14px]">
                            7
                          </li>
                          <li className="hover:bg-[#f27c2c] hover:text-[#ffffff] hover:rounded-[4px] py-[10px] px-[14px]">
                            8
                          </li>
                          <li className="hover:bg-[#f27c2c] hover:text-[#ffffff] hover:rounded-[4px] py-[10px] px-[14px]">
                            9
                          </li>
                          <li className="hover:bg-[#f27c2c] hover:text-[#ffffff] hover:rounded-[4px] py-[10px] px-[14px]">
                            10
                          </li>
                          <li className="hover:bg-[#f27c2c] hover:text-[#ffffff] hover:rounded-[4px] py-[10px] px-[8px]">
                            11
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr class="h-px mb-[10px] bg-gray-200 border-0 dark:bg-gray-700"></hr>
                  </>
                )}

                {/* 2 */}
                {!isEditOpen1 && (
                  <>
                    {/* Room Title & Edit option  */}
                    <div className="">
                      <p className="text-[#4a4a4a] text-[12px] font-bold">
                        ROOM2
                      </p>
                      <p className="text-[14px] text-[#4a4a4a] font-normal">
                        2 Adults, 2 childrens{" "}
                        <span
                          className="text-[12px] text-[#f27c2c] font-normal pl-[8px]"
                          onClick={toggleEditOpen1}
                        >
                          Edit{" "}
                        </span>
                      </p>
                    </div>
                  </>
                )}
                {isEditOpen1 && (
                  <>
                    {/* Total 4 guests(Max. 3 adults) allowed in a room */}

                    <div className=" bg-[#e9e9e9] items-center justify mt-[15px] ">
                      <p className="text-[14px] text-[#4a4a4a] px-[16px] py-[10px]">
                        Total 4 guests(Max. 3 adults) allowed in a room
                      </p>
                    </div>

                    <div className="flex flex-col py-[16px] ">
                      {/* Room & Remove  */}
                      <div className="flex justify-between mb-[15px]">
                        <p className="text-[12px] font-bold text-[#4a4a4a]">
                          ROOM 2
                        </p>
                        <p className="text-[12px] font-bold text-[#f27c2c]">
                          REMOVE
                        </p>
                      </div>
                      {/* Adults & child  */}
                      <div className="flex justify-between">
                        {/* Adults  */}
                        <div className="">
                          <p className="font-bold text-[#4a4a4a] text-[12px]">
                            Adults{" "}
                            <span className="font-light text-[#4a4a4a] text-[12px]">
                              - Above 12 Years
                            </span>
                          </p>
                          <div
                            className=" border rounded-[4px] w-[70%] mr-[18px] mt-[5px] flex items-center justify-center"
                            style={{
                              boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
                            }}
                          >
                            <Minus size={20} />
                            <input
                              type="text"
                              readonly
                              className="text-[22px] w-[50%] border-none text-center"
                              value="02"
                            />
                            <Plus size={20} />
                          </div>
                        </div>
                        {/* Child */}
                        <div className="flex flex-col items-end">
                          <p className="font-bold text-[#4a4a4a] text-[12px] pr-[32px]">
                            Children{" "}
                            <span className="font-light text-[#4a4a4a] text-[12px]">
                              - Below 12 Years
                            </span>
                          </p>
                          <div
                            className=" border rounded-[4px] w-[70%] mr-[18px] mt-[5px] flex items-center justify-center"
                            style={{
                              boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
                            }}
                          >
                            <Minus size={20} />

                            <input
                              type="text"
                              readonly
                              className="text-[22px] w-[50%] border-none text-center"
                              value="01"
                            />
                            <Plus size={20} />
                          </div>
                        </div>
                      </div>

                      {/* child Age  */}
                      <div className=" mt-[28px]">
                        <p className=" font-bold text-[#4a4a4a] text-[12px]">
                          Child - Age Needed
                        </p>
                        <p className="flex">
                          <p className="text-[#4a4a4a] text-[12px] font-normal w-[80%] truncate ... ">
                            Please select child's age as on the last day of
                            travel{" "}
                          </p>
                          <span className=" text-[12px] text-[#f27c2c] w-[20%] font-normal text-right">
                            Know More
                          </span>
                        </p>
                        <p className="text-[#4a4a4a] text-[14px] font-normal my-[13px] ">
                          Age of Child 1
                        </p>

                        <ul className="flex  border-solid border-none border-2  rounded-[4px] box_shadow_age text-[14px] font-normal  justify-center ">
                          <li className="hover:bg-[#f27c2c] hover:text-[#ffffff] hover:rounded-[4px] py-[10px] px-[14px] ">
                            0
                          </li>
                          <li className="hover:bg-[#f27c2c]  hover:text-[#ffffff] hover:rounded-[4px] py-[10px] px-[14px]">
                            1
                          </li>
                          <li className="hover:bg-[#f27c2c] hover:text-[#ffffff] hover:rounded-[4px] py-[10px] px-[14px]">
                            2
                          </li>
                          <li className="hover:bg-[#f27c2c] hover:text-[#ffffff] hover:rounded-[4px] py-[10px] px-[14px]">
                            3
                          </li>
                          <li className="hover:bg-[#f27c2c]  hover:text-[#ffffff] hover:rounded-[4px] py-[10px] px-[14px]">
                            4
                          </li>
                          <li className="hover:bg-[#f27c2c] hover:text-[#ffffff] hover:rounded-[4px] py-[10px] px-[14px]">
                            5
                          </li>
                          <li className="hover:bg-[#f27c2c] hover:text-[#ffffff] hover:rounded-[4px] py-[10px] px-[14px]">
                            6
                          </li>
                          <li className="hover:bg-[#f27c2c] hover:text-[#ffffff] hover:rounded-[4px] py-[10px] px-[14px]">
                            7
                          </li>
                          <li className="hover:bg-[#f27c2c] hover:text-[#ffffff] hover:rounded-[4px] py-[10px] px-[14px]">
                            8
                          </li>
                          <li className="hover:bg-[#f27c2c] hover:text-[#ffffff] hover:rounded-[4px] py-[10px] px-[14px]">
                            9
                          </li>
                          <li className="hover:bg-[#f27c2c] hover:text-[#ffffff] hover:rounded-[4px] py-[10px] px-[14px]">
                            10
                          </li>
                          <li className="hover:bg-[#f27c2c] hover:text-[#ffffff] hover:rounded-[4px] py-[10px] px-[8px]">
                            11
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr class="h-px mb-[10px] bg-gray-200 border-0 dark:bg-gray-700"></hr>
                  </>
                )}
              </div>
              <div></div>
              <div className="py-[20px] px-[19px] flex justify-end items-center applybox_btn_shadow pr-[29px] ">
                <button
                  type="submit"
                  className="border border-[#f27c2c] rounded-[4px] px-[10px] py-[10px] text-[#f15a22] text-[14px] mr-[50px] "
                >
                  Add Another Room +
                </button>

                <button
                  type="submit"
                  className="border border-[#f27c2c] rounded-[4px] px-[34px] py-[10px] text-[#ffffff] text-[14px] btn-main"
                  onClick={toggleTravellerDropdown}
                >
                  APPLY
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HotelFilter;
