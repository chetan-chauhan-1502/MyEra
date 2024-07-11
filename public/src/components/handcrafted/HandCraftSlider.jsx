import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { MoveRight } from "lucide-react";
import "./Handcraft.css";

const HandCraftSlider = () => {
  return (
    <>
      <div className="container mx-auto bg-white px-[32px] py-[20px] rounded-lg regular-shadow">
        <div className="flex flex-col md:flex-row items-center w-auto justify-between">
          <p className="text-[32px] font-bold">Top Handcrafted Holidays</p>
          <div className="pr-[7%]">
            <a
              href="#"
              className="flex gap-5 text-[16px] font-bold text-[#f15a22]"
            >
              View All <MoveRight />
            </a>
          </div>
        </div>
        <div>
          <div className="slider-container sub-card">
            <OwlCarousel
              className="owl-theme hand-craft  mt-[26px]"
              loop={false}
              margin={10}
              nav
              items={4}
              dots={false}
              slideBy={1}
            >
              <div class="item">
                <div className="w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div href="#" className="h-[190px]">
                    <img
                      className="rounded-t-lg h-full w-full object-cover"
                      src="https://todblobstore.blob.core.windows.net/img-new-cdn/Mask%20Group%205.png"
                      alt=""
                    />
                  </div>
                  <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                    <div>
                      <a href="#">
                        <p className="text-[14px] font-[300] text-[#4A4A4A]">
                          Marella Cruises
                        </p>
                      </a>
                      <a href="#">
                        <h5 className="text-[16px] font-bold text-[#000] tracking-tight dark:text-white">
                          EXCLUSIVE PRICE DROP! Magic of Spain from Majorca
                        </h5>
                      </a>
                    </div>
                    <div className="mt-[17px] flex justify-between items-end">
                      <div>
                        <p className="text-[14px] text-[#4a4a4a]  inline-block  py-[5px]">
                          Jul 2024 | 7 Nights
                        </p>
                      </div>
                      <div className="flex flex-col items-end relative">
                        <p className="text-[14px] font-[300] text-[#4a4a4a]">
                          Inside cabin from
                        </p>
                        <p className="text-[#4a4a4a] text-[11px]  sf-display before:block before:absolute handcraft-price">
                          £293
                        </p>
                        <p className="flex flex-col text-[20px] font-bold text-[#000] items-end leading-[18px]">
                          £293
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div href="#" className="h-[190px] relative">
                    <img
                      className="rounded-t-lg h-full w-full object-cover"
                      src="https://todblobstore.blob.core.windows.net/img-new-cdn/Mask%20Group%20103.png"
                      alt=""
                    />
                    <span className="top-deal-tag">Top Deal</span>
                  </div>
                  <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                    <div>
                      <a href="#">
                        <p className="text-[14px] font-[300] text-[#4A4A4A]">
                          Marella Cruises
                        </p>
                      </a>
                      <a href="#">
                        <h5 className="mb-2 text-[16px] font-bold text-[#000] tracking-tight dark:text-white">
                          Pierre & Vacances Fuerteventura
                        </h5>
                      </a>
                    </div>
                    <div className="mt-[17px] flex justify-between items-end">
                      <div>
                        <p className="text-[13px] text-[#4a4a4a]  inline-block  py-[5px]">
                          Jul 2024 | 7 Nights
                        </p>
                      </div>
                      <div className="flex flex-col items-end relative">
                        <p className="text-[14px] font-[300] text-[#4a4a4a]">
                          Inside cabin from
                        </p>
                        <p className="text-[#4a4a4a] text-[11px]  sf-display before:block before:absolute handcraft-price">
                          £293
                        </p>
                        <p className="flex flex-col text-[20px] font-bold text-[#000] items-end leading-[18px]">
                          £293
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div href="#" className="h-[190px]">
                    <img
                      className="rounded-t-lg h-full w-full object-cover"
                      src="https://todblobstore.blob.core.windows.net/img-new-cdn/Mask%20Group%20105.png"
                      alt=""
                    />
                  </div>
                  <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                    <div>
                      <a href="#">
                        <p className="text-[14px] font-[300] text-[#4A4A4A]">
                          Marella Cruises
                        </p>
                      </a>
                      <a href="#">
                        <h5 className="mb-2 text-[16px] font-bold text-[#000] tracking-tight dark:text-white">
                          Pierre & Vacances Fuerteventura
                        </h5>
                      </a>
                    </div>
                    <div className="mt-[17px] flex justify-between items-end">
                      <div>
                        <p className="text-[13px] text-[#4a4a4a]  inline-block  py-[5px]">
                          Jul 2024 | 7 Nights
                        </p>
                      </div>
                      <div className="flex flex-col items-end relative">
                        <p className="text-[14px] font-[300] text-[#4a4a4a]">
                          Inside cabin from
                        </p>
                        <p className="text-[#4a4a4a] text-[11px]  sf-display before:block before:absolute handcraft-price">
                          £293
                        </p>
                        <p className="flex flex-col text-[20px] font-bold text-[#000] items-end leading-[18px]">
                          £293
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div href="#" className="h-[190px]">
                    <img
                      className="rounded-t-lg h-full w-full object-cover"
                      src="https://todblobstore.blob.core.windows.net/img-new-cdn/Mask%20Group%20102.png"
                      alt=""
                    />
                  </div>
                  <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                    <div>
                      <a href="#">
                        <p className="text-[14px] font-[300] text-[#4A4A4A]">
                          Marella Cruises
                        </p>
                      </a>
                      <a href="#">
                        <h5 className="mb-2 text-[16px] font-bold text-[#000] tracking-tight dark:text-white">
                          Pierre & Vacances Fuerteventura
                        </h5>
                      </a>
                    </div>
                    <div className="mt-[17px] flex justify-between items-end">
                      <div>
                        <p className="text-[13px] text-[#4a4a4a]  inline-block  py-[5px]">
                          Jul 2024 | 7 Nights
                        </p>
                      </div>
                      <div className="flex flex-col items-end relative">
                        <p className="text-[14px] font-[300] text-[#4a4a4a]">
                          Inside cabin from
                        </p>
                        <p className="text-[#4a4a4a] text-[11px]  sf-display before:block before:absolute handcraft-price">
                          £293
                        </p>
                        <p className="flex flex-col text-[20px] font-bold text-[#000] items-end leading-[18px]">
                          £293
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div href="#" className="h-[190px]">
                    <img
                      className="rounded-t-lg h-full w-full object-cover"
                      src="https://todblobstore.blob.core.windows.net/img-new-cdn/Mask%20Group%205.png"
                      alt=""
                    />
                  </div>
                  <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                    <div>
                      <a href="#">
                        <p className="text-[14px] font-[300] text-[#4A4A4A]">
                          Marella Cruises
                        </p>
                      </a>
                      <a href="#">
                        <h5 className="mb-2 text-[16px] font-bold text-[#000] tracking-tight dark:text-white">
                          Pierre & Vacances Fuerteventura
                        </h5>
                      </a>
                    </div>
                    <div className="mt-[17px] flex justify-between items-end">
                      <div>
                        <p className="text-[13px] text-[#4a4a4a]  inline-block  py-[5px]">
                          Jul 2024 | 7 Nights
                        </p>
                      </div>
                      <div className="flex flex-col items-end relative">
                        <p className="text-[14px] font-[300] text-[#4a4a4a]">
                          Inside cabin from
                        </p>
                        <p className="text-[#4a4a4a] text-[11px]  sf-display before:block before:absolute handcraft-price">
                          £293
                        </p>
                        <p className="flex flex-col text-[20px] font-bold text-[#000] items-end leading-[18px]">
                          £293
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div href="#" className="h-[190px] relative">
                    <img
                      className="rounded-t-lg h-full w-full object-cover"
                      src="https://todblobstore.blob.core.windows.net/img-new-cdn/Mask%20Group%20103.png"
                      alt=""
                    />
                    <span className="top-deal-tag">Top Deal</span>
                  </div>
                  <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                    <div>
                      <a href="#">
                        <p className="text-[14px] font-[300] text-[#4A4A4A]">
                          Marella Cruises
                        </p>
                      </a>
                      <a href="#">
                        <h5 className="mb-2 text-[16px] font-bold text-[#000] tracking-tight dark:text-white">
                          Pierre & Vacances Fuerteventura
                        </h5>
                      </a>
                    </div>
                    <div className="mt-[17px] flex justify-between items-end">
                      <div>
                        <p className="text-[13px] text-[#4a4a4a]  inline-block  py-[5px]">
                          Jul 2024 | 7 Nights
                        </p>
                      </div>
                      <div className="flex flex-col items-end relative">
                        <p className="text-[14px] font-[300] text-[#4a4a4a]">
                          Inside cabin from
                        </p>
                        <p className="text-[#4a4a4a] text-[11px]  sf-display before:block before:absolute handcraft-price">
                          £293
                        </p>
                        <p className="flex flex-col text-[20px] font-bold text-[#000] items-end leading-[18px]">
                          £293
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div href="#" className="h-[190px]">
                    <img
                      className="rounded-t-lg h-full w-full object-cover"
                      src="https://todblobstore.blob.core.windows.net/img-new-cdn/Mask%20Group%20105.png"
                      alt=""
                    />
                  </div>
                  <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                    <div>
                      <a href="#">
                        <p className="text-[14px] font-[300] text-[#4A4A4A]">
                          Marella Cruises
                        </p>
                      </a>
                      <a href="#">
                        <h5 className="mb-2 text-[16px] font-bold text-[#000] tracking-tight dark:text-white">
                          Pierre & Vacances Fuerteventura
                        </h5>
                      </a>
                    </div>
                    <div className="mt-[17px] flex justify-between items-end">
                      <div>
                        <p className="text-[13px] text-[#4a4a4a]  inline-block  py-[5px]">
                          Jul 2024 | 7 Nights
                        </p>
                      </div>
                      <div className="flex flex-col items-end relative">
                        <p className="text-[14px] font-[300] text-[#4a4a4a]">
                          Inside cabin from
                        </p>
                        <p className="text-[#4a4a4a] text-[11px]  sf-display before:block before:absolute handcraft-price">
                          £293
                        </p>
                        <p className="flex flex-col text-[20px] font-bold text-[#000] items-end leading-[18px]">
                          £293
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div href="#" className="h-[190px]">
                    <img
                      className="rounded-t-lg h-full w-full object-cover"
                      src="https://todblobstore.blob.core.windows.net/img-new-cdn/Mask%20Group%20102.png"
                      alt=""
                    />
                  </div>
                  <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                    <div>
                      <a href="#">
                        <p className="text-[14px] font-[300] text-[#4A4A4A]">
                          Marella Cruises
                        </p>
                      </a>
                      <a href="#">
                        <h5 className="mb-2 text-[16px] font-bold text-[#000] tracking-tight dark:text-white">
                          Pierre & Vacances Fuerteventura
                        </h5>
                      </a>
                    </div>
                    <div className="mt-[17px] flex justify-between items-end">
                      <div>
                        <p className="text-[13px] text-[#4a4a4a]  inline-block  py-[5px]">
                          Jul 2024 | 7 Nights
                        </p>
                      </div>
                      <div className="flex flex-col items-end relative">
                        <p className="text-[14px] font-[300] text-[#4a4a4a]">
                          Inside cabin from
                        </p>
                        <p className="text-[#4a4a4a] text-[11px]  sf-display before:block before:absolute handcraft-price">
                          £293
                        </p>
                        <p className="flex flex-col text-[20px] font-bold text-[#000] items-end leading-[18px]">
                          £293
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default HandCraftSlider;
