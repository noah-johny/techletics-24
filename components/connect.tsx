"use client";

import Image from "next/image";
import { SocialIcon } from "./svg/icons";
import SectionLayout from "@/layouts/section-layout";
import { CustomLink, CustomText } from "@/components/custom";

const SocialConnect = () => {
  return (
    <SectionLayout full>
      <div className="flex flex-col overflow-clip lg:flex-row">
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center gap-6 border-r border-transparent px-12 py-6 lg:w-1/2 lg:flex-row lg:border-quarternary lg:p-12">
          <CustomLink href="https://cce.edu.in">
            <Image
              src="/logos/cce-logo-landscape.png"
              width={248}
              height={64}
              alt="Christ College of Engineering Logo"
              priority
            />
          </CustomLink>
          <Image
            src="/icons/join.svg"
            width={16}
            height={16}
            alt="Join Icon"
            priority
          />
          <Image
            src="/logos/advaya-logo.png"
            width={88}
            height={88}
            alt="Advaya Logo"
            priority
          />
        </div>

        {/* Right Section */}
        <div className="relative z-0 flex flex-wrap items-center justify-center gap-4 px-12 py-6 md:gap-8 lg:w-1/2 lg:p-12">
          <p className="text-md whitespace-nowrap font-secondary font-medium text-secondary lg:text-lg">
            FOLLOW US
          </p>

          <div className="z-[1] flex gap-6">
            <CustomLink
              href="https://www.instagram.com/techleticscce"
              className="h-16 w-16 rounded-full bg-secondary p-4 hover:bg-primary"
            >
              <SocialIcon logo="instagram" />
            </CustomLink>
            <CustomLink
              href="https://www.linkedin.com/school/christcollegeofengineering/"
              className="h-16 w-16 rounded-full bg-secondary p-4 hover:bg-primary"
            >
              <SocialIcon logo="linkedin" />
            </CustomLink>
            {/* <CustomLink
              href="https://twitter.com/IedcE71858"
              className="h-16 w-16 rounded-full bg-secondary p-4 hover:bg-primary"
            >
              <SocialIcon logo="x" />
            </CustomLink> */}
          </div>

          <Image
            src="/logos/techletics-metal.svg"
            width={480}
            height={480}
            alt="Techetics Logo"
            priority
            className="absolute -top-12 left-1/3 z-[-1] -rotate-[35deg] opacity-15"
          />
        </div>
      </div>
    </SectionLayout>
  );
};

const Connect = () => {
  return (
    <SectionLayout>
      <div className="flex flex-col justify-center gap-12 bg-tertiary py-6 font-primary text-secondary lg:py-12">
        <div className="flex flex-wrap justify-between gap-2 align-middle sm:gap-4">
          <CustomText title>
            Want to&nbsp;
            <CustomText highlightedTitle>KNOW MORE?</CustomText>
            connect with us.
          </CustomText>

          <Image
            src="/icons/connect.svg"
            width={125}
            height={64}
            alt="Techetics Logo"
            priority
          />
        </div>

        <div className="flex w-fit flex-col gap-4 self-center">
          <p className="w-fit text-justify font-secondary text-lg font-medium text-primary md:text-xl">
            GET IN TOUCH
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 lg:justify-center lg:gap-12">
            <div className="flex gap-4">
              <Image
                src="/icons/arrow.svg"
                width={24}
                height={24}
                alt="Arrow Icon"
                priority
              />
              <CustomLink
                href="https://cce.edu.in/"
                className="font-secondary text-xl font-semibold hover:text-primary md:text-2xl xl:text-3xl"
              >
                cce.edu.in
              </CustomLink>
            </div>
            <div className="flex gap-4 self-center">
              <Image
                src="/icons/arrow.svg"
                width={24}
                height={24}
                alt="Arrow Icon"
                priority
              />
              <div className="flex flex-wrap font-secondary text-lg font-extrabold md:text-xl xl:text-2xl">
                <CustomLink
                  href="tel:+91 9400336647"
                  className="whitespace-nowrap hover:text-primary"
                >
                  +91 9400336647
                </CustomLink>
                <p>,&nbsp;</p>
                <CustomLink
                  href="tel:+91 9072809994"
                  className="whitespace-nowrap hover:text-primary"
                >
                  +91 9072809994
                </CustomLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export { SocialConnect, Connect };
