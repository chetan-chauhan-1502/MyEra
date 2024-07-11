import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Card.css";

const SubCards = () => {
  return (
    <>
      <div className="slider-container sub-card">
        <OwlCarousel
          className="owl-theme Card "
          loop={false}
          margin={10}
          nav
          items={4}
          dots={false}
          slideBy={1}
          responsive={{
            0: {
              items: 1,
            },
            768: {
              items: 2,
            },
            1024: {
              items: 3,
            },
            1920: {
              items : 4,
            }
          }}
        >
          <div className="item">
            <div className=" w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div href="#" className="h-full">
                <img
                  className="rounded-t-lg h-[180px] w-full object-cover"
                  src="https://toduk.blob.core.windows.net/hotelimage/package/slider/aegean-view-aqua-resort-kos-aerial-view01052023.webp"
                  alt=""
                />
              </div>
              <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                <a href="#">
                  <h5 className="text-[16px] font-bold text-[#000] tracking-tight dark:text-white py-[10px] leading-[24px]">
                    7 Nights Deluxe All Inclusive Kos Getaway w/Flts
                  </h5>
                </a>
                <p className="text-[14px] font-[300] text-[#4a4a4a] pb-[10px] ">
                  Destination | Country
                </p>
                <div className="grid grid-cols-2  ml-4">
                  <ul className="list-disc">
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      Return Flights
                    </li>
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      4 Star Hotel
                    </li>
                  </ul>

                  <ul className="list-disc">
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      7 Nights
                    </li>
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      All Inclusive
                    </li>
                  </ul>
                </div>
                <div className="flex justify-between items-end mt-[19px]">
                  <div>
                    <p className="bg-[#4abb10] text-[#fff] rounded-[20px] text-[14px] inline-block px-[15px] py-[5px]">
                      Save up to 62%
                    </p>
                  </div>
                  <div className="flex flex-col items-end relative">
                    <p className="text-[#4a4a4a] text-[11px]  sf-display before:block before:absolute cancel-price-topdeal">
                      £293
                    </p>
                    <p className="flex flex-col text-[20px] font-bold text-[#000] items-end leading-[18px]">
                      £293
                      <span className="text-[11px] font-thin text-[#4a4a4a] sf-display">
                        per person
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className=" w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div href="#" className="h-full">
                <img
                  className="rounded-t-lg h-[180px] w-full object-cover"
                  src="https://toduk.blob.core.windows.net/hotelimage/package/slider/upload120027.webp"
                  alt=""
                />
              </div>
              <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                <a href="#">
                  <h5 className="text-[16px] font-bold text-[#000] tracking-tight dark:text-white py-[10px] leading-[24px]">
                    4 Nights Secret Italian Lake Getaway w/Flts & Meals
                  </h5>
                </a>
                <p className="text-[14px] font-[300] text-[#4a4a4a] pb-[10px]">
                  Levico Terme, Italy
                </p>
                <div className="grid grid-cols-2  ml-4">
                  <ul className="list-disc">
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      Levico Terme, Italy
                    </li>
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      4 Star Hotel
                    </li>
                  </ul>

                  <ul className="list-disc">
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      4 Nights
                    </li>
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      Full Board
                    </li>
                  </ul>
                </div>
                <div className="flex justify-between items-end mt-[19px]">
                  <div>
                    <p className="bg-[#4abb10] text-[#fff] rounded-[20px] text-[14px] inline-block px-[15px] py-[5px]">
                      Save 35%
                    </p>
                  </div>
                  <div className="flex flex-col items-end relative">
                    <p className="text-[#4a4a4a] text-[11px]  sf-display before:block before:absolute cancel-price-topdeal">
                      £293
                    </p>
                    <p className="flex flex-col text-[20px] font-bold text-[#000] items-end leading-[18px]">
                      £293
                      <span className="text-[11px] font-thin text-[#4a4a4a] sf-display">
                        per person
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className=" w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div href="#" className="h-full">
                <img
                  className="rounded-t-lg h-[180px] w-full object-cover"
                  src="https://toduk.blob.core.windows.net/hotelimage/package/slider/pool.view05062024webp.webp"
                  alt=""
                />
              </div>
              <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                <a href="#">
                  <h5 className="text-[16px] font-bold text-[#000] tracking-tight dark:text-white py-[10px] leading-[24px]">
                    7 Nights Luxury Gran Canaria Getaway w/Flts & Meals
                  </h5>
                </a>
                <p className="text-[14px] font-[300] text-[#4a4a4a] pb-[10px]">
                  Maspalomas, Gran Canaria
                </p>
                <div className="grid grid-cols-2  ml-4">
                  <ul className="list-disc">
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      Return Flights
                    </li>
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      5 Star Hotel
                    </li>
                  </ul>

                  <ul className="list-disc">
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      Half Board
                    </li>
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      7 Nights
                    </li>
                  </ul>
                </div>
                <div className="flex justify-between items-end mt-[19px]">
                  <div>
                    <p className="bg-[#4abb10] text-[#fff] rounded-[20px] text-[14px] inline-block px-[15px] py-[5px]">
                      Save 53%
                    </p>
                  </div>
                  <div className="flex flex-col items-end relative">
                    <p className="text-[#4a4a4a] text-[11px]  sf-display before:block before:absolute cancel-price-topdeal">
                      £1062
                    </p>
                    <p className="flex flex-col text-[20px] font-bold text-[#000] items-end leading-[18px]">
                      £499
                      <span className="text-[11px] font-thin text-[#4a4a4a] sf-display">
                        per person
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className=" w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div href="#" className="h-full">
                <img
                  className="rounded-t-lg h-[180px] w-full object-cover"
                  src="https://toduk.blob.core.windows.net/hotelimage/package/slider/kefalonia20052024.webp"
                  alt=""
                />
              </div>
              <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                <a href="#">
                  <h5 className="text-[16px] font-bold text-[#000] tracking-tight dark:text-white py-[10px] leading-[24px]">
                    7 Nights Deluxe All Inclusive Kefalonia Getaway w/Flts
                  </h5>
                </a>
                <p className="text-[14px] font-[300] text-[#4a4a4a] pb-[10px]">
                  Kefalonia, Greece
                </p>
                <div className="grid grid-cols-2  ml-4">
                  <ul className="list-disc">
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      Return Flights
                    </li>
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      4 Star Hotel
                    </li>
                  </ul>

                  <ul className="list-disc">
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      7 Nights
                    </li>
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      All Inclusive
                    </li>
                  </ul>
                </div>
                <div className="flex justify-between items-end mt-[19px]">
                  <div>
                    <p className="bg-[#4abb10] text-[#fff] rounded-[20px] text-[14px] inline-block px-[15px] py-[5px]">
                      Save 43%
                    </p>
                  </div>
                  <div className="flex flex-col items-end relative">
                    <p className="text-[#4a4a4a] text-[11px]  sf-display before:block before:absolute cancel-price-topdeal">
                      £875
                    </p>
                    <p className="flex flex-col text-[20px] font-bold text-[#000] items-end leading-[18px]">
                      £499
                      <span className="text-[11px] font-thin text-[#4a4a4a] sf-display">
                        per person
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className=" w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div href="#" className="h-full">
                <img
                  className="rounded-t-lg h-[180px] w-full object-cover"
                  src="https://toduk.blob.core.windows.net/hotelimage/package/slider/upload120027.webp"
                  alt=""
                />
              </div>
              <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                <a href="#">
                  <h5 className="text-[16px] font-bold text-[#000] tracking-tight dark:text-white py-[10px] leading-[24px]">
                    3 Nights In The Heart Of Venice w/Flts
                  </h5>
                </a>
                <p className="text-[14px] font-[300] text-[#4a4a4a] pb-[10px]">
                  Venice, Italy
                </p>
                <div className="grid grid-cols-2  ml-4">
                  <ul className="list-disc">
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      Return Flights
                    </li>
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      Room Only
                    </li>
                  </ul>

                  <ul className="list-disc">
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      Standard Room
                    </li>
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      3 Nights
                    </li>
                  </ul>
                </div>
                <div className="flex justify-between items-end mt-[19px]">
                  <div>
                    <p className="bg-[#4abb10] text-[#fff] rounded-[20px] text-[14px] inline-block px-[15px] py-[5px]">
                      Save up to 62%
                    </p>
                  </div>
                  <div className="flex flex-col items-end relative">
                    <p className="text-[#4a4a4a] text-[11px]  sf-display before:block before:absolute cancel-price-topdeal">
                      £293
                    </p>
                    <p className="flex flex-col text-[20px] font-bold text-[#000] items-end leading-[18px]">
                      £293
                      <span className="text-[11px] font-thin text-[#4a4a4a] sf-display">
                        per person
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className=" w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div href="#" className="h-full">
                <img
                  className="rounded-t-lg h-[180px] w-full object-cover"
                  src="https://toduk.blob.core.windows.net/hotelimage/package/slider/upload120027.webp"
                  alt=""
                />
              </div>
              <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                <a href="#">
                  <h5 className="text-[16px] font-bold text-[#000] tracking-tight dark:text-white py-[10px] leading-[24px]">
                    Pierre & Vacances Fuerteventura Origomare
                  </h5>
                </a>
                <p className="text-[14px] font-[300] text-[#4a4a4a] pb-[10px]">
                  Destination | Country
                </p>
                <div className="grid grid-cols-2  ml-4">
                  <ul className="list-disc">
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      5 start hotels
                    </li>
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      3 Activities
                    </li>
                  </ul>

                  <ul className="list-disc">
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      Airport Transfer
                    </li>
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      Selected Meal
                    </li>
                  </ul>
                </div>
                <div className="flex justify-between items-end mt-[19px]">
                  <div>
                    <p className="bg-[#4abb10] text-[#fff] rounded-[20px] text-[14px] inline-block px-[15px] py-[5px]">
                      Save up to 62%
                    </p>
                  </div>
                  <div className="flex flex-col items-end relative">
                    <p className="text-[#4a4a4a] text-[11px]  sf-display before:block before:absolute cancel-price-topdeal">
                      £293
                    </p>
                    <p className="flex flex-col text-[20px] font-bold text-[#000] items-end leading-[18px]">
                      £293
                      <span className="text-[11px] font-thin text-[#4a4a4a] sf-display">
                        per person
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className=" w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div href="#" className="h-full">
                <img
                  className="rounded-t-lg h-[180px] w-full object-cover"
                  src="https://toduk.blob.core.windows.net/hotelimage/package/slider/upload120027.webp"
                  alt=""
                />
              </div>
              <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                <a href="#">
                  <h5 className="text-[16px] font-bold text-[#000] tracking-tight dark:text-white py-[10px] leading-[24px]">
                    Pierre & Vacances Fuerteventura Origomare
                  </h5>
                </a>
                <p className="text-[14px] font-[300] text-[#4a4a4a] pb-[10px]">
                  Destination | Country
                </p>
                <div className="grid grid-cols-2  ml-4">
                  <ul className="list-disc">
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      5 start hotels
                    </li>
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      3 Activities
                    </li>
                  </ul>

                  <ul className="list-disc">
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      Airport Transfer
                    </li>
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      Selected Meal
                    </li>
                  </ul>
                </div>
                <div className="flex justify-between items-end mt-[19px]">
                  <div>
                    <p className="bg-[#4abb10] text-[#fff] rounded-[20px] text-[14px] inline-block px-[15px] py-[5px]">
                      Save up to 62%
                    </p>
                  </div>
                  <div className="flex flex-col items-end relative">
                    <p className="text-[#4a4a4a] text-[11px]  sf-display before:block before:absolute cancel-price-topdeal">
                      £293
                    </p>
                    <p className="flex flex-col text-[20px] font-bold text-[#000] items-end leading-[18px]">
                      £293
                      <span className="text-[11px] font-thin text-[#4a4a4a] sf-display">
                        per person
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className=" w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div href="#" className="h-full">
                <img
                  className="rounded-t-lg h-[180px] w-full object-cover"
                  src="https://toduk.blob.core.windows.net/hotelimage/package/slider/upload120027.webp"
                  alt=""
                />
              </div>
              <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                <a href="#">
                  <h5 className="text-[16px] font-bold text-[#000] tracking-tight dark:text-white py-[10px] leading-[24px]">
                    Pierre & Vacances Fuerteventura Origomare
                  </h5>
                </a>
                <p className="text-[14px] font-[300] text-[#4a4a4a] pb-[10px]">
                  Destination | Country
                </p>
                <div className="grid grid-cols-2  ml-4">
                  <ul className="list-disc">
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      5 start hotels
                    </li>
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      3 Activities
                    </li>
                  </ul>

                  <ul className="list-disc">
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      Airport Transfer
                    </li>
                    <li className="text-[12px] font-[300] text-[#4a4a4a]">
                      Selected Meal
                    </li>
                  </ul>
                </div>
                <div className="flex justify-between items-end mt-[19px]">
                  <div>
                    <p className="bg-[#4abb10] text-[#fff] rounded-[20px] text-[14px] inline-block px-[15px] py-[5px]">
                      Save up to 62%
                    </p>
                  </div>
                  <div className="flex flex-col items-end relative">
                    <p className="text-[#4a4a4a] text-[11px]  sf-display before:block before:absolute cancel-price-topdeal">
                      £293
                    </p>
                    <p className="flex flex-col text-[20px] font-bold text-[#000] items-end leading-[18px]">
                      £293
                      <span className="text-[11px] font-thin text-[#4a4a4a] sf-display">
                        per person
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default SubCards;
