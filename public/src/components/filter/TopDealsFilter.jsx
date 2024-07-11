import React, { useState } from "react";
import { ChevronDown, Navigation } from "lucide-react";
import { Calendar } from "react-date-range";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { months, filter, departure } from "../../common/DatePicker";
import DropdownComponent from "./Dropdown";

const TopDealsFilter = () => {
  const [datePicker, setDatePicker] = useState(false);
  const [specificDateTab, setSpecificDateTab] = useState(false);
  const [flexibleDate, setflexibleDate] = useState(true);
  const [isDealsDropdownOpen, setDealsDropdownOpen] = useState(false);
  const [isDestinationDropdownOpen, setDestinationDropdownOpen] =
    useState(false);
  const [searchText, setSearchText] = useState("");
  const [date, setDate] = useState(null);
  const id = `dropdown${Math.floor((Math.random() * 100).toString())}`;
  const dealTypes = ["All Deals", "Hotels", "Beach Deals" ];
  const destination=[{ country: "canada", image:"https://todblobstore.blob.core.windows.net/img-new-cdn/icons/Flag_of_Canada.svg" },
  { country: "ireland", image:"https://todblobstore.blob.core.windows.net/img-new-cdn/icons/ireland.svg" },
  { country: "canada", image:"https://todblobstore.blob.core.windows.net/img-new-cdn/icons/Flag_of_Canada.svg"},
  { country: "canada", image:"https://todblobstore.blob.core.windows.net/img-new-cdn/icons/Flag_of_Canada.svg" },
  { country: "ireland", image:"https://todblobstore.blob.core.windows.net/img-new-cdn/icons/ireland.svg" },
  { country: "canada", image:"https://todblobstore.blob.core.windows.net/img-new-cdn/icons/Flag_of_Canada.svg"}
  ]
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
  const toggleDealsDropdown = () => {
    setDealsDropdownOpen(!isDealsDropdownOpen);
    if (!isDealsDropdownOpen) {
      setDestinationDropdownOpen(false);
    }
  };
  const toggleDestinationDropdown = () => {
    setDestinationDropdownOpen(!isDestinationDropdownOpen);
    if (!isDestinationDropdownOpen) {
      setDealsDropdownOpen(false);
    }
  };
  const toggleDatePicker = () => {
    setDatePicker(!datePicker);
  };
  const toggleSpecificDateTab = () => {
    setSpecificDateTab(!specificDateTab);
    setflexibleDate(!flexibleDate);
  };
  const toggleFlexibleDate = () => {
    setSpecificDateTab(!specificDateTab);
    setflexibleDate(!flexibleDate);
  };

  return (
    <>
      <div className="flex items-center bg-white border-[1px] rounded-[20px] xl:h-[100px] relative">
        {/* Deal Types  */}

        <DropdownComponent
          type="deals"
          id={id}
          defaultDropdownItem={dealTypes[0]}
          dropdownItems={dealTypes}
          onItemClick={handleDropdownItemClick}
          dropdownHeading={"Deal Types"}
          divClassName={
            "px-[20px] w-[421px] pt-[11px] h-[100%] border-r-[1px] hover:bg-[#f2f2f2]  relative rounded-tl-[19px] rounded-bl-[19px]"
          }
          dropdownMenuClass={
            " bottom-[70px] z-[2] w-full relative dropdown_main_search  "
          }
          ulClassName={
            "border overflow-y-auto h-[141px]  holidayquotes_scroll  deals_dropdown w-full  rounded-b-[10px] bg-[#ffffff] "
          }
          // liClassName={"flex flex-row p-[10px] hover:bg-gray-100   justify-between items-center hover:text-[#000000]"}
        >
          {/* For search Box */}
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

        {/* Select Destination   */}
        


        <DropdownComponent
        type="topDealDestination"
        id={id}
        defaultDropdownItem={destination[0].country}
        dropdownItems={destination}
        onItemClick={handleDropdownItemClick}
        dropdownHeading={" Select a destination"}
        divClassName={
          "w-[426px] pt-[11px] px-[20px]  h-[100%] hover:bg-[#f2f2f2]  border-r-[1px] relative"
        }
        dropdownMenuClass={
          " bottom-[70px] z-[2] w-full relative dropdown_main_search "
        }
        ulClassName={
          "border overflow-y-auto h-[141px]  holidayquotes_scroll   w-full  rounded-b-[10px] bg-[#ffffff] "
        }
        >
           {/* For search Box */}
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


        {/* Choose Date and Month */}
        <div
          className="w-[432px]  px-[20px]  pt-[11px] h-[100%] rounded-r-[18px] hover:bg-[#f2f2f2]  relative "
          onClick={toggleDatePicker}
        >
          <a href="#" id="To_toggleDropdown">
            <p className="xl:text-[14px] lg:text-[12px] font-light text-[#4a4a4a] flex items-center leading-normal">
              Choose Date and Month{" "}
              <ChevronDown
                color="#84129a"
                strokeWidth={1.25}
                size={"20px"}
                className="pl-[5px]"
              />
            </p>
            <h3 className="xl:text-[30px] lg:text-[20px] font-bold text-[#000] leading-normal">
              Next month
            </h3>
          </a>
        </div>
        {datePicker && (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="container mx-auto px-[80px] py-[40px] rounded-lg  relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                  <ul className="flex justify-center m-auto   text-[16px]  border-[1px] border-[#f27c2c] rounded-[50px] ">
                    <li
                      className={`   block text-center py-[14px] px-[79px] text-[#000000] rounded-[23px] ${
                        flexibleDate ? "bg-[#f27c2c] text-[#ffffff]" : ""
                      } `}
                      onClick={!flexibleDate && toggleFlexibleDate}
                    >
                      I am flexible
                    </li>
                    <li
                      className={` block text-center py-[14px] px-[79px] text-[#000000] rounded-[23px] ${
                        specificDateTab ? "bg-[#f27c2c] text-[#ffffff]" : ""
                      }`}
                      onClick={!specificDateTab && toggleSpecificDateTab}
                    >
                      Set specific day
                    </li>
                  </ul>

                  {/* month Body */}
                  {flexibleDate && (
                    <div className="container mx-auto mt-[34px] ">
                      <OwlCarousel
                        className="owl-theme date-picker-custom mt-[18px] "
                        loop={false}
                        margin={10}
                        nav
                        items={2}
                        dots={false}
                        slideBy={1}
                      >
                        <div className="item month-text">
                          <h3 className="border-b-2 pb-[5px] pl-[3px] mb-[22px]">
                            2023
                          </h3>
                          <div>
                            <ul className="flex  flex-wrap justify-center">
                              {months.map((month, index) => (
                                <li
                                  key={index}
                                  data-type="month "
                                  className="mr-[4px]  border-1-[#f27c2c] hover:border-[#f27c2c]  selected"
                                >
                                  <label>{month}</label>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="item month-text">
                          <h3 className="border-b-2 pb-[5px] pl-[3px] mb-[22px]">
                            2024
                          </h3>
                          <div>
                            <ul className="flex  flex-wrap justify-center">
                              {months.map((month, index) => (
                                <li
                                  key={index}
                                  data-type="month"
                                  className="mr-[4px]"
                                >
                                  <label className="">{month}</label>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="item month-text">
                          <h3 className="border-b-2 pb-[5px] pl-[3px] mb-[22px]">
                            2025
                          </h3>
                          <div>
                            <ul className="flex  flex-wrap justify-center">
                              {months.map((month, index) => (
                                <li
                                  key={index}
                                  data-type="month"
                                  className="mr-[4px]"
                                >
                                  <label>{month}</label>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="item month-text">
                          <h3 className="border-b-2 pb-[5px] pl-[3px] mb-[22px]">
                            2026
                          </h3>
                          <div>
                            <ul className="flex  flex-wrap justify-center">
                              {months.map((month, index) => (
                                <li
                                  key={index}
                                  data-type="month"
                                  className="mr-[4px]"
                                >
                                  <label>{month}</label>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </OwlCarousel>
                    </div>
                  )}
                  {/* month Body */}
                  {/* specific cal body */}
                  {specificDateTab && (
                    <div className="flex flex-col pt-[33px]">
                      <Calendar
                        className="calendar-class"
                        onChange={(item) => setDate(item)}
                        date={date}
                        months={2}
                        direction="horizontal"
                        color="#f27c2c"
                      />
                      <div className="item filter-text">
                        <h3 className="pt-[2px] pb-[22px] text-[14px] font-bold">
                          Flexibility for departure day:
                        </h3>
                        <div className="filter-text">
                          <ul className="flex  flex-wrap xl:w-[80%]">
                            {departure.map((departure, index) => (
                              <li
                                key={index}
                                className="mr-[8px] focus:border-[#f27c2c]"
                              >
                                <label>{departure}</label>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* specific cal body */}
                  {/* Filter */}
                  <div className="item filter-text pt-[31px] pb-[20px]">
                    <h3 className="  text-[14px] font-bold">
                      Cruise duration:
                    </h3>
                    <div className=" pt-[14px]">
                      <ul className="flex  flex-wrap xl:w-[80%]">
                        {filter.map((filter, index) => (
                          <li
                            key={index}
                            className="mr-[8px] focus:border-[#f27c2c]"
                          >
                            <label>{filter}</label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Filter */}

                  {/*footer*/}
                  <div className="flex items-center justify-end pt-[24px] border-t border-solid border-blueGray-200 rounded-b   ">
                    <a className=" text-[#f27c2c] text-[14px]  font-normal px-[27px] py-[18px] rounded-[23px] ">
                      Reset
                    </a>
                    <button
                      className=" text-[#707070] text-[14px]  font-normal px-[42px] py-[13px] rounded-[23px] border mr-[10px] "
                      type="button"
                      onClick={toggleDatePicker}
                    >
                      Cancle
                    </button>
                    <button
                      className=" text-[#ffffff] text-[14px]  font-normal btn-main   px-[42px] py-[13px] rounded-[23px] border  "
                      type="button"
                      onClick={toggleDatePicker}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        )}
      </div>
    </>
  );
};

export default TopDealsFilter;








