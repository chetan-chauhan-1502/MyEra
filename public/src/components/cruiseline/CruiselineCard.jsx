import React from "react";

const CruiselineCard = () => {
  const cruiseLines = [
    {
      name: "Royal Caribbean",
      fleet: 25,
      description:
        "From cruise industry firsts like an amazing onboard ice rink and 200ft-above-sea-level Rock Climbing Walls, you'll discover that everything onboard a Royal Caribbean cruise ship is dedicated to bringing you The Ultimate Holiday Experience.",
      image:
        "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/royalCaribbean.png",
      tags: [
        "Premium",
        "Family",
        "Friendly",
        "American Style Cruising",
        "Informal",
        "Tips Payable",
      ],
    },
    {
      name: "Norwegian Cruise Line",
      fleet: 17,
      description:
        "Cruise Free at Sea with Norwegian Cruise Line and feel free to get the most out of your cruise holiday. Choose when and where you eat and with whom. Find a wide selection of dining venues onboard and spectacular award winning entertainment.",
      image:
        "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/norwegian.png",
      tags: [
        "Premium",
        "Family",
        "Friendly",
        "American Style Cruising",
        "Informal",
        "Tips Payable",
      ],
    },
    {
      name: "Royal Caribbean",
      fleet: 25,
      description:
        "From cruise industry firsts like an amazing onboard ice rink and 200ft-above-sea-level Rock Climbing Walls, you'll discover that everything onboard a Royal Caribbean cruise ship is dedicated to bringing you The Ultimate Holiday Experience.",
      image:
        "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/royalCaribbean.png",
      tags: [
        "Premium",
        "Family",
        "Friendly",
        "American Style Cruising",
        "Informal",
        "Tips Payable",
      ],
    },
    {
      name: "Norwegian Cruise Line",
      fleet: 17,
      description:
        "Cruise Free at Sea with Norwegian Cruise Line and feel free to get the most out of your cruise holiday. Choose when and where you eat and with whom. Find a wide selection of dining venues onboard and spectacular award winning entertainment.",
      image:
        "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/norwegian.png",
      tags: [
        "Premium",
        "Family",
        "Friendly",
        "American Style Cruising",
        "Informal",
        "Tips Payable",
      ],
    },
    {
      name: "Royal Caribbean",
      fleet: 25,
      description:
        "From cruise industry firsts like an amazing onboard ice rink and 200ft-above-sea-level Rock Climbing Walls, you'll discover that everything onboard a Royal Caribbean cruise ship is dedicated to bringing you The Ultimate Holiday Experience.",
      image:
        "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/royalCaribbean.png",
      tags: [
        "Premium",
        "Family",
        "Friendly",
        "American Style Cruising",
        "Informal",
        "Tips Payable",
      ],
    },
    {
      name: "Norwegian Cruise Line",
      fleet: 17,
      description:
        "Cruise Free at Sea with Norwegian Cruise Line and feel free to get the most out of your cruise holiday. Choose when and where you eat and with whom. Find a wide selection of dining venues onboard and spectacular award winning entertainment.",
      image:
        "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/norwegian.png",
      tags: [
        "Premium",
        "Family",
        "Friendly",
        "American Style Cruising",
        "Informal",
        "Tips Payable",
      ],
    },
    {
      name: "Royal Caribbean",
      fleet: 25,
      description:
        "From cruise industry firsts like an amazing onboard ice rink and 200ft-above-sea-level Rock Climbing Walls, you'll discover that everything onboard a Royal Caribbean cruise ship is dedicated to bringing you The Ultimate Holiday Experience.",
      image:
        "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/royalCaribbean.png",
      tags: [
        "Premium",
        "Family",
        "Friendly",
        "American Style Cruising",
        "Informal",
        "Tips Payable",
      ],
    },
    {
      name: "Norwegian Cruise Line",
      fleet: 17,
      description:
        "Cruise Free at Sea with Norwegian Cruise Line and feel free to get the most out of your cruise holiday. Choose when and where you eat and with whom. Find a wide selection of dining venues onboard and spectacular award winning entertainment.",
      image:
        "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/norwegian.png",
      tags: [
        "Premium",
        "Family",
        "Friendly",
        "American Style Cruising",
        "Informal",
        "Tips Payable",
      ],
    },
    {
      name: "Royal Caribbean",
      fleet: 25,
      description:
        "From cruise industry firsts like an amazing onboard ice rink and 200ft-above-sea-level Rock Climbing Walls, you'll discover that everything onboard a Royal Caribbean cruise ship is dedicated to bringing you The Ultimate Holiday Experience.",
      image:
        "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/royalCaribbean.png",
      tags: [
        "Premium",
        "Family",
        "Friendly",
        "American Style Cruising",
        "Informal",
        "Tips Payable",
      ],
    },
    {
      name: "Norwegian Cruise Line",
      fleet: 17,
      description:
        "Cruise Free at Sea with Norwegian Cruise Line and feel free to get the most out of your cruise holiday. Choose when and where you eat and with whom. Find a wide selection of dining venues onboard and spectacular award winning entertainment.",
      image:
        "https://todblobstore.blob.core.windows.net/img-new-cdn/dummyImages/norwegian.png",
      tags: [
        "Premium",
        "Family",
        "Friendly",
        "American Style Cruising",
        "Informal",
        "Tips Payable",
      ],
    },
  ];

  return (
    <div className="container mx-auto grid grid-cols-2  gap-[60px] ">
      {cruiseLines.map((cruiseLine, index) => (
        <div
          key={index}
          className="border p-[30px] bg-[#ffffff] rounded-[16px] "
        >
          <div className="flex justify-between items-center  ">
            <div>
              <h2 className="text-[24px] font-bold  text-[#212121] leading-[0.75] tracking-[0.48px]  ">
                {cruiseLine.name}
              </h2>
              <p className="text-[16px] text-[#4a4a4a] leading-[1.19] mt-[5px] ">
                Fleet: {cruiseLine.fleet}
              </p>
            </div>
            <img src={cruiseLine.image} alt={`${cruiseLine.name} logo`} />
          </div>
          <p className="text-[#4a4a4a] text-[15px] leading-[1.57] tracking-[0.28] mt-[21px] text-left">
            {cruiseLine.description}
          </p>
          <ul className="w-[386px]  text-[12px] text-[#4a4a4a] leading-[1.83] tracking-[0.24px] mt-[10px] flex flex-wrap">
            {cruiseLine.tags.map((tag, tagIndex) => (
              <li key={tagIndex} className="mr-[10px]  ">
                {tag}
              </li>
            ))}
          </ul>
          <div className="flex justify-end items-center gap-[10px] mt-[40px]">
            <p className="w-[112px] h-[40px]    border-[1px] border-[#4a4a4a] rounded-[8px] bg-[#ffffff] text-[#4a4a4a] text-[14px] leading-[1.57] tracking-[0.28px] flex justify-center items-center ">
              More Info
            </p>
            <p className="w-[112px] h-[40px]  rounded-[8px] btn-main text-[#ffffff]  text-[14px] leading-[1.57] tracking-[0.28px] flex justify-center items-center  ">
              View Cruises
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CruiselineCard;
