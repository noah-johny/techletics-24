"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import SectionLayout from "@/layouts/section-layout";
import { CustomSelect, CustomText } from "@/components/custom";
import { eventList } from "./event-list";
import Link from "next/link";

const branches = ["ALL", "CSE", "ME", "CE", "EC", "EEE", "BSH"];
const types = ["ALL EVENTS", "COMPETITION", "WORKSHOP", "TECH-TALK", "EXPO"];
const categories = ["TECHNICAL", "CULTURAL"];

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
            <CustomSelect
              className="text-md cursor-pointer bg-tertiary font-primary text-secondary focus:outline-none focus:ring-0 md:text-xl"
              onChange={(e) => handleBranchChange(e.target.value)}
            >
              {branches.map((branch) => (
                <option key={branch} value={branch} className="cursor-pointer">
                  {branch}
                </option>
              ))}
            </CustomSelect>

            <CustomSelect
              className="text-md cursor-pointer bg-tertiary font-primary text-secondary focus:outline-none focus:ring-0 md:text-xl"
              onChange={(e) => handleTypeChange(e.target.value)}
            >
              {types.map((type) => (
                <option key={type} value={type} className="cursor-pointer">
                  {type}
                </option>
              ))}
            </CustomSelect>
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
              <Link href={event.url} key={event.name}>
                <div className="h-72 w-64 p-5 transition-all duration-200 ease-in hover:scale-125">
                  <Image
                    className="h-full w-full object-contain grayscale hover:grayscale-0"
                    src={event.src}
                    alt={event.name}
                    width={300}
                    height={300}
                  />
                </div>
              </Link>
            ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default Events;
