import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Collection.css";

const CollectionSlider = () => {
  return (
    <>
      <div className="container mx-auto bg-white pl-[32px] py-[30px] rounded-lg regular-shadow mb-9">
        <div className="flex items-center  justify-between">
          <h1 className="text-[32px] font-bold leading">
            Tailored Travel Collections
          </h1>
          <a
            href="#"
            class="flex gap-5 text-[16px] font-bold text-[#f15a22] pr-[9%]"
          >
            View All{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-move-right"
            >
              <path d="M18 8L22 12L18 16"></path>
              <path d="M2 12H22"></path>
            </svg>
          </a>
        </div>
        <OwlCarousel
          className="owl-theme Collection-slider mt-[35px]"
          loop={false}
          margin={-20}
          nav
          items={5}
          dots={false}
        >
          <div class="item">
            <div className="w-[235px] h-[330px] relative ">
              <img
                src="https://todblobstore.blob.core.windows.net/img-new-cdn/london-1348042661.png"
                alt=""
                srcset=""
                className="h-full object-cover rounded-[8px]"
              />
              <div className="absolute bottom-[1px] left-[0px] off-shadow">
                <p className="text-[20px] font-bold text-white">England</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="w-[235px] h-[330px] relative ">
              <img
                src="https://todblobstore.blob.core.windows.net/img-new-cdn/Santorin05.png"
                alt=""
                srcset=""
                className="h-full object-cover rounded-[8px]"
              />
              <div className="absolute bottom-[1px] left-[0px] off-shadow">
                <p className="text-[20px] font-bold text-white">Greece</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="w-[235px] h-[330px] relative ">
              <img
                src="https://todblobstore.blob.core.windows.net/img-new-cdn/Iceland.png"
                alt=""
                srcset=""
                className="h-full object-cover rounded-[8px]"
              />
              <div className="absolute bottom-[1px] left-[0px] off-shadow">
                <p className="text-[20px] font-bold text-white">Iceland</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="w-[235px] h-[330px] relative ">
              <img
                src="https://todblobstore.blob.core.windows.net/img-new-cdn/Aswan,%20egypt.png"
                alt=""
                srcset=""
                className="h-full object-cover rounded-[8px]"
              />
              <div className="absolute bottom-[1px] left-[0px] off-shadow">
                <p className="text-[20px] font-bold text-white">Egypt</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="w-[235px] h-[330px] relative ">
              <img
                src="https://todblobstore.blob.core.windows.net/img-new-cdn/France.png"
                alt=""
                srcset=""
                className="h-full object-cover rounded-[8px]"
              />
              <div className="absolute bottom-[1px] left-[0px] off-shadow">
                <p className="text-[20px] font-bold text-white">France</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="w-[235px] h-[330px] relative ">
              <img
                src="https://todblobstore.blob.core.windows.net/img-new-cdn/paris4.png"
                alt=""
                srcset=""
                className="h-full object-cover rounded-[8px]"
              />
              <div className="absolute bottom-[1px] left-[0px] off-shadow">
                <p className="text-[20px] font-bold text-white">Paris</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="w-[235px] h-[330px] relative ">
              <img
                src="https://todblobstore.blob.core.windows.net/img-new-cdn/Santorin05.png"
                alt=""
                srcset=""
                className="h-full object-cover rounded-[8px]"
              />
              <div className="absolute bottom-[1px] left-[0px] off-shadow">
                <p className="text-[20px] font-bold text-white">England</p>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default CollectionSlider;
