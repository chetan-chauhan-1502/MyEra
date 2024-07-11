import {
  Building2,
  CalendarClock,
  CalendarFold,
  Plane,
  UsersRound,
  ShipWheel,
  Ship,
} from "lucide-react";
import React, { useState } from "react";
import MoreCruiseIdeas from "../../components/cruiseideas/MoreCruiseIdeas";

const CruiseInfo = () => {
  // for cruiseDeals data
  const cruiseDeals = [
    {
      id: 1,
      date: "22 April 2023",
      destination: "Norwegian Fjords from Southampton",
      price: "£514",
      imageUrl:
        "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/shipMap.png",
    },
    {
      id: 2,
      date: "15 May 2023",
      destination: "Mediterranean Cruise from Barcelona",
      price: "£699",
      imageUrl:
        "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/shipMap.png",
    },
    {
      id: 3,
      date: "10 June 2023",
      destination: "Caribbean Cruise from Miami",
      price: "£849",
      imageUrl:
        "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/shipMap.png",
    },
    {
      id: 4,
      date: "22 July 2023",
      destination: "Alaskan Cruise from Vancouver",
      price: "£999",
      imageUrl:
        "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/shipMap.png",
    },
    {
      id: 5,
      date: "22 July 2023",
      destination: "Alaskan Cruise from Vancouver",
      price: "£999",
      imageUrl:
        "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/shipMap.png",
    },
    {
      id: 6,
      date: "22 July 2023",
      destination: "Alaskan Cruise from Vancouver",
      price: "£999",
      imageUrl:
        "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/shipMap.png",
    },
  ];

  // for cruiseShips data
  const cruiseShips = [
    {
      id: 1,
      name: "Norwegian Viva",
      description: "Super, resort",
      imgSrc:
        "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/CruiseInfoShip.png",
      linkText: "See Norwegian Viva",
    },
    {
      id: 2,
      name: "Norwegian Joy",
      description: "mega,premium_resort",
      imgSrc:
        "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/CruiseInfoShip.png",
      linkText: "See Norwegian Joy",
    },
    {
      id: 3,
      name: "Norwegian Sun",
      description: "mega,premium_resort",
      imgSrc:
        "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/CruiseInfoShip.png",
      linkText: "See Norwegian Sun",
    },
    {
      id: 4,
      name: "Norwegian Viva",
      description: "Super, resort",
      imgSrc:
        "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/CruiseInfoShip.png",
      linkText: "See Norwegian Viva",
    },
    {
      id: 5,
      name: "Norwegian Joy",
      description: "mega,premium_resort",
      imgSrc:
        "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/CruiseInfoShip.png",
      linkText: "See Norwegian Joy",
    },
    {
      id: 6,
      id: 3,
      name: "Norwegian Sun",
      description: "mega,premium_resort",
      imgSrc:
        "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/CruiseInfoShip.png",
      linkText: "See Norwegian Sun",
    },
  ];

  const [activeTab, setActiveTab] = useState("Entertainment");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="w-full h-[520px] ">
        <img
          src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/cruise_info_bg.png"
          alt=""
          className="w-full h-full object-cover  "
        />
      </div>

      {/* relative div  */}
      <div className="container mx-auto relative bottom-[190px] ">
        <label className="flex justify-end items-center relative top-8 ">
          <img
            src="https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/norwegian.png"
            alt=""
            className="w-[399px] h-[148px] object-contain  bg-[#ffffff] bg-opacity-[0.72] px-[27px] rounded-t-lg "
          />
        </label>

        <div className="flex h-[413px] gap-[30px] p-[30px] rounded-[16px] bg-[#ffffff]  ">
          <div className="basis-1/2   ">
            <h2 className="text-[22px] text-[#000000] font-bold leading-[1.18]  ">
              Norwegian Cruise Line
            </h2>
            <p className="text-[14px] text-[#4a4a4a] mt-[23px] leading-[1.86] text-left  ">
              With 21st-century life becoming faster, louder and more connected
              than ever before, Norwegian Cruise Line offer the perfect escape
              to the best destinations around the world, complete with some of
              the most unique onboard entertainment at sea. From go karts,
              bumper cars, laser tag and high-rope courses during the day to
              Broadway-style shows and parties in the evening, no matter whether
              you're travelling alone, as a couple or family, time spent onboard
              with NCL is nothing short of amazing. Complete with more dining
              choices than you can imagine, incredible pool decks and even
              luxurious spas, you'll never want your NCL cruise to end.
            </p>
            <label className="flex gap-[10px] mt-[15px] ">
              <p className="w-[112px] h-[40px] text-[14px] font-bold border-[1px] border-[#4a4a4a] rounded-[5px] flex justify-center items-center bg-[#ffffff] text-[#4a4a4a] ">
                More Info
              </p>
              <p className="w-[112px] h-[40px] text-[14px] font-bold rounded-[5px] flex justify-center items-center btn-main text-[#ffffff] ">
                View Cruises
              </p>
            </label>
          </div>
          <div className="basis-1/2  bg-green-50">
            <video controls className="w-full h-full ">
              <source src="your-video-source-link.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* div after relative  */}
      <div className="container mx-auto -mt-[180px] ">
        {/* Cruise Deals */}

        <div className="p-[30px] mt-[20px] rounded-[16px] bg-[#ffffff]">
          <p className="text-[22px] font-bold text-[#000000] mb-[22px]">
            Cruise Deals
          </p>
          <div className="flex flex-wrap gap-[30px]">
            {cruiseDeals.map((deal) => (
              <label
                key={deal.id}
                className="h-[200px] basis-[calc(33.333%-20px)] bg-[#ffffff] flex rounded-[16px] border-[1px] border-[#d6d6d6]"
              >
                <div className="basis-1/2">
                  <img
                    src={deal.imageUrl}
                    alt={deal.destination}
                    className="w-full h-full object-cover rounded-s-[20px]"
                  />
                </div>
                <div className="basis-1/2 p-[22px]">
                  <p className="text-[#4a4a4a] text-[12px] leading-[1.33]">
                    {deal.date}
                  </p>
                  <p className="text-[14px] leading-[1.43] text-[#212121] mt-[5px]">
                    {deal.destination}
                  </p>
                  <p className="text-[22px] text-[#212121] leading-[0.45] mt-[61px]">
                    {deal.price}
                    <span className="text-[10px] text-[#212121] leading-[1.5] tracking-[0.3px]">
                      pp
                    </span>
                  </p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Cruise Types */}

        <div className="bg-[#ffffff] rounded-[16px] p-[30px] mt-[20px]  ">
          <p className="text-[22px] text-[#000000] font-bold   ">
            Cruise Types
          </p>
          <ul className="flex justify-between items-center  mt-[20px] ">
            <li className="w-[171px] gap-[13px] border-[1px] border-[#d6d6d6] py-[17px] px-[21px] flex justify-center items-center rounded-[8px] text-[#4a4a4a] text-[14px] leading-[1.14]  ">
              <ShipWheel size={30} color="#4a4a4a" />
              Cruises from Southampton
            </li>
            <li className="w-[171px] gap-[13px] border-[1px] border-[#d6d6d6] py-[17px] px-[21px] flex justify-center items-center rounded-[8px] text-[#4a4a4a] text-[14px] leading-[1.14] ">
              <Building2 size={30} color="#4a4a4a" />
              Cruise and Stay
            </li>
            <li className="w-[171px] gap-[13px] border-[1px] border-[#d6d6d6] py-[17px] px-[21px] flex justify-center items-center rounded-[8px] text-[#4a4a4a] text-[14px] leading-[1.14] ">
              <Ship size={30} color="#4a4a4a" />
              No fly Cruise
            </li>
            <li className="w-[171px] gap-[13px] border-[1px] border-[#d6d6d6] py-[17px] px-[21px] flex justify-center items-center rounded-[8px] text-[#4a4a4a] text-[14px] leading-[1.14] ">
              <Plane size={30} color="#4a4a4a" />
              Fly Cruise
            </li>
            <li className="w-[171px] gap-[13px] border-[1px] border-[#d6d6d6] py-[17px] px-[21px] flex justify-center items-center rounded-[8px] text-[#4a4a4a] text-[14px] leading-[1.14] ">
              <CalendarClock size={30} color="#4a4a4a" />
              Last Minute
            </li>
            <li className="w-[171px] gap-[13px] border-[1px] border-[#d6d6d6] py-[17px] px-[21px] flex justify-center items-center rounded-[8px] text-[#4a4a4a] text-[14px] leading-[1.14] ">
              <CalendarFold size={30} color="#4a4a4a" />
              Short Break
            </li>
            <li className="w-[171px] gap-[13px] border-[1px] border-[#d6d6d6] py-[17px] px-[21px] flex justify-center items-center rounded-[8px] text-[#4a4a4a] text-[14px] leading-[1.14] ">
              <UsersRound size={30} color="#4a4a4a" />
              Family Break
            </li>
          </ul>
        </div>

        {/* Cruise Ships */}

        <div className="p-[30px] mt-[20px] rounded-[16px] bg-[#ffffff]">
          <p className="text-[22px] font-bold text-[#000000] mb-[22px]">
            Cruises Ships
          </p>
          <div className="flex flex-wrap gap-[30px]">
            {cruiseShips.map((ship) => (
              <label
                key={ship.id}
                className="h-[200px] basis-[calc(33.333%-20px)] bg-[#ffffff] flex rounded-[16px] border-[1px] border-[#d6d6d6]"
              >
                <div className="basis-1/2">
                  <img
                    src={ship.imgSrc}
                    alt={ship.name}
                    className="w-full h-full object-cover rounded-s-[20px]"
                  />
                </div>
                <div className="basis-1/2 p-[22px]">
                  <p className="text-[#212121] text-[16px] leading-[1.25] font-bold">
                    {ship.name}
                  </p>
                  <p className="text-[12px] leading-[1.33] text-[#4a4a4a] mt-[1px]">
                    {ship.description}
                  </p>
                  <p className="text-[14px] font-bold text-[#f27c2c] leading-[0.71] mt-[104px]">
                    {ship.linkText}
                  </p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* More about Norwegian Cruise Line */}

        <div className="mt-[20px] bg-[#ffffff] rounded-[16px] px-[30px] py-[44px]">
          <p className="text-[22px] font-bold text-[#000000]">
            More about Norwegian Cruise Line
          </p>
          <div className="flex gap-[98px] mt-[40px]">
            <div className="basis-[30%]">
              <ul>
                {[
                  "Dining",
                  "Entertainment",
                  "Family",
                  "Destinations",
                  "Things to do",
                  "Useful Information",
                ].map((tab) => (
                  <li
                    key={tab}
                    onClick={() => handleTabClick(tab)}
                    className={`relative border-[#d6d6d6] border-[1px] pl-[50px] py-[27px] rounded-[16px] text-[18px] cursor-pointer ${
                      activeTab === tab
                        ? "text-[#ffffff] font-bold bg-[#f27c2c]"
                        : "text-[#21211]"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <div className="absolute right-[-10px] top-[16px] transform -translate-y-[64%] rotate-[92deg] w-0 h-0 border-l-[20px] border-l-[#f27c2c] border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent"></div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="basis-[70%]">
              {activeTab === "Dining" && (
                <p className="text-[16px] text-[#212121] leading-[1.8]">
                  Dining
                </p>
              )}
              {activeTab === "Entertainment" && (
                <div>
                  <p className="text-[16px] text-[#212121] leading-[1.8]">
                    Find award winning entertainment across Norwegian Cruise
                    Line’s innovative fleet that will keep guests of all ages
                    amused. From phenomenal shows to casual bars or livelier
                    nights of dancing, every guest will be sure to remember
                    their evenings onboard the ship.
                  </p>
                  <ul className="list-disc px-[30px] text-[16px] text-[#212121] mt-[28px] flex flex-col gap-[33px] leading-[1.8] font-bold">
                    <li>
                      Live music-
                      <span className="text-[#4a4a4a] font-normal">
                        enjoy all genres of music from rock to sing-along piano
                        performances and long-running tribute acts.
                      </span>
                    </li>
                    <li>
                      Broadway Shows-
                      <span className="text-[#4a4a4a] font-normal">
                        make the most of award-winning shows even when you’re at
                        sea, such as After Midnight, Six and Burn The Floor.
                      </span>
                    </li>
                    <li>
                      Parties-
                      <span className="text-[#4a4a4a] font-normal">
                        themed events, sailaway deck parties and nights of
                        dancing are guaranteed on your NCL cruise.
                      </span>
                    </li>
                    <li>
                      Comedy-
                      <span className="text-[#4a4a4a] font-normal">
                        for those who like stand-up shows, Headliners Comedy
                        Club on Norwegian Getaway and Norwegian Escape is the
                        place to go.
                      </span>
                    </li>
                    <li>
                      Bars-
                      <span className="text-[#4a4a4a] font-normal">
                        with up to 22 bars and lounges to choose from on each
                        ship, you won’t have to go to the same place twice
                        (unless you want to!). Whether you want to sip your
                        cocktail as you admire the sunset, sample some of the
                        finest beers and whiskeys at sea or get your dancing
                        shoes on, there’s a venue that’s exactly what you’re
                        looking for.
                      </span>
                    </li>
                  </ul>
                </div>
              )}
              {activeTab === "Family" && (
                <p className="text-[16px] text-[#212121] leading-[1.8]">
                  Family
                </p>
              )}
              {activeTab === "Destinations" && (
                <p className="text-[16px] text-[#212121] leading-[1.8]">
                  Destinations
                </p>
              )}
              {activeTab === "Things to do" && (
                <p className="text-[16px] text-[#212121] leading-[1.8]">
                  Things to do
                </p>
              )}
              {activeTab === "Useful Information" && (
                <p className="text-[16px] text-[#212121] leading-[1.8]">
                  Useful Information
                </p>
              )}
            </div>
          </div>
        </div>

        {/* All Norwegian Cruise Line Destinations  */}
        <div className="rounded-[16px] bg-[#ffffff] mt-[20px] px-[30px] py-[37px] ">
          <p className="text-[22px] font-bold text-[#000000]  ">
            All Norwegian Cruise Line Destinations
          </p>
          <ul className="flex flex-wrap gap-[15px] mt-[22px] text-[16px] text-[#4a4a4a]  ">
            <li>Africa</li>
            <li>Alaska</li>
            <li>Antarctic</li>
            <li>Arctic</li>
            <li>Asia</li>
            <li>Australasia</li>
            <li>Bahamas</li>
            <li>Baltic</li>
            <li>Black Sea</li>
            <li>British Isles</li>
            <li>Canada</li>
            <li>Canary Islands / Azores</li>
            <li>Caribbean</li>
            <li>Central America</li>
            <li>Dubai</li>
            <li>Dublin</li>
            <li>Europe</li>
            <li>Far East </li>
            <li>Fjords & Norway</li>
            <li>Greece</li>
            <li>Hawaii</li>
            <li>Indian Ocean </li>
            <li>Mediterranean </li>
            <li>Mexico</li>
            <li>Middle East </li>
            <li>North America</li>
            <li>Northern Europe</li>
            <li>Pacific Islands </li>
            <li>Panama Canal</li>
            <li>Red Sea</li>
            <li>Repositioning </li>
            <li>South America</li>
            <li>South East Asia</li>
            <li>Transatlantic</li>
          </ul>
        </div>

        {/* More Aout NCL Cruises */}
        <div className="rounded-[16px] bg-[#ffffff] mt-[20px] px-[30px] py-[37px] ">
          <p className="text-[22px] font-bold text-[#000000]  ">
            More Aout NCL Cruises
          </p>
          <ul className="flex flex-wrap gap-[15px] mt-[17px] text-[16px] text-[#4a4a4a]  ">
            <li>Cruise and Stay</li>
            <li>First Cruise</li>
            <li>Family Cruises</li>
          </ul>
        </div>

        {/* Travel Requirements */}
        <div className="rounded-[16px] bg-[#ffffff] mt-[20px] px-[30px] py-[40px] font-[900] ">
          <p className="text-[22px] font-bold text-[#000000]  ">
            More Aout NCL Cruises
          </p>
          <p className=" mt-[16px] text-[16px] text-[#757575] font-normal ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className=" mt-[10px] text-[16px] text-[#757575] font-normal  ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      {/* More Cruise Ideas */}

      <MoreCruiseIdeas />
    </>
  );
};

export default CruiseInfo;
