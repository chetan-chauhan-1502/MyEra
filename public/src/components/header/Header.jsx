import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, X, Phone } from "lucide-react";
import "./Header.css";
import LazyLoad from "react-lazyload";
import { tabImages } from "../../common/SearchContextIcons";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (/^\d{4,}$/.test(value) || /.+@.+\..+/.test(value)) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };

  const [seen, setSeen] = useState(false);

  function togglepop() {
    setSeen(!seen);
  }

  return (
    <>
      <header>
        <div className="absolute right-0 left-0 top-0">
          <div className="container mx-auto">
            <div className="flex-row">
              <div className="flex items-center justify-between xl:p-0 xl:pt-2 lg:px-[16px] lg:pt-2">
                <div className="flex">
                  <NavLink to="/">
                    <LazyLoad>
                      <img
                        src="https://todblobstore.blob.core.windows.net/img-new-cdn/logo/tod-logo.svg"
                        alt=""
                        className="opacity-100 h-auto lg:w-[130px]"
                        width={"150px"}
                      />
                    </LazyLoad>
                    <LazyLoad>
                      <img
                        src="https://todblobstore.blob.core.windows.net/img-new-cdn/logo/tod-logo.svg"
                        alt=""
                        className="opacity-0 h-0 lg:w-[130px]"
                      />
                    </LazyLoad>
                  </NavLink>

                  {/* Tabing */}
                  <div className="container mx-auto z-40  lg:w-[600px] flex justify-center px-[10px] pt-[10px] py-[7px] rounded absolute xl:top-[108px] lg:top-[90px] left-0  right-0 regular-shadow bg-[#fff]">
                    <ul className="flex gap-[70px] top_new_header ">
                      <li className="">
                        <NavLink
                          to="/"
                          className="relative flex items-center flex-col header_li_before "
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
                                  className="xl:size-[50px] lg:size-[40px] "
                                />
                              </LazyLoad>
                              <span className="xl:text-[11px] lg:text-[10px]  font-[300] ">
                                Top Deals
                              </span>
                            </>
                          )}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/flight-hotel"
                          className="relative flex items-center flex-col header_li_before "
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
                                  className="xl:size-[50px] lg:size-[40px]"
                                />
                              </LazyLoad>
                              <span className="xl:text-[11px] lg:text-[10px]  font-[300] ">
                                Flight + Hotel
                              </span>
                            </>
                          )}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/hotels"
                          className="relative flex items-center flex-col header_li_before "
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
                                  className="xl:size-[50px] lg:size-[40px]"
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
                          className="relative flex items-center flex-col header_li_before "
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
                                  className="xl:size-[50px] lg:size-[40px]"
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
                          className="relative flex items-center flex-col header_li_before "
                        >
                          <LazyLoad>
                            <img
                              src="https://todblobstore.blob.core.windows.net/img-new-cdn/icons/car.svg"
                              alt=""
                              className="xl:size-[50px] lg:size-[40px]"
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
                              className="xl:size-[50px] lg:size-[40px]"
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
                <div className="flex items-center ">
                  <ul className="flex items-center me-2">
                    <li className=" pr-2 pl-2 border-r-2 border-[#e7e7e7]/20">
                      <LazyLoad>
                        <img
                          src="https://todblobstore.blob.core.windows.net/img-new-cdn/logo/abta.svg"
                          alt="`"
                          width={"60px"}
                          className="lg:w-[50px]"
                        />
                      </LazyLoad>
                    </li>
                    <li className=" pr-2 pl-2 border-r-2 border-[#e7e7e7]/20">
                      <LazyLoad>
                        <img
                          src="https://todblobstore.blob.core.windows.net/img-new-cdn/logo/atol-logo-1.svg"
                          alt=""
                          width={"70px"}
                          className="lg:w-[60px]"
                        />
                      </LazyLoad>
                    </li>
                    <li className=" pr-2 pl-2 ">
                      <LazyLoad>
                        <img
                          src="https://todblobstore.blob.core.windows.net/img-new-cdn/logo/iata.svg"
                          alt=""
                          width={"40px"}
                          className="lg:w-[35px]"
                        />
                      </LazyLoad>
                    </li>
                  </ul>
                  <div className="flex">
                    {/* <img src="https://todblobstore.blob.core.windows.net/img-new-cdn/logo/tod-login.svg" alt="" className="sticky" /> */}
                    <p className="btn-main px-[10px] py-[5px] rounded-[4px] justify-center flex items-center">
                      <img
                        src="https://todblobstore.blob.core.windows.net/img-new-cdn/logo/tod-login.svg"
                        alt=""
                        width={"22px"}
                        height={"22px"}
                        className="mr-2"
                      />

                      <span
                        className="xl:text-[10px] lg:text-[8px]  t-font-white leading-[12px] cursor-pointer"
                        onClick={() => setShowModal(true)}
                      >
                        Login or <br />
                        Create Account
                      </span>

                      <ChevronDown color="white" size={15} className="ml-2" />
                    </p>

                    <p
                      className="bg-[#ffff]/25  xl:px-[10px] xl:py-[5px] lg:px-[8px] lg:py-[4px] rounded-[4px] justify-center flex items-center relative"
                      onClick={togglepop}
                    >
                      <img
                        src="https://todblobstore.blob.core.windows.net/img-new-cdn/logo/flag-for-flag-united-kingdom-svgrepo-com.svg"
                        alt=""
                        width={"22px"}
                        height={"22px"}
                        className="mr-2"
                      />

                      <span className="xl:text-[10px] lg:text-[8px] t-font-white leading-[12px] cursor-pointer">
                        UK
                      </span>
                      <ChevronDown color="white" size={15} className="ml-2" />

                      {/* Sidebar  */}
                    </p>

                    {/* popup for above UK  */}
                    {seen ? (
                      <div
                        className="w-[268px] h-[190px] bg-[#ffffff] rounded-lg shadow-md  absolute top-[47px] right-[460px] z-50"
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

                    <p className="items-center justify-center flex text-white font-bold ml-2 xl:text-[18px] lg:text-[12px]">
                      <Phone
                        size={22}
                        strokeWidth={0.5}
                        fill="#fff"
                        className="mr-2"
                      />{" "}
                      0204 505 9777{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Tabing Section */}
      <section>
        <div className=" top-[0px] z-[-1] bg-[#ffff]/25">
          <LazyLoad>
            <img
              src="https://todblobstore.blob.core.windows.net/img-new-cdn/banner-image.png"
              className="2xl:w-full xl:w-full 2xl:h-[480px] xl:h-[480px] lg:h-[380px] lg:object-cover "
              alt=""
            />
          </LazyLoad>
        </div>
      </section>

      {showModal ? (
        <div className="fixed inset-0 flex items-center justify-center bg-[#00000099] z-50">
          <div className="flex items-center xl:w-[50%]">
            <div className="xl:w-[386px] xl:h-[542px]">
              <OwlCarousel
                className="owl-theme login_slider"
                loop={false}
                margin={10}
                autoPlay={1000}
                nav
                items={1}
                dots={true}
                slideBy={1}
              >
                <div className="item rounded-md relative login-shadow">
                  <img
                    src="https://imgak.mmtcdn.com/pwa_v3/pwa_header_assets/loginPersuassionRoad.webp"
                    alt=""
                    className="object-cover rounded-l-lg"
                  />
                  <div className="absolute top-[174px] rounded-[2px] bottom-0 left-[55px] right-[55px] text-white border border-white px-[9px] py-[26px] h-fit">
                    <p className="text-[22px] font-bold text-left">
                      Sign up now to join the club of
                    </p>
                    <h3 className="text-[31px] font-bold leading-[33px] mt-[17px]">
                      10 crore+ Happy Travellers
                    </h3>
                  </div>
                </div>
                <div className="item rounded-md relative login-shadow">
                  <img
                    src="https://imgak.mmtcdn.com/pwa_v3/pwa_header_assets/loginPersuassionOcean.webp"
                    alt=""
                    className="object-cover rounded-l-lg"
                  />
                  <div className="absolute top-[174px] rounded-[2px] bottom-0 left-[55px] right-[55px] text-white border border-white px-[9px] py-[26px] h-fit">
                    <p className="text-[22px] font-bold text-left">
                      Sign up now to join the club of
                    </p>
                    <h3 className="text-[31px] font-bold leading-[33px] mt-[17px]">
                      10 crore+ Happy Travellers
                    </h3>
                  </div>
                </div>
                <div className="item rounded-md relative login-shadow">
                  <img
                    src="https://imgak.mmtcdn.com/pwa_v3/pwa_header_assets/loginPersuassionValley.webp"
                    alt=""
                    className="object-cover rounded-l-lg"
                  />
                  <div className="absolute top-[174px] rounded-[2px] bottom-0 left-[55px] right-[55px] text-white border border-white px-[9px] py-[26px] h-fit">
                    <p className="text-[22px] font-bold text-left">
                      Sign up now to join the club of
                    </p>
                    <h3 className="text-[31px] font-bold leading-[33px] mt-[17px]">
                      10 crore+ Happy Travellers
                    </h3>
                  </div>
                </div>
              </OwlCarousel>
            </div>
            <section className="xl:w-[511px] xl:h-[566px] bg-white rounded-[10px]">
              <div className="mx-[21px] my-[35px] flex flex-col h-full">
                <div className="flex justify-between">
                  <h2 className="text-[22px] font-bold cursor-pointer">
                    Login
                  </h2>
                  <button
                    onClick={() => setShowModal(false)}
                    className="bg-[#ecf7ff] rounded-[50px]"
                  >
                    <X color="#008cff" size={20} className="m-[7px]" />
                  </button>
                </div>
                <div className="mt-[69px]">
                  <label htmlFor="email" className="text-[#4a4a4a] text-[14px]">
                    Email or Mobile Number
                  </label>
                  <input
                    type="text"
                    className="xl:w-full outline-none mt-[9px] mb-[20px] border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 placeholder:text-[14px] placeholder:text-[#4a4a4a]"
                    placeholder="Enter email or mobile number"
                    name="email"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                  <button
                    className={`xl:w-full py-[14px] rounded-md mt-[20px] uppercase text-white text-[14px] font-bold ${
                      isButtonActive ? "btn-color" : "bg-[#dadada]"
                    }`}
                  >
                    Continue
                  </button>
                  <p className="mt-[24px] mb-[19px] text-[#4a4a4a] text-[12px] text-center cust-login-p cursor-pointer relative">
                    Or Login/Signup With
                  </p>
                  <div className="flex items-center justify-center gap-5">
                    <a href="#" className="cursor-pointer">
                      <img
                        src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/google%20icon.svg"
                        alt=""
                        width={"41px"}
                      />
                    </a>
                    <a href="#" className="cursor-pointer">
                      <img
                        src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/Apple.svg"
                        alt=""
                        width={"41px"}
                      />
                    </a>
                  </div>
                  <p className="text-[12px] text-justify mt-[20px] cursor-pointer">
                    By proceeding, you agree to Travelodeal{" "}
                    <a className="text-[#008cff]">
                      Privacy Policy, User Agreement
                    </a>{" "}
                    and <a className="text-[#008cff]"> T&Cs</a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;
