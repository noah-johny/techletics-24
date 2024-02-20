"use client";

import { useState, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import SectionLayout from "@/layouts/section-layout";
import { CustomText } from "@/components/custom";

type Event = {
  name: string;
  img: StaticImageData | string;
  branch: string;
};

const branches = ["ALL", "CSE", "ME", "CE", "EC", "EEE", "BSH"];

const eventlist: Event[] = [
  {
    name: "Women in Buisness",
    img: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/women-in-business_.png",
    branch: "ALL",
  },
  {
    name: "Idea Pitching",
    img: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-18_at_22.29.37_c9735fa3.jpg",
    branch: "CSE",
  },
  {
    name: "EV Drive",
    img: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-18_at_22.29.13_5f8481ef.jpg",
    branch: "EEE",
  },
  {
    name: "Hacknite",
    img: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-18_at_22.29.08_791165df.jpg",
    branch: "CSE",
  },
  {
    name: "Tech Quiz",
    img: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-18_at_14.33.25_d5a52fd6.jpg",
    branch: "CE",
  },
  {
    name: "E-Football",
    img: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-17_at_23.29.49_1e9e2961.jpg",
    branch: "CSE",
  },
  {
    name: "BGMI",
    img: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-17_at_23.29.38_60d3cb58.jpg",
    branch: "CSE",
  },
  {
    name: "Capture The Flag",
    img: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-17_at_23.29.25_caaf84b1.jpg",
    branch: "ALL",
  },
  {
    name: "Tech Talks",
    img: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-17_at_23.29.05_52c66f9e.jpg",
    branch: "CSE",
  },
  {
    name: "Tech Talks Cyber",
    img: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-17_at_23.29.04_0ffb2014.jpg",
    branch: "CSE",
  },
  {
    name: "Workshop Non Destructive",
    img: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-15_at_22.37.09_e6b94974-min.jpg",
    branch: "CE",
  },
  {
    name: "Robo Soccer",
    img: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-15_at_22.36.07_69120677-min.jpg",
    branch: "EC",
  },
  {
    name: "Da vinci's",
    img: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-15_at_22.32.31_120de47f-min.jpg",
    branch: "ME",
  },
  {
    name: " EV Hack",
    img: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-15_at_22.32.30_63b4b103-min.jpg",
    branch: "EEE",
  },
  {
    name: "Project Expo",
    img: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-13_at_22.00.36_d0ea6677-min.jpg",
    branch: "CSE",
  },
  {
    name: "Quake",
    img: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-13_at_22.00.19_9e5926ea-min.jpg",
    branch: "CE",
  },
  {
    name: " Wrenching Wheels",
    img: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-13_at_19.31.05_d777ea88-min.jpg",
    branch: "ME",
  },
  {
    name: "Malhar",
    img: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-13_at_19.30.52_89e38456-min.jpg",
    branch: "ALL",
  },
  {
    name: "IRobotics",
    img: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-20_at_11.49.45_db67373d.jpg",
    branch: "ECE",
  },
  {
    name: "Build your Dreams",
    img: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-20_at_11.49.27_012367d9.jpg",
    branch: "CE",
  },
  {
    name: "Clues and Crayns",
    img: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-20_at_11.49.22_f2a885d2.jpg",
    branch: "ME",
  },
  {
    name: "Designathon",
    img: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/designathon.png",
    branch: "CSE",
  },
  {
    name: "DRISHTI",
    img: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/dristi.jpg",
    branch: "BSH",
  },
  {
    name: "BeatSync",
    img: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/dance-group.png",
    branch: "ALL",
  },
];

const Events = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const handleTabChange = useCallback((branch: string) => {
    setActiveTab(branch);
  }, []);

  return (
    <SectionLayout>
      <div className="flex flex-col justify-center gap-6 bg-tertiary py-6 font-primary text-secondary lg:py-12">
        <CustomText title>
          witness the&nbsp;
          <CustomText highlightedTitle>tech-culture&nbsp;</CustomText>
          extravaganza.
        </CustomText>

        <CustomText description>
          Explore, Learn, and Enjoy: The Events of Techletics &apos;24
        </CustomText>

        <div className="mx-auto mt-12 hidden w-full items-center justify-between rounded-full border border-primary p-2 font-primary text-lg lowercase tracking-wider text-primary md:flex lg:w-fit lg:text-xl">
          {branches.map((branch) => (
            <div
              key={branch}
              className={
                activeTab === branch
                  ? "rounded-full bg-primary px-6 py-1 text-tertiary transition-all duration-300 ease-in-out lg:px-8"
                  : "px-6 py-1 lg:px-8"
              }
              onClick={() => handleTabChange(branch)}
            >
              {branch}
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <select
            className="w-full rounded-full bg-primary px-8 py-2 font-primary text-xl text-tertiary "
            onChange={(e) => handleTabChange(e.target.value)}
          >
            {branches.map((branch) => (
              <option
                className={
                  activeTab === branch
                    ? "bg-tertiary text-primary"
                    : "bg-primary text-tertiary"
                }
                key={branch}
                value={branch}
              >
                {branch}
              </option>
            ))}
          </select>
        </div>
        <div className="my-10 flex flex-wrap justify-evenly">
          {eventlist
            .filter(
              (event) => activeTab === "ALL" || event.branch === activeTab,
            )
            .map((event) => (
              <div
                className="h-64 w-64 p-4 transition-all duration-200 ease-in hover:scale-105"
                key={event.name}
              >
                <Image
                  className="h-full w-full grayscale object-contain hover:grayscale-0"
                  src={event.img}
                  alt={event.name}
                  width={300}
                  height={300}
                />
              </div>
            ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default Events;
