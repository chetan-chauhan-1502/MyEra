import React, { useState } from "react";
import { tabImages } from "../../../common/SearchContextIcons";
import { NavLink } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { ChevronDown, X, Phone } from "lucide-react";

const SubHeader = () => {

  // for popup 


  const [seen, setSeen] = useState(false);

  function togglepop() {
    setSeen(!seen);
  }
  return (
    <>
      <div className="bg-white sticky top-0 z-50 drop-shadow-md">
        <div className="container mx-auto flex py-[11px] items-center justify-between ">
          <div className="flex items-center">
            <p>
              <img
                src="https://todus.blob.core.windows.net/www/cdn/desktop/images/tod-logo.svg"
                alt=""
                srcset=""
                className="w-[180px] h-[60px]"
              />
            </p>
            <div className="mx-[50px] w-[60%]">
              <ul className="flex gap-[20px] top_new_header ">
                <li className="">
                  <NavLink
                    to="/"
                    className="relative flex items-center flex-col  "
                  >
                    {({ isActive }) => (
                      <>
                        <LazyLoad>
                          <img
                            src={
                              isActive
                                ? tabImages.topDeals.active
                                : tabImages.topDeals.default
                            }
                            alt=""
                            className="xl:size-[35px]  "
                          />
                        </LazyLoad>
                        <span className="xl:text-[11px] lg:text-[10px] font-[300]  ">
                          Top Deals
                        </span>
                      </>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/flight-hotel"
                    className="relative flex items-center flex-col"
                  >
                    {({ isActive }) => (
                      <>
                        <LazyLoad>
                          <img
                            src={
                              isActive
                                ? tabImages.flightHotel.active
                                : tabImages.flightHotel.default
                            }
                            alt=""
                            className="xl:size-[35px] "
                          />
                        </LazyLoad>
                        <span className="xl:text-[11px] lg:text-[10px]  font-[300] text-active">
                          Flight + Hotel
                        </span>
                      </>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/hotels"
                    className="relative flex items-center flex-col  "
                  >
                    {({ isActive }) => (
                      <>
                        <LazyLoad>
                          <img
                            src={
                              isActive
                                ? tabImages.hotels.active
                                : tabImages.hotels.default
                            }
                            alt=""
                            className="xl:size-[35px] "
                          />
                        </LazyLoad>
                        <span className="xl:text-[11px] lg:text-[10px]  font-[300] ">
                          Hotels
                        </span>
                      </>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/cruise"
                    className="relative flex items-center flex-col  "
                  >
                    {({ isActive }) => (
                      <>
                        <LazyLoad>
                          <img
                            src={
                              isActive
                                ? tabImages.cruise.active
                                : tabImages.cruise.default
                            }
                            alt=""
                            className="xl:size-[35px] "
                          />
                        </LazyLoad>
                        <span className="xl:text-[11px] lg:text-[10px]  font-[300] ">
                          Cruise
                        </span>
                      </>
                    )}
                  </NavLink>
                </li>
                {/* <li>
                        <NavLink
                          to="/car-hire"
                          className="relative flex items-center flex-col  "
                        >
                          <LazyLoad>
                            <img
                              src="https://todblobstore.blob.core.windows.net/img-new-cdn/icons/car.svg"
                              alt=""
                              className="xl:size-[35px] "
                            />
                          </LazyLoad>
                          <span className="xl:text-[11px] lg:text-[10px]  font-[300] text-[#3a3a3a]">
                            Car Hire
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/transfer"
                          className="relative flex items-center flex-col header_li_before "
                        >
                          <LazyLoad>
                            <img
                              src="https://todblobstore.blob.core.windows.net/img-new-cdn/icons/bus.svg"
                              alt=""
                              className="xl:size-[35px] "
                            />
                          </LazyLoad>
                          <span className="xl:text-[11px] lg:text-[10px]  font-[300] text-[#3a3a3a]">
                            Transfer
                          </span>
                        </NavLink>
                      </li> */}
              </ul>
            </div>
          </div>
          <div>
            <div className="flex">
              {/* <img src="https://todblobstore.blob.core.windows.net/img-new-cdn/logo/tod-login.svg" alt="" className="sticky" /> */}
              <p className=" px-[10px] py-[5px] rounded-[4px] justify-center flex items-center">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/subheaderTOD.svg"
                  alt=""
                  width={"22px"}
                  height={"22px"}
                  className="mr-2"
                />

                <span
                  className="xl:text-[10px] lg:text-[8px]  text-black leading-[12px] cursor-pointer"
                  onClick={() => setShowModal(true)}
                >
                  Login or <br />
                  Create Account
                </span>

                <ChevronDown color="black" size={15} className="ml-2" />
              </p>

              <p
                className="bg-[#ffff]/25  xl:px-[10px] xl:py-[5px] lg:px-[8px] lg:py-[4px] rounded-[4px] justify-center flex items-center"
                onClick={togglepop}
              >
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/logo/flag-for-flag-united-kingdom-svgrepo-com.svg"
                  alt=""
                  width={"22px"}
                  height={"22px"}
                  className="mr-2"
                />

                <span className="xl:text-[10px] lg:text-[8px] font-black leading-[12px] cursor-pointer">
                  UK{" "}
                </span>
                <ChevronDown color="black" size={15} className="ml-2" />
              </p>

              {/* popup for above UK  */}
              {seen ? (
                <div
                  className="w-[268px] h-[190px] bg-[#ffffff] rounded-lg shadow-md  absolute top-[55px] right-[460px] z-20"
                  onClick={() => togglepop(false)}
                >
                  <div className="flex  flex-col   px-[21px] py-[16px] ">
                    <ul className="text-[14px] text-[#000000] font-bold">
                      <li className="w-full flex justify-start items-center py-[10px] border-b-[1px] border-[#dedede]  ">
                        <img
                          src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/united-kingdom-flag.svg"
                          alt=""
                          className="w-[15px] h-[10px]   mr-[8px] "
                        />
                        Uk
                        <img
                          src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/Done-with-green-bac.svg"
                          alt=""
                          className="w-[14px] h-[14px] rounded-[50%] ml-[21px]  "
                        />
                      </li>
                      <li className="flex justify-start items-center py-[10px] border-b-[1px] border-[#dedede]">
                        <img
                          src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/united-states-flg.svg"
                          alt=""
                          className="w-[15px] h-[10px]   mr-[8px] "
                        />
                        US
                      </li>
                      <li className="flex justify-start items-center py-[10px] border-b-[1px] border-[#dedede] ">
                        <img
                          src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/ca-flag.svg"
                          alt=""
                          className="w-[15px] h-[10px]   mr-[8px] "
                        />
                        CA
                      </li>
                      <li className="flex justify-start items-center py-[10px]  ">
                        <img
                          src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/IE-flag.svg"
                          alt=""
                          className="w-[15px] h-[10px]   mr-[8px] "
                        />
                        IE
                      </li>
                    </ul>
                  </div>
                </div>
              ) : null}

              <p className="items-center justify-center flex text-black font-bold ml-2 xl:text-[18px] lg:text-[12px]">
                <Phone
                  size={22}
                  strokeWidth={0.5}
                  fill="#000"
                  className="mr-2"
                />{" "}
                0204 505 9777{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      
      {/* popup for above UK  */}
      {seen ? (
        <div
          className="w-[268px] h-[190px] bg-[#ffffff] rounded-lg shadow-md  absolute top-[55px] right-[460px] z-20"
          onClick={() => togglepop(false)}
        >
          <div className="flex  flex-col   px-[21px] py-[16px] ">
            <ul className="text-[14px] text-[#000000] font-bold">
              <li className="w-full flex justify-start items-center py-[10px] border-b-[1px] border-[#dedede]  ">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/united-kingdom-flag.svg"
                  alt=""
                  className="w-[15px] h-[10px]   mr-[8px] "
                />
                Uk
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/Done-with-green-bac.svg"
                  alt=""
                  className="w-[14px] h-[14px] rounded-[50%] ml-[21px]  "
                />
              </li>
              <li className="flex justify-start items-center py-[10px] border-b-[1px] border-[#dedede]">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/united-states-flg.svg"
                  alt=""
                  className="w-[15px] h-[10px]   mr-[8px] "
                />
                US
              </li>
              <li className="flex justify-start items-center py-[10px] border-b-[1px] border-[#dedede] ">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/ca-flag.svg"
                  alt=""
                  className="w-[15px] h-[10px]   mr-[8px] "
                />
                CA
              </li>
              <li className="flex justify-start items-center py-[10px]  ">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/IE-flag.svg"
                  alt=""
                  className="w-[15px] h-[10px]   mr-[8px] "
                />
                IE
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SubHeader;
