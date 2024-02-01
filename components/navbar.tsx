"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useContext, useState } from "react";
import { CustomCursorContext } from "@/context/custom-cursor-context";
import { CustomLink } from "@/components/custom";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { setShowCursor } = useContext(CustomCursorContext)!;

  return (
    <nav className="flex flex-col gap-6">
      <div className="relative z-2">
        {/* Navbar Menu */}
        <div className="flex w-[100%] sm:justify-between">
          <div className="font-primary flex-col items-start space-y-1 tracking-wide lowercase hidden lg:block">
            {/* Menu First Line */}
            <div className="flex space-x-2 justify-between text-xl xl:text-2xl">
              <CustomLink
                href="/"
                onMouseEnter={() => setShowCursor(false)}
                onMouseLeave={() => setShowCursor(true)}
                className={clsx(
                  "cursor-pointer hover:text-primary hover:underline",
                  { "underline text-primary": pathname === "/" }
                )}
              >
                HOME
              </CustomLink>
              <p>/</p>
              <CustomLink
                href="/events"
                onMouseEnter={() => setShowCursor(false)}
                onMouseLeave={() => setShowCursor(true)}
                className={clsx("cursor-pointer hover:text-primary", {
                  "underline text-primary": pathname === "/events",
                })}
              >
                EVENͲS
              </CustomLink>
              <p>/</p>
              <CustomLink
                href="/about"
                onMouseEnter={() => setShowCursor(false)}
                onMouseLeave={() => setShowCursor(true)}
                className={clsx("cursor-pointer hover:text-primary", {
                  "underline text-primary": pathname === "/about",
                })}
              >
                ABOUͲ
              </CustomLink>
              <p>/</p>
            </div>

            {/* Menu Second Line */}
            <div className="flex w-[100%] justify-between text-md xl:text-lg">
              <CustomLink
                href="https://www.instagram.com/techleticscce?igsh=Ym83cGQ2eHd0cjV6"
                onMouseEnter={() => setShowCursor(false)}
                onMouseLeave={() => setShowCursor(true)}
                className={clsx("cursor-pointer hover:text-primary")}
              >
                ‘22 EDIͲION
              </CustomLink>
              <p>/</p>
              <CustomLink
                href="#location"
                onMouseEnter={() => setShowCursor(false)}
                onMouseLeave={() => setShowCursor(true)}
                className={clsx("cursor-pointer hover:text-primary")}
              >
                locaͲion
              </CustomLink>
              <p>/</p>
              <CustomLink
                href="https://www.knowafest.com/explore/events/2019/01/3101-techletics-2019-christ-college-engineering-technical-festival-irinjalakuda"
                onMouseEnter={() => setShowCursor(false)}
                onMouseLeave={() => setShowCursor(true)}
                className={clsx("cursor-pointer hover:text-primary")}
              >
                blog
              </CustomLink>
            </div>
          </div>

          {/* Hamburger Icon */}
          <>
            {isOpen ? (
              <Image
                src="/icons/close.svg"
                width={56}
                height={56}
                alt="Close Icon"
                priority
                className="cursor-pointer block scale-50 lg:hidden sm:scale-75"
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setShowCursor(false)}
                onMouseLeave={() => setShowCursor(true)}
              />
            ) : (
              <Image
                src="/icons/menu.svg"
                width={56}
                height={56}
                alt="Menu Icon"
                priority
                className="cursor-pointer block scale-50 lg:hidden sm:scale-75"
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setShowCursor(false)}
                onMouseLeave={() => setShowCursor(true)}
              />
            )}
          </>
          {/* Techletics '24 Text */}
          <CustomLink
            href="/"
            onMouseEnter={() => setShowCursor(false)}
            onMouseLeave={() => setShowCursor(true)}
            className="flex text-secondary gap-x-2 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-wide lowercase static self-center sm:absolute sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:justify-center leading-tight"
          >
            <p className="font-primary">ͲechlςͲics</p>
            <p className="font-secondary font-extrabold">&apos;24</p>
          </CustomLink>

          {/* Contact Btn */}
          <Image
            src="/images/contact-btn.svg"
            width={152}
            height={56}
            alt="Contact Button"
            priority
            className="cursor-pointer scale-75 hidden lg:scale-100 sm:block"
            onMouseEnter={() => setShowCursor(false)}
            onMouseLeave={() => setShowCursor(true)}
          />
        </div>
      </div>

      {/* Hamburger Menu */}
      {isOpen && (
        <div className="bg-tertiary w-full h-screen overflow-hidden flex bg-modal-logo bg-no-repeat bg-cover z-[-1] lg:hidden">
          {/* Overlay */}
          <div className="absolute inset-0 bg-tertiary bg-opacity-85 z-[-1]"></div>
          {/* Menu */}
          <div className="font-primary text-secondary text-5xl p-16 sm:p-24 sm:text-7xl gap-8 sm:gap-4">
            <CustomLink
              href="/"
              onMouseEnter={() => setShowCursor(false)}
              onMouseLeave={() => setShowCursor(true)}
              className="group w-fit"
            >
              <p className="cursor-pointer group-hover:text-primary">HOME</p>
              <hr className="border-quarternary py-2 group-hover:block hidden" />
            </CustomLink>
            <CustomLink
              href="/events"
              onMouseEnter={() => setShowCursor(false)}
              onMouseLeave={() => setShowCursor(true)}
              className="group w-fit"
            >
              <p className="cursor-pointer group-hover:text-primary">EVENͲS</p>
              <hr className="border-quarternary py-2 group-hover:block hidden" />
            </CustomLink>
            <CustomLink
              href="/about"
              onMouseEnter={() => setShowCursor(false)}
              onMouseLeave={() => setShowCursor(true)}
              className="group w-fit"
            >
              <p className="cursor-pointer group-hover:text-primary">ABOUͲ</p>
              <hr className="border-quarternary py-2 group-hover:block hidden" />
            </CustomLink>
            <CustomLink
              href="https://www.instagram.com/techleticscce?igsh=Ym83cGQ2eHd0cjV6"
              onMouseEnter={() => setShowCursor(false)}
              onMouseLeave={() => setShowCursor(true)}
              className="group w-fit"
            >
              <p className="cursor-pointer group-hover:text-primary">
                ‘22 EDIͲION
              </p>
              <hr className="border-quarternary py-2 group-hover:block hidden" />
            </CustomLink>
            <CustomLink
              href="#location"
              onMouseEnter={() => setShowCursor(false)}
              onMouseLeave={() => setShowCursor(true)}
              className="group w-fit"
            >
              <p className="cursor-pointer group-hover:text-primary">
                locaͲion
              </p>
              <hr className="border-quarternary py-2 group-hover:block hidden" />
            </CustomLink>
            <CustomLink
              href="https://www.knowafest.com/explore/events/2019/01/3101-techletics-2019-christ-college-engineering-technical-festival-irinjalakuda"
              onMouseEnter={() => setShowCursor(false)}
              onMouseLeave={() => setShowCursor(true)}
              className="group w-fit"
            >
              <p className="cursor-pointer group-hover:text-primary">blog</p>
              <hr className="border-quarternary py-2 group-hover:block hidden" />
            </CustomLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
