"use client";

import Image from "next/image";
import { SocialIcon } from "./svg/icons";
import SectionLayout from "@/layouts/section-layout";
import { CustomLink } from "@/components/custom";

const SocialConnect = () => {
  return (
    <SectionLayout full>
      <div className="flex flex-col lg:flex-row overflow-clip">
        {/* Left Section */}
        <div className="flex flex-col lg:flex-row gap-6 border-transparent lg:border-quarternary border-r justify-center items-center px-12 py-6 lg:p-12 lg:w-1/2">
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
            src="/logos/advaya-logo.svg"
            width={64}
            height={64}
            alt="Advaya Logo"
            priority
          />
        </div>

        {/* Right Section */}
        <div className="relative flex flex-wrap gap-4 md:gap-8 lg:w-1/2 justify-center items-center px-12 py-6 lg:p-12 z-0">
          <p className="font-secondary text-secondary font-medium text-md lg:text-lg whitespace-nowrap">
            FOLLOW US
          </p>

          <div className="flex gap-6 z-[1]">
            <CustomLink
              href="https://www.instagram.com/techleticscce"
              className="p-4 bg-secondary hover:bg-primary rounded-full"
            >
              <SocialIcon logo="instagram" />
            </CustomLink>
            <CustomLink
              href="https://www.linkedin.com/school/christcollegeofengineering/"
              className="p-4 bg-secondary hover:bg-primary rounded-full"
            >
              <SocialIcon logo="linkedin" />
            </CustomLink>
            <CustomLink
              href="https://twitter.com/IedcE71858"
              className="p-4 bg-secondary hover:bg-primary rounded-full"
            >
              <SocialIcon logo="x" />
            </CustomLink>
          </div>

          <Image
            src="/logos/techletics-metal.svg"
            width={480}
            height={480}
            alt="Techetics Logo"
            priority
            className="absolute -rotate-[35deg] -top-12 left-1/3 opacity-15 z-[-1]"
          />
        </div>
      </div>
    </SectionLayout>
  );
};

const Connect = () => {
  return (
    <SectionLayout>
      <div className="flex flex-col justify-center gap-12 py-6 lg:py-12 bg-tertiary font-primary text-secondary">
        <div className="flex gap-2 sm:gap-4 justify-between align-middle flex-wrap">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] leading-tight tracking-wide lowercase flex flex-wrap">
            Want to&nbsp;
            <span className="text-primary whitespace-nowrap">KNOW MORE?</span>
            connect with us.
          </p>

          <Image
            src="/icons/connect.svg"
            width={125}
            height={64}
            alt="Techetics Logo"
            priority
          />
        </div>

        <div className="flex flex-col gap-4 w-fit self-center">
          <p className="text-primary font-secondary font-medium text-lg md:text-xl text-justify w-fit">
            GET IN TOUCH
          </p>
          <div className="flex gap-4 md:gap-6 lg:gap-12 lg:justify-center flex-wrap">
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
                className="font-secondary font-semibold text-xl md:text-2xl xl:text-3xl hover:text-primary"
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
              <div className="flex font-secondary font-extrabold text-lg md:text-xl xl:text-2xl flex-wrap">
                <CustomLink
                  href="/"
                  className="whitespace-nowrap hover:text-primary"
                >
                  +91 1234567890
                </CustomLink>
                <p>,&nbsp;</p>
                <CustomLink
                  href="/"
                  className="whitespace-nowrap hover:text-primary"
                >
                  +91 9876543210
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
