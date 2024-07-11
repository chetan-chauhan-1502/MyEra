import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./offerSlider.css";

const offerSlider = () => {
  return (
    <>
      <div className="container mx-auto items-center grid grid-cols-2  mt-[20px] mb-[20px] h-[463px] px-[30px] rounded-md bg-cover bg-[url('https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/Offer-background.png')]">
        <div className="flex  items-center justify-center">
          <div className="bg-[#00000078]  h-[190px] w-[458px] rounded-md px-[43px] py-[33px] flex items-center justify-center ">
            <p className="text-white text-[58px] leading-[60px] font-bold">
              Festive Bliss in Europe
            </p>
          </div>
        </div>
        {/* Slider Container */}
        <div>
          <OwlCarousel
            className="owl-theme offer-slider mt-[35px]"
            loop={false}
            margin={20}
            nav
            items={3}
            dots={false}
            slideBy={1}
          >
            <div className="item">
              <div>
                <div class="h-full relative bg-white rounded-md">
                  <img
                    class="h-[208px] w-full object-cover rounded-t-md"
                    src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/Card-offer-full-1.png"
                    alt="Random image"
                  />
                  <div class="absolute inset-0 flex items-center justify-center top-[110px]">
                    <h2 class="text-white text-[14px] ">Budget</h2>
                  </div>
                  <p className="px-[12px] py-[21px] text-[14px] text-[#4a4a4a] ">
                    Starting at £1999
                  </p>
                </div>
              </div>
            </div>
            {/* Half img */}
            <div className="item">
              <div>
                <div class="h-full text-white relative bg-[#3f1c7a]  rounded-md">
                  <img
                    class="h-[80px]  object-cover rounded-t-md"
                    src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/Card-offer-half-1.png"
                    alt="Random image"
                  />
                  <div className="px-[20px] py-[20px]">
                    <p className="text-[20px] font-bold">Discover Paris</p>
                    <p className="text-[17px] font-thin mt-[8px] leading-[1.47]">
                      Unique Adventure of a Lifetime
                    </p>
                    <a
                      href="#"
                      className="py-2.5 px-5 font-medium mt-[22px] btn-color rounded-md  inline-block text-[12px]"
                    >
                      Explore Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* full img */}
            <div className="item">
              <div>
                <div class="h-full relative bg-white  rounded-md">
                  <img
                    class="h-[208px] w-full object-cover rounded-t-md"
                    src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/Card-offer-full-2.png"
                    alt="Random image"
                  />
                  <div class="absolute inset-0 flex items-center justify-center top-[110px]">
                    <h2 class="text-white text-[14px] ">Premium</h2>
                  </div>
                  <p className="px-[12px] py-[21px] text-[#4a4a4a] text-[14px] ">
                    Starting at £1999
                  </p>
                </div>
              </div>
            </div>
            {/* Half img */}
            <div className="item">
              <div>
                <div class="h-full text-white relative bg-[#3f1c7a]  rounded-md">
                  <img
                    class="h-[80px]  object-cover rounded-t-md"
                    src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/Card-offer-half-1.png"
                    alt="Random image"
                  />
                  <div className="px-[20px] py-[20px]">
                    <p className="text-[20px] font-bold">Discover Paris</p>
                    <p className="text-[17px] font-thin mt-[8px] leading-[1.47]">
                      Unique Adventure of a Lifetime
                    </p>
                    <a
                      href="#"
                      className="py-2.5 px-5 font-medium mt-[22px] btn-color rounded-md  inline-block text-[12px]"
                    >
                      Explore Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* full img */}
            <div className="item">
              <div>
                <div class="h-full relative bg-white  rounded-md">
                  <img
                    class="h-[208px] w-full object-cover rounded-t-md"
                    src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/Card-offer-full-2.png"
                    alt="Random image"
                  />
                  <div class="absolute inset-0 flex items-center justify-center top-[110px]">
                    <h2 class="text-white text-[14px] ">Premium</h2>
                  </div>
                  <p className="px-[12px] py-[21px] text-[#4a4a4a] text-[14px] ">
                    Starting at £1999
                  </p>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default offerSlider;
