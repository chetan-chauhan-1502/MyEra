import React, { useEffect, useRef, useState } from "react";
import { Dropdown } from "flowbite";
import { ChevronDown, Navigation } from "lucide-react";
 
const DropdownComponent = ({
  type = "",
  dropdownItems,
  onItemClick,
  ulClassName,
  liClassName,
  divClassName,
  dropdownMenuClass,
  dropdownMenuStyle,
  dropdownHeading,
  children,
  defaultDropdownItem,
 
}) => {
  const dropdownRef = useRef(null); // Ref for dropdown instance
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(defaultDropdownItem);

 
  useEffect(() => {
    const options = {
      placement: "bottom",
      triggerType: "manual", // Set triggerType to 'manual' to control dropdown manually
      onHide: () => {
        console.log("Dropdown has been hidden");
      },
      onShow: () => {
        console.log("Dropdown has been shown");
      },
      onToggle: () => {
        console.log("Dropdown has been toggled");
      },
    };
 
    const instanceOptions = {
      id: "dropdownMenu",
      override: false,
    };
 
    if (dropdownRef.current) {
        console.log(dropdownRef.current);
      dropdownRef.current.dropdown = new Dropdown(
        dropdownRef.current,
        dropdownRef.current,
        options,
        instanceOptions
      );
    }
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };
 
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      if (dropdownRef.current && dropdownRef.current.dropdown) {
        dropdownRef.current.dropdown.destroy();
      }
    };
  }, []);
 
  const toggleDropdown = (event) => {
    event.preventDefault();
    setDropdownVisible(!dropdownVisible);
    if (dropdownRef.current && dropdownRef.current.dropdown) {
      if (dropdownVisible) {
        dropdownRef.current.dropdown.hide();
      } else {
        dropdownRef.current.dropdown.show();
      }
    }
  };
 
  const handleItemClick = (item) => {
    setDropdownVisible(false); // Close dropdown when an item is clicked
    onItemClick(item); // Pass clicked item to parent component
   
  };
 
  return (
    <div className={divClassName}  onClick={toggleDropdown}>
        
      <p className="text-[14px] font-light text-[#4a4a4a]  flex items-center leading-snug">
        {dropdownHeading}{" "}
        <ChevronDown
          color="#84129a"
          strokeWidth={1.25}
          size={"20px"}
          className="pl-[5px]"
        />
      </p>
      <p className="text-[30px] font-bold text-[#000]  truncate ...  leading-snug">
      {dropdownValue.title?dropdownValue.title:dropdownValue}
      </p>
     
     <p className="text-[14px] font-light text-[#4a4a4a]   truncate ... leading-snug">
     {dropdownValue.subTitle?dropdownValue.subTitle+", ":null}
      {dropdownValue.type?dropdownValue.type:null}
      {dropdownValue.code?dropdownValue.code:null}
            </p>
       
      {/* Dropdown Menu */}
      <div
        id="dropdownMenu"
        ref={dropdownRef}
        style={{
          display: dropdownVisible ? "block" : "none",
          bottom: dropdownMenuStyle,
        }}
        className={dropdownMenuClass}
      >
        {children ? children : null}
        <ul className={ulClassName}>
          {type === "cruises" &&
            dropdownItems &&
            dropdownItems.map((item, index) => {
              return (
                <li
                  key={item}
                  onClick={() => {
                    handleItemClick(item);
                    setDropdownValue(item);
                  }}
                  className={liClassName}
                >
                  {item}
                </li>
              );
            })}
          {type === "destination" &&
            dropdownItems &&
            dropdownItems.map((item, index) => {
              return (
                <li
                  key={item.title}
                  onClick={() => {
                    handleItemClick(item.title);
                    setDropdownValue(item);
                  }}
                  className="p-[10px] hover:bg-[#f2f2f2] cursor-pointer cust_flight_dropdown  flex justify-between items-center"
                  
               
               >
                  <div className="flex flex-col text-[#4a4a4a] text-[14px] city-p leading-[5px]">
                    {item.title && (
                      <>
                        <p className="city-p">{item.title}</p>
                        {item.subTitle && (
                          <span className="hover-change-span text-[#b2b2b2] text-[10px] pt-[10px]">
                            {item.subTitle}
                          </span>
                        )}
                        
                      </>
                    )}
                  </div>
                  {item.type && (
                    <p className={ `text-[#ee6c78] text-[10px]`}>{item.type}</p>
                  )}
                   {item.code && (
                    <p className={ `text-[#b2b2b2]  hover-change-p text-[10px]`}>{item.code}</p>
                  )}
                </li>
              );
            })}
          {type === "deals" &&
            dropdownItems &&(
                <>
           { dropdownItems.map((item) => 
              (
              
                  <li
                    key={item}
                    onClick={() => {
                        handleItemClick(item);
                        setDropdownValue(item);
                      }}
                    className=" flex flex-row p-[10px] hover:bg-gray-100   justify-between items-center hover:text-[#000000]"
                  >
                    <p className="text-[#4a4a4a] basis-3/4  xl:text-[14px] lg:text-[12px] font-normal bold">
                      {item}
                    </p>
                    <Navigation className="hidden icon text-[#84129a]  xl:h-[10.8px] xl:w-[10.3px]   " />
                    <p className="text-[#4a4a4a] text-[12px] font-normal hidden set-location">
                      Set my location
                    </p>
                  </li>
                  

              ))} 
              <li className="flex flex-row p-[10px] hover:bg-gray-100 items-center hover:text-[#000000] relative">
              <Navigation className="text-[#84129a] w-[20px] h-[11px] font-bold" />
              <p className="text-[#4a4a4a] xl:text-[12px] lg:text-[12px] font-normal pl-[2px]">
                Going Out Deals
              </p>
            </li>
          </>
            )}
           
           {type === "topDealDestination" && dropdownItems && (
            <>
            <li className=" flex p-[10px] hover:bg-[#f2f2f2] justify-between items-center hover:text-[#000000]">
                  <p className="text-[#4a4a4a]    text-[14px] font-normal ">
                    Near Me
                  </p>
                  <p className="flex items-center">
                  <Navigation className="text-[#84129a]  h-[12px] w-[12px] mr-[5px] " />
                  <p className="text-[#4a4a4a] text-[12px]  font-normal  ">
                    Set my location
                  </p>
                  </p>
                </li>
                <li className=" flex-row p-[10px] hover:bg-[#f2f2f2]  flex justify-between items-center hover:text-[#000000]">
                  <p className="text-[#4a4a4a] basis-3/4   xl:text-[14px] lg:text-[12px] font-normal">
                    Anywhere
                  </p>

                </li>
            {dropdownItems.map((item)=>(
                    <li
                    key={item.country}
                    onClick={() => {
                        handleItemClick(item);
                        setDropdownValue(item.country);
                      }}
                    className=" flex  p-[10px] hover:bg-gray-100   items-center hover:text-[#000000]"
                  >
                    <img
                    src={item.image}
                    className="w-[16px] h-[11px] mr-[9px]"
                    alt={item.country}
                  />
                    <p className="text-[#4a4a4a]  text-[14px]  font-normal bold">
                      {item.country}
                    </p>
                    
                  </li>
            ))}
            </>
           )

           }
        </ul>
      </div>
    </div>
  );
};
 
export default DropdownComponent;