import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { MoveRight } from "lucide-react";
import "./UnbetabelDeal.css";

const UnbetabelDeal = () => {
  return (
    <>
      <div className="container mx-auto bg-white px-[32px] py-[31px] rounded-lg regular-shadow">
        <div className="flex flex-col md:flex-row items-center w-auto justify-between">
          <p className="text-[32px] font-bold">Unbeatable Hotel Deals</p>
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
              className="owl-theme UnCard  mt-[30px]"
              loop={false}
              margin={10}
              nav
              items={4}
              dots={false}
              slideBy={1}
            >
              <div class="item">
                <div className=" w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div href="#" className="h-[148px]">
                    <img
                      className="rounded-t-lg h-full w-full object-cover"
                      src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/dummy1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                    <div>
                      <a href="#">
                        <h5 className="text-[16px] font-bold text-[#000] tracking-tight dark:text-white">
                          Pierre & Vacances Fuerteventura
                        </h5>
                      </a>
                      <p className="text-[14px] font-[300] text-[#4a4a4a]">
                        Destination | Country
                      </p>
                      <div class="flex items-center gap-5">
                        <div class="flex items-center mt-2 mb-3">
                          <img
                            src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/hotel-star-rating.svg"
                            alt="Image"
                            className="img-star"
                          />
                          <img
                            src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/hotel-star-rating.svg"
                            alt="Image"
                            className="img-star"
                          />
                          <img
                            src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/hotel-star-rating.svg"
                            alt="Image"
                            className="img-star"
                          />
                          <img
                            src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/hotel-star-rating.svg"
                            alt="Image"
                            className="img-star"
                          />
                          <img
                            src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/hotel-star-rating.svg"
                            alt="Image"
                            className="img-star"
                          />
                        </div>
                        <a
                          href="javascript:void(0);"
                          class="position-relative tripreviews"
                          data-bs-toggle="modal"
                          data-locationid="600105"
                        >
                          <div class="flex justify-start my-0">
                            <img
                              src="https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-66827-5.svg"
                              class="tscale-A"
                              alt="Image"
                              className="img-trips"
                            />
                            <div class="revirew">
                              <span>4427 reviews</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="flex justify-between items-end mt-[19px]">
                      <div>
                        {/* <p className="bg-[#4abb10] text-[#fff] rounded-[20px] text-[14px] inline-block px-[15px] py-[5px]">
                          Save up to 62%
                        </p> */}
                      </div>
                      <div className="flex flex-col items-end relative">
                        <p className="text-[#4a4a4a] text-[11px]  sf-display before:block before:absolute ub-cancel-price relative  ">
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
                <div className="w-full h-full flex flex-col  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div href="#" className="h-[148px]">
                    <img
                      className="rounded-t-lg h-full w-full object-cover"
                      src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/dummy.jpg"
                      alt=""
                    />
                  </div>
                  <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                    <div>
                      <a href="#">
                        <h5 className="text-[16px] font-bold text-[#000] tracking-tight dark:text-white">
                          Pierre & Vacances Fuerteventura
                        </h5>
                      </a>
                      <p className="text-[14px] font-[300] text-[#4a4a4a]">
                        Destination | Country
                      </p>
                      <div className="grid grid-cols-2 mt-[8px] ml-4">
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
                            Selected Meal
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex justify-between items-end mt-[19px]">
                      <div>
                        <p className="bg-[#4abb10] text-[#fff] rounded-[20px] text-[16px] inline-block px-[15px] py-[5px]">
                          Save up to 62%
                        </p>
                      </div>
                      <div className="flex flex-col items-end relative">
                        <p className="text-[#4a4a4a] text-[11px]  sf-display before:block before:absolute ub-cancel-price relative  ">
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
              <div class="item">
                <div className=" w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div href="#" className="h-[148px]">
                    <img
                      className="rounded-t-lg h-full w-full object-cover"
                      src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/dummy1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                    <div>
                      <a href="#">
                        <h5 className="text-[16px] font-bold text-[#000] tracking-tight dark:text-white">
                          Pierre & Vacances Fuerteventura
                        </h5>
                      </a>
                      <p className="text-[14px] font-[300] text-[#4a4a4a]">
                        Destination | Country
                      </p>
                      <div class="flex items-center gap-5">
                        <div class="flex items-center mt-2 mb-3">
                          <img
                            src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/hotel-star-rating.svg"
                            alt="Image"
                            className="img-star"
                          />
                          <img
                            src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/hotel-star-rating.svg"
                            alt="Image"
                            className="img-star"
                          />
                          <img
                            src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/hotel-star-rating.svg"
                            alt="Image"
                            className="img-star"
                          />
                          <img
                            src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/hotel-star-rating.svg"
                            alt="Image"
                            className="img-star"
                          />
                          <img
                            src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/hotel-star-rating.svg"
                            alt="Image"
                            className="img-star"
                          />
                        </div>
                        <a
                          href="javascript:void(0);"
                          class="position-relative tripreviews"
                          data-bs-toggle="modal"
                          data-locationid="600105"
                        >
                          <div class="flex justify-start my-0">
                            <img
                              src="https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-66827-5.svg"
                              class="tscale-A"
                              alt="Image"
                              className="img-trips"
                            />
                            <div class="revirew">
                              <span>4427 reviews</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="flex justify-between items-end mt-[19px]">
                      <div>
                        {/* <p className="bg-[#4abb10] text-[#fff] rounded-[20px] text-[14px] inline-block px-[15px] py-[5px]">
                          Save up to 62%
                        </p> */}
                      </div>
                      <div className="flex flex-col items-end relative">
                        <p className="text-[#4a4a4a] text-[11px]  sf-display before:block before:absolute ub-cancel-price relative  ">
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
                <div className="w-full h-full flex flex-col  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div href="#" className="h-[148px]">
                    <img
                      className="rounded-t-lg h-full w-full object-cover"
                      src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/dummy.jpg"
                      alt=""
                    />
                  </div>
                  <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                    <div>
                      <a href="#">
                        <h5 className="text-[16px] font-bold text-[#000] tracking-tight dark:text-white">
                          Pierre & Vacances Fuerteventura
                        </h5>
                      </a>
                      <p className="text-[14px] font-[300] text-[#4a4a4a]">
                        Destination | Country
                      </p>
                      <div className="grid grid-cols-2 mt-[8px] ml-4">
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
                            Selected Meal
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex justify-between items-end mt-[19px]">
                      <div>
                        <p className="bg-[#4abb10] text-[#fff] rounded-[20px] text-[16px] inline-block px-[15px] py-[5px]">
                          Save up to 62%
                        </p>
                      </div>
                      <div className="flex flex-col items-end relative">
                        <p className="text-[#4a4a4a] text-[11px]  sf-display before:block before:absolute ub-cancel-price relative  ">
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
              <div class="item">
                <div className=" w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div href="#" className="h-[148px]">
                    <img
                      className="rounded-t-lg h-full w-full object-cover"
                      src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/dummy1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                    <div>
                      <a href="#">
                        <h5 className="text-[16px] font-bold text-[#000] tracking-tight dark:text-white">
                          Pierre & Vacances Fuerteventura
                        </h5>
                      </a>
                      <p className="text-[14px] font-[300] text-[#4a4a4a]">
                        Destination | Country
                      </p>
                      <div class="flex items-center gap-5">
                        <div class="flex items-center mt-2 mb-3">
                          <img
                            src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/hotel-star-rating.svg"
                            alt="Image"
                            className="img-star"
                          />
                          <img
                            src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/hotel-star-rating.svg"
                            alt="Image"
                            className="img-star"
                          />
                          <img
                            src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/hotel-star-rating.svg"
                            alt="Image"
                            className="img-star"
                          />
                          <img
                            src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/hotel-star-rating.svg"
                            alt="Image"
                            className="img-star"
                          />
                          <img
                            src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/hotel-star-rating.svg"
                            alt="Image"
                            className="img-star"
                          />
                        </div>
                        <a
                          href="javascript:void(0);"
                          class="position-relative tripreviews"
                          data-bs-toggle="modal"
                          data-locationid="600105"
                        >
                          <div class="flex justify-start my-0">
                            <img
                              src="https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-66827-5.svg"
                              class="tscale-A"
                              alt="Image"
                              className="img-trips"
                            />
                            <div class="revirew">
                              <span>4427 reviews</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="flex justify-between items-end mt-[19px]">
                      <div>
                        {/* <p className="bg-[#4abb10] text-[#fff] rounded-[20px] text-[16px] inline-block px-[15px] py-[5px]">
                          Save up to 62%
                        </p> */}
                      </div>
                      <div className="flex flex-col items-end relative">
                        <p className="text-[#4a4a4a] text-[11px]  sf-display before:block before:absolute ub-cancel-price relative  ">
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
                <div className="w-full h-full flex flex-col  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div href="#" className="h-[148px]">
                    <img
                      className="rounded-t-lg h-full w-full object-cover"
                      src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/dummy.jpg"
                      alt=""
                    />
                  </div>
                  <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                    <div>
                      <a href="#">
                        <h5 className="text-[16px] font-bold text-[#000] tracking-tight dark:text-white">
                          Pierre & Vacances Fuerteventura
                        </h5>
                      </a>
                      <p className="text-[14px] font-[300] text-[#4a4a4a]">
                        Destination | Country
                      </p>
                      <div className="grid grid-cols-2 mt-[8px] ml-4">
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
                            Selected Meal
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex justify-between items-end mt-[19px]">
                      <div>
                        <p className="bg-[#4abb10] text-[#fff] rounded-[20px] text-[16px] inline-block px-[15px] py-[5px]">
                          Save up to 62%
                        </p>
                      </div>
                      <div className="flex flex-col items-end relative">
                        <p className="text-[#4a4a4a] text-[11px]  sf-display before:block before:absolute ub-cancel-price relative  ">
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
        </div>
      </div>
    </>
  );
};

export default UnbetabelDeal;
