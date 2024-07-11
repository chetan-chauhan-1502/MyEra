import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { MoveRight, ChevronRight } from "lucide-react";
import "./Cruise.css";

const Cruiseblog = () => {
  return (
    <>
      <div className="container mx-auto my-[40px] bg-white px-[32px] py-[25px] rounded-lg regular-shadow">
        <div className="flex flex-col md:flex-row items-center w-auto justify-between">
          <p className="text-[32px] font-bold">From The Blog</p>
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
              className="owl-theme Cruise mt-[25px]"
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
                      src="https://todblobstore.blob.core.windows.net/img-new-cdn/Mask%20Group%20102%201.png"
                      alt=""
                    />
                  </div>
                  <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                    <div>
                      <a href="#">
                        <h5 className="mb-2 text-[16px] font-bold text-[#000] tracking-tight dark:text-white">
                          Green cruising how to make cruising more sustainable
                        </h5>
                      </a>
                      <a href="#">
                        <p className="text-[12px] font-[300] text-[#4a4a4a]">
                          Lorem Ipsum has been the industry's standard dummy
                          text scrambled it to make a type specimen book.
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-[10px] text-[#1192e8] flex items-center justify-end "
                      >
                        Read More <ChevronRight color="#1192e8" size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div href="#" className="h-[190px]">
                    <img
                      className="rounded-t-lg h-full w-full object-cover"
                      src="https://todblobstore.blob.core.windows.net/img-new-cdn/Mask%20Group%20105%201.png"
                      alt=""
                    />
                  </div>
                  <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                    <div>
                      <a href="#">
                        <h5 className="mb-2 text-[16px] font-bold text-[#000] tracking-tight dark:text-white">
                          Pierre & Vacances Fuerteventura
                        </h5>
                      </a>
                      <a href="#">
                        <p className="text-[12px] font-[300] text-[#4a4a4a]">
                          Lorem Ipsum has been the industry's standard dummy
                          text scrambled it to make a type specimen book.
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-[10px] text-[#1192e8] flex items-center justify-end "
                      >
                        Read More <ChevronRight color="#1192e8" size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div href="#" className="h-[190px]">
                    <img
                      className="rounded-t-lg h-full w-full object-cover"
                      src="https://todblobstore.blob.core.windows.net/img-new-cdn/Mask%20Group%205%201.png"
                      alt=""
                    />
                  </div>
                  <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                    <div>
                      <a href="#">
                        <h5 className="mb-2 text-[16px] font-bold text-[#000] tracking-tight dark:text-white">
                          Pierre & Vacances Fuerteventura
                        </h5>
                      </a>
                      <a href="#">
                        <p className="text-[12px] font-[300] text-[#4a4a4a]">
                          Lorem Ipsum has been the industry's standard dummy
                          text scrambled it to make a type specimen book.
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-[10px] text-[#1192e8] flex items-center justify-end "
                      >
                        Read More <ChevronRight color="#1192e8" size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div href="#" className="h-[190px]">
                    <img
                      className="rounded-t-lg h-full w-full object-cover"
                      src="https://todblobstore.blob.core.windows.net/img-new-cdn/barcelona.png"
                      alt=""
                    />
                  </div>
                  <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                    <div>
                      <a href="#">
                        <h5 className="mb-2 text-[16px] font-bold text-[#000] tracking-tight dark:text-white">
                          Pierre & Vacances Fuerteventura
                        </h5>
                      </a>
                      <a href="#">
                        <p className="text-[12px] font-[300] text-[#4a4a4a]">
                          Lorem Ipsum has been the industry's standard dummy
                          text scrambled it to make a type specimen book.
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-[10px] text-[#1192e8] flex items-center justify-end "
                      >
                        Read More <ChevronRight color="#1192e8" size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div href="#" className="h-[190px]">
                    <img
                      className="rounded-t-lg h-full w-full object-cover"
                      src="https://todblobstore.blob.core.windows.net/img-new-cdn/Mask%20Group%20102%201.png"
                      alt=""
                    />
                  </div>
                  <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                    <div>
                      <a href="#">
                        <h5 className="mb-2 text-[16px] font-bold text-[#000] tracking-tight dark:text-white">
                          Pierre & Vacances Fuerteventura
                        </h5>
                      </a>
                      <a href="#">
                        <p className="text-[12px] font-[300] text-[#4a4a4a]">
                          Lorem Ipsum has been the industry's standard dummy
                          text scrambled it to make a type specimen book.
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-[10px] text-[#1192e8] flex items-center justify-end "
                      >
                        Read More <ChevronRight color="#1192e8" size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div href="#" className="h-[190px]">
                    <img
                      className="rounded-t-lg h-full w-full object-cover"
                      src="https://todblobstore.blob.core.windows.net/img-new-cdn/Mask%20Group%20105%201.png"
                      alt=""
                    />
                  </div>
                  <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                    <div>
                      <a href="#">
                        <h5 className="mb-2 text-[16px] font-bold text-[#000] tracking-tight dark:text-white">
                          Pierre & Vacances Fuerteventura
                        </h5>
                      </a>
                      <a href="#">
                        <p className="text-[12px] font-[300] text-[#4a4a4a]">
                          Lorem Ipsum has been the industry's standard dummy
                          text scrambled it to make a type specimen book.
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-[10px] text-[#1192e8] flex items-center justify-end "
                      >
                        Read More <ChevronRight color="#1192e8" size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div href="#" className="h-[190px]">
                    <img
                      className="rounded-t-lg h-full w-full object-cover"
                      src="https://todblobstore.blob.core.windows.net/img-new-cdn/Mask%20Group%205%201.png"
                      alt=""
                    />
                  </div>
                  <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                    <div>
                      <a href="#">
                        <h5 className="mb-2 text-[16px] font-bold text-[#000] tracking-tight dark:text-white">
                          Pierre & Vacances Fuerteventura
                        </h5>
                      </a>
                      <a href="#">
                        <p className="text-[12px] font-[300] text-[#4a4a4a]">
                          Lorem Ipsum has been the industry's standard dummy
                          text scrambled it to make a type specimen book.
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-[10px] text-[#1192e8] flex items-center justify-end "
                      >
                        Read More <ChevronRight color="#1192e8" size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="w-full h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div href="#" className="h-[190px]">
                    <img
                      className="rounded-t-lg h-full w-full object-cover"
                      src="https://todblobstore.blob.core.windows.net/img-new-cdn/barcelona.png"
                      alt=""
                    />
                  </div>
                  <div className="h-full px-[17px] py-[14px] flex justify-between flex-col">
                    <div>
                      <a href="#">
                        <h5 className="mb-2 text-[16px] font-bold text-[#000] tracking-tight dark:text-white">
                          Pierre & Vacances Fuerteventura
                        </h5>
                      </a>
                      <a href="#">
                        <p className="text-[12px] font-[300] text-[#4a4a4a]">
                          Lorem Ipsum has been the industry's standard dummy
                          text scrambled it to make a type specimen book.
                        </p>
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-[10px] text-[#1192e8] flex items-center justify-end "
                      >
                        Read More <ChevronRight color="#1192e8" size={20} />
                      </a>
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

export default Cruiseblog;
