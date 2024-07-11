import React, { useRef } from "react";
import {
  ChevronDown,
  MapPin,
  Star,
  Calendar,
  PlaneTakeoff,
} from "lucide-react";
import "./HotelListCard.css";

// Owl Carousel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const HotelListCard = () => {
  const carouselRef = useRef(null);

  const images = [
    "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/Mask%20Group%2092.png",
    "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/Mask%20Group%2094.png",
    "https://images.travelodeal.com/hotelimage/gr/bali/filion-suites-resor-188347/upload-1200-24.webp?v=25052024",
    "https://images.travelodeal.com/hotelimage/gr/bali/filion-suites-resor-188347/upload-1200-17.webp?v=25052024",
    "https://images.travelodeal.com/hotelimage/gr/bali/filion-suites-resor-188347/upload-1200-24.webp?v=25052024",
  ];

  const thumbnails = [
    "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/Mask%20Group%2094.png",
    "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/Mask%20Group%2093.png",
    "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/Mask%20Group%2095.png",
    "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/Mask%20Group%2093.png",
    "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/Mask%20Group%2093.png",
    "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/Mask%20Group%2096.png",
  ];

  const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true,
  };

  const handleThumbnailClick = (index) => {
    if (carouselRef.current) {
      carouselRef.current.to(index, 300);
    }
  };

  return (
    <>
      <div className="p-[20px] flex rounded-[8px] bg-[#ffffff] border-[1px] border-[#e7e7e7]">
        {/* Left side */}
        <div className="leftHotelListCard w-[379px] h-[205px] relative">
          <p className="absolute top-[35px] left-[9px] bg-[#f3f9ff] text-[14px] text-[#4a4a4a] rounded-[15px] px-[19px] py-[6px] leading-[1.14] z-10 inline-block">
            Beach Hotel
          </p>

          <OwlCarousel
            ref={carouselRef}
            className="owl-theme"
            dots={false}
            items={1}
            slideBy={1}
            loop
            margin={10}
            nav
          >
            {images.map((image, index) => (
              <div className="item" key={index}>
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </OwlCarousel>

          <div className="h-[52px] mt-[5px] flex gap-[5px] relative">
            {thumbnails.map((thumbnail, index) => (
              <img
                key={index}
                src={thumbnail}
                alt={`Thumbnail ${index}`}
                className="w-[59px] h-[52px] object-cover rounded-[6px] cursor-pointer"
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
            <p className="w-[59px] h-[52px] rounded-[6px] text-[10px] text-[#ffffff] py-[20px] px-[5px] hotel_list_backdrop_backdrop_filter absolute top-0 right-0 leading-[1.92]">
              VIEW ALL
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="right w-[574px] ml-[19px]">
          <div className="flex flex-col">
            <p className="text-[#000000] text-[22px] font-bold flex items-center gap-[9px] leading-[1.31]">
              Furaveri Island Resort & Spa
              <span className="flex">
                <Star size={10} color="#212121" />
                <Star size={10} color="#212121" />
                <Star size={10} color="#212121" />
                <Star size={10} color="#212121" />
                <Star size={10} color="#212121" />
              </span>
            </p>
            <p className="text-[#4a4a4a] text-[14px] leading-[1.37]">
              North Male' Atoll, Maldives Republic...
            </p>
            <div className="flex items-center">
              <img
                src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/trust-review.svg"
                alt=""
                className="-ms-[7px]"
              />
              <p className="text-[#999999] text-[13px] leading-[1.31]">
                570 reviews
              </p>
            </div>
            <p className="text-[14px] font-light text-[#0084ff] mt-[15px] flex items-center leading-[1.14]">
              <MapPin size={15} color="#0084ff" />
              3-4 minutes walk from Candolim Beach
            </p>
            <div className="flex flex-col items-end text-end">
              <p className="w-[33px] h-[16px] py-[4px] text-[#000000] text-[14px] leading-[1.14] hotel_List_price_cancel">
                £293
              </p>

              <p className="text-[#000000] text-[24px] font-bold leading-[1.21]">
                £436
              </p>
              <p className="text-[8px] font-bold leading-[1.25] text-[#4a4a4a]">
                Per person
              </p>
            </div>

            <hr className="border-[1px] text-[#d6d6d6] mt-[18px]" />

            <div className="flex items-center my-[17px]">
              <p className="flex items-center gap-[10px] text-[14px] mr-[10px] leading-[1.14]">
                <Calendar size={14} color="#000000" /> 22 Jan 2025 - 7 nights
              </p>

              <p className="flex items-center gap-[10px] text-[14px] mr-[10px] leading-[1.14]">
                <img
                  src="https://todblobstore.blob.core.windows.net/img-new-cdn/svg/dine.svg"
                  alt=""
                  className="w-[12px] h-auto"
                />
                All inclusive
              </p>
              <p className="flex items-center gap-[10px] text-[14px] mr-[10px] leading-[1.14]">
                <PlaneTakeoff size={15} color="#000000" />
                Flights included
              </p>
              <ChevronDown size={15} color="#000000" />
            </div>

            <button className="h-[38px] hotel_list_search text-[14px] font-bold py-[11px] px-[233px] rounded-[8px] text-[#ffffff]">
              View deal
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelListCard;
