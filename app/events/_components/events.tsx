"use client";

import { useState, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import SectionLayout from "@/layouts/section-layout";
import { CustomText } from "@/components/custom";

import Band from "../../../public/images/band.png";
import Dristi from "../../../public/images/dristi.jpg";
import DanceGroup from "../../../public/images/dance-group.png";
import Designathon from "../../../public/images/designathon.png";

type Event = {
  name: string;
  img: StaticImageData | string;
  branch: string;
};

const branches = ["ALL", "CSE", "ME", "CE", "EC", "EEE", "BSH"];

const eventlist: Event[] = [
  {
    name: "dristi",
    img: Dristi,
    branch: "EEE",
  },
  {
    name: "band 1",
    img: Band,
    branch: "CE",
  },
  {
    name: "dance group",
    img: DanceGroup,
    branch: "ME",
  },
  {
    name: "designathon",
    img: Designathon,
    branch: "CSE",
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
                className="h-64 w-64 transition-all duration-200 ease-in hover:scale-105"
                key={event.name}
              >
                <Image
                  className="h-full w-full grayscale hover:grayscale-0"
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
