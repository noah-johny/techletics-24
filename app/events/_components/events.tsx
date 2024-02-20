"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import SectionLayout from "@/layouts/section-layout";
import { CustomText } from "@/components/custom";

type Event = {
  name: string;
  url: string;
  branch?: string;
  community?: string;
  category: string;
  type?: string;
};

const branches = ["ALL", "CSE", "ME", "CE", "EC", "EEE", "BSH"];
const types = ["ALL EVENTS", "COMPETITION", "WORKSHOP", "TECH-TALK", "EXPO"];
const categories = ["TECHNICAL", "CULTURAL"];

const eventList: Event[] = [
  {
    name: "Women in Buisness",
    url: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/women-in-business_.png",
    community: "IEDC",
    category: "TECHNICAL",
    type: "EXPO",
  },
  {
    name: "Idea Pitching",
    url: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-18_at_22.29.37_c9735fa3.jpg",
    branch: "CSE",
    category: "TECHNICAL",
    type: "COMPETITION",
  },
  {
    name: "EV Drive",
    url: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-18_at_22.29.13_5f8481ef.jpg",
    branch: "EEE",
    category: "TECHNICAL",
    type: "WORKSHOP",
  },
  {
    name: "Hacknite",
    url: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-18_at_22.29.08_791165df.jpg",
    branch: "CSE",
    category: "TECHNICAL",
    type: "COMPETITION",
  },
  {
    name: "Technical Quiz",
    url: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-18_at_14.33.25_d5a52fd6.jpg",
    branch: "CE",
    category: "TECHNICAL",
    type: "COMPETITION",
  },
  {
    name: "E-Football Tournament",
    url: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-17_at_23.29.49_1e9e2961.jpg",
    branch: "CSE",
    category: "TECHNICAL",
    type: "COMPETITION",
  },
  {
    name: "BGMI Tournament",
    url: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-17_at_23.29.38_60d3cb58.jpg",
    branch: "CSE",
    category: "TECHNICAL",
    type: "COMPETITION",
  },
  {
    name: "Capture The Flag: Cyber Challenge",
    url: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-17_at_23.29.25_caaf84b1.jpg",
    community: "IEEE",
    category: "TECHNICAL",
    type: "COMPETITION",
  },
  {
    name: "Tech Talks: Life of an Entrepreneur",
    url: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-17_at_23.29.05_52c66f9e.jpg",
    branch: "CSE",
    category: "TECHNICAL",
    type: "TECH-TALK",
  },
  {
    name: "Tech Talks: Cyber Security",
    url: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-17_at_23.29.04_0ffb2014.jpg",
    branch: "CSE",
    category: "TECHNICAL",
    type: "TECH-TALK",
  },
  {
    name: "Non Destructive Testing",
    url: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-15_at_22.37.09_e6b94974-min.jpg",
    branch: "CE",
    category: "TECHNICAL",
    type: "WORKSHOP",
  },
  {
    name: "Robo Soccer",
    url: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-15_at_22.36.07_69120677-min.jpg",
    branch: "EC",
    category: "TECHNICAL",
    type: "COMPETITION",
  },
  {
    name: "Da Vinci's Vault",
    url: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-15_at_22.32.31_120de47f-min.jpg",
    branch: "ME",
    category: "TECHNICAL",
    type: "COMPETITION",
  },
  {
    name: " EV Hack",
    url: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-15_at_22.32.30_63b4b103-min.jpg",
    branch: "EEE",
    category: "TECHNICAL",
    type: "COMPETITION",
  },
  {
    name: "Project Expo",
    url: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-13_at_22.00.36_d0ea6677-min.jpg",
    branch: "CSE",
    category: "TECHNICAL",
    type: "EXPO",
  },
  {
    name: "Quake Proof Creation Challenge",
    url: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-13_at_22.00.19_9e5926ea-min.jpg",
    branch: "CE",
    category: "TECHNICAL",
    type: "COMPETITION",
  },
  {
    name: " Wrenching Wheels",
    url: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-13_at_19.31.05_d777ea88-min.jpg",
    branch: "ME",
    category: "TECHNICAL",
    type: "COMPETITION",
  },
  {
    name: "Malhar: Musical Band Competition",
    url: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-13_at_19.30.52_89e38456-min.jpg",
    category: "CULTURAL",
    type: "COMPETITION",
  },
  {
    name: "iRobotics Workshop",
    url: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-20_at_11.49.45_db67373d.jpg",
    branch: "ECE",
    category: "TECHNICAL",
    type: "WORKSHOP",
  },
  {
    name: "Build your Dreams",
    url: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-20_at_11.49.27_012367d9.jpg",
    branch: "CE",
    category: "EXPO",
  },
  {
    name: "Clues and Crayns",
    url: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/WhatsApp_Image_2024-02-20_at_11.49.22_f2a885d2.jpg",
    branch: "ME",
    category: "TECHNICAL",
    type: "COMPETITION",
  },
  {
    name: "Designathon",
    url: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/designathon.png",
    branch: "CSE",
    category: "TECHNICAL",
    type: "COMPETITION",
  },
  {
    name: "Drishti",
    url: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/dristi.jpg",
    branch: "BSH",
    category: "TECHNICAL",
    type: "EXPO",
  },
  {
    name: "BeatSync Battle",
    url: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/dance-group.png",
    category: "CULTURAL",
    type: "COMPETITION",
  },
];

const Events = () => {
  const [activeBranch, setActiveBranch] = useState("ALL");
  const [activeCategory, setActiveCategory] = useState("TECHNICAL");
  const [activeType, setActiveType] = useState("ALL EVENTS");

  const handleBranchChange = useCallback((branch: string) => {
    setActiveBranch(branch);
  }, []);

  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category);
  }, []);

  const handleTypeChange = useCallback((type: string) => {
    setActiveType(type);
  }, []);

  return (
    <SectionLayout>
      <div className="flex flex-col justify-center gap-6 bg-tertiary pt-6 font-primary text-secondary lg:pt-12">
        <CustomText title>
          witness the&nbsp;
          <CustomText highlightedTitle>tech-culture&nbsp;</CustomText>
          extravaganza.
        </CustomText>

        <CustomText description>
          Explore, Learn, and Enjoy: The Events of Techletics &apos;24
        </CustomText>

        <div className="mx-auto mt-4 flex items-center justify-between rounded-full border border-primary p-1 font-primary text-sm lowercase tracking-wider text-primary sm:mt-8 md:mt-12 md:p-2 md:text-lg lg:w-fit lg:text-xl">
          {categories.map((category) => (
            <div
              key={category}
              className={
                activeCategory === category
                  ? "rounded-full bg-primary px-6 py-1 text-tertiary transition-all duration-300 ease-in-out lg:px-8"
                  : "px-6 py-1 lg:px-8"
              }
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </div>
          ))}
        </div>

        {activeCategory === "TECHNICAL" && (
          <div className="flex justify-end gap-6 xl:absolute xl:right-16 xl:top-[348px]">
            <select
              className="text-md bg-transparent font-primary text-secondary focus:outline-none focus:ring-0 md:text-xl"
              onChange={(e) => handleBranchChange(e.target.value)}
            >
              {branches.map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>

            <select
              className="text-md bg-transparent font-primary text-secondary focus:outline-none focus:ring-0 md:text-xl"
              onChange={(e) => handleTypeChange(e.target.value)}
            >
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="my-10 flex flex-wrap justify-center">
          {eventList
            .filter(
              (event) =>
                event.category === activeCategory &&
                (activeBranch === "ALL" || event.branch === activeBranch) &&
                (activeType === "ALL EVENTS" || event.type === activeType),
            )
            .map((event) => (
              <div
                className="h-72 w-64 p-5 transition-all duration-200 ease-in hover:scale-125"
                key={event.name}
              >
                <Image
                  className="h-full w-full object-contain grayscale hover:grayscale-0"
                  src={event.url}
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
