"use client";

import Band from "../../../public/images/band.png";
import Dristi from "../../../public/images/dristi.jpg";
import DanceGroup from "../../../public/images/dance-group.png";
import Designathon from "../../../public/images/designathon.png";

import SectionLayout from "@/layouts/section-layout";
import { useState } from "react";
import Image from "next/image";
import { CustomText } from "@/components/custom";

const EventList = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const branches = ["ALL", "CSE", "ME", "CE", "EC", "EEE", "BSH"];

  const eventlist = [
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

  return (
    <SectionLayout>
      <div className="flex flex-col gap-10">
        <CustomText title>
          witness the&nbsp;
          <CustomText highlightedTitle>tech-culture&nbsp;</CustomText>
          extravaganza.
        </CustomText>
        <div className="font-secondary text-sm sm:text-xl md:text-lg">
          Explore, Learn, and Enjoy: The Events of Techletics '24
        </div>
        <div className="mx-auto hidden w-full items-center justify-between rounded-full border-2 border-primary p-2 font-primary text-lg text-primary md:flex lg:text-2xl">
          {branches.map((branch) => (
            <div
              key={branch}
              className={
                activeTab === branch
                  ? "rounded-full bg-primary px-4 py-1 text-tertiary lg:px-10"
                  : "px-4 py-1 lg:px-10"
              }
              onClick={() => setActiveTab(branch)}
            >
              {branch}
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <select
            className="w-full rounded-full bg-primary px-4 py-2 font-primary text-xl text-tertiary"
            onChange={(e) => setActiveTab(e.target.value)}
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
              <div className="h-64 w-64 transition-all duration-200 ease-in hover:scale-105">
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

export default EventList;
