import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Destination.css";

const SubDestination = () => {
  return (
    <>
      <div className="slider-container sub-destination-card ">
        <div className="slider-container sub-card">
          <OwlCarousel
            className="owl-theme destination-slider"
            loop={false}
            margin={10}
            nav
            items={3}
            dots={false}
            slideBy={1}
          >
            <div class="item">
              <div className=" w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div href="#" className="h-full">
                  <img
                    className="rounded-t-lg h-[200px] w-full object-cover"
                    src="https://toduk.blob.core.windows.net/hotelimage/package/slider/aegean-view-aqua-resort-kos-aerial-view01052023.webp"
                    alt=""
                  />
                </div>
                <div className="h-full px-[17px] py-[14px] flex  flex-col">
                  <a href="#">
                    <h5 className="text-[24px] font-bold text-[#000] tracking-tight dark:text-white">
                      Greece
                    </h5>
                  </a>
                  <p className="text-[14px] font-[100] text-[#4a4a4a]">
                    Greece has the longest coastline in Europe, with forests,
                    mountains, or lakes you could also witness several islands
                    dotting various seas, including..
                  </p>
                </div>
              </div>
            </div>
            <div class="item">
              <div className=" w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div href="#" className="h-full">
                  <img
                    className="rounded-t-lg h-[200px] w-full object-cover"
                    src="https://toduk.blob.core.windows.net/hotelimage/package/country/spain-1.webp"
                    alt=""
                  />
                </div>
                <div className="h-full px-[17px] py-[14px] flex  flex-col">
                  <a href="#">
                    <h5 className="text-[24px] font-bold text-[#000] tracking-tight dark:text-white">
                      Spain
                    </h5>
                  </a>
                  <p className="text-[14px] font-[100] text-[#4a4a4a]">
                    Indeed, you’ll find a combination of historic beauty and
                    current thinking in Spain. Known for its climate that
                    everyone could enjoy round-year sunsh..
                  </p>
                </div>
              </div>
            </div>
            <div class="item">
              <div className=" w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div href="#" className="h-full">
                  <img
                    className="rounded-t-lg h-[200px] w-full object-cover"
                    src="https://toduk.blob.core.windows.net/hotelimage/package/country/italy-1.webp"
                    alt=""
                  />
                </div>
                <div className="h-full px-[17px] py-[14px] flex  flex-col">
                  <a href="#">
                    <h5 className="text-[24px] font-bold text-[#000] tracking-tight dark:text-white">
                      Italy
                    </h5>
                  </a>
                  <p className="text-[14px] font-[100] text-[#4a4a4a]">
                    Italy is world-famous for tourist attractions like Rome,
                    Venice, and the Colosseum, but it has more to offer, like
                    the quiet, scenic roads that span..
                  </p>
                </div>
              </div>
            </div>
            <div class="item">
              <div className=" w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div href="#" className="h-full">
                  <img
                    className="rounded-t-lg h-[200px] w-full object-cover"
                    src="https://toduk.blob.core.windows.net/hotelimage/package/country/france-1.webp"
                    alt=""
                  />
                </div>
                <div className="h-full px-[17px] py-[14px] flex  flex-col">
                  <a href="#">
                    <h5 className="text-[24px] font-bold text-[#000] tracking-tight dark:text-white">
                      France
                    </h5>
                  </a>
                  <p className="text-[14px] font-[100] text-[#4a4a4a]">
                    France, in Western Europe, encompasses medieval cities,
                    alpine villages and Mediterranean beaches. Paris, its
                    capital, is famed for its fashion hous..
                  </p>
                </div>
              </div>
            </div>
            <div class="item">
              <div className=" w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div href="#" className="h-full">
                  <img
                    className="rounded-t-lg h-[200px] w-full object-cover"
                    src="https://toduk.blob.core.windows.net/hotelimage/package/country/portugal-1.webp"
                    alt=""
                  />
                </div>
                <div className="h-full px-[17px] py-[14px] flex  flex-col">
                  <a href="#">
                    <h5 className="text-[24px] font-bold text-[#000] tracking-tight dark:text-white">
                      Portugal
                    </h5>
                  </a>
                  <p className="text-[14px] font-[100] text-[#4a4a4a]">
                    Known for its enthusiastic welcome to visitors, Portugal has
                    a heartbreakingly nostalgic and down-to-Earth rich culture.
                    Want to see what makes Port..
                  </p>
                </div>
              </div>
            </div>
            <div class="item">
              <div className=" w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div href="#" className="h-full">
                  <img
                    className="rounded-t-lg h-[200px] w-full object-cover"
                    src="https://toduk.blob.core.windows.net/hotelimage/package/country/egypt-1.webp"
                    alt=""
                  />
                </div>
                <div className="h-full px-[17px] py-[14px] flex  flex-col">
                  <a href="#">
                    <h5 className="text-[24px] font-bold text-[#000] tracking-tight dark:text-white">
                      Egypt
                    </h5>
                  </a>
                  <p className="text-[14px] font-[100] text-[#4a4a4a]">
                    Famous for the Pyramids, Sahara Desert, and Nile River.
                    Egypt is known for its ruins, historical places, and sites
                    of world wonders. It is also famo..
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

export default SubDestination;
