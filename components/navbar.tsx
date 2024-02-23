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
      <div className="z-2 relative">
        {/* Navbar Menu */}
        <div className="flex w-full sm:justify-between">
          <div className="hidden flex-col items-start space-y-1 font-primary lowercase tracking-wide text-secondary lg:block">
            {/* Menu First Line */}
            <div className="flex justify-between space-x-2 text-xl xl:text-2xl">
              <CustomLink
                href="/"
                onMouseEnter={() => setShowCursor(false)}
                onMouseLeave={() => setShowCursor(true)}
                className={clsx(
                  "cursor-pointer hover:text-primary hover:underline",
                  { "text-primary underline": pathname === "/" },
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
                  "text-primary underline": pathname === "/events",
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
                  "text-primary underline": pathname === "/about",
                })}
              >
                ABOUͲ
              </CustomLink>
              <p>/</p>
            </div>

            {/* Menu Second Line */}
            <div className="text-md flex w-[100%] justify-between xl:text-lg">
              <CustomLink
                href="/conferences"
                onMouseEnter={() => setShowCursor(false)}
                onMouseLeave={() => setShowCursor(true)}
                className={clsx("cursor-pointer hover:text-primary", {
                  "text-primary underline": pathname === "/conferences",
                })}
              >
                conferences
              </CustomLink>
              <p>/</p>
              <CustomLink
                href="https://www.google.com/maps/search/Christ+College+of+Engineering/@10.3577808,76.2125602,21z?entry=ttu"
                target="_blank"
                onMouseEnter={() => setShowCursor(false)}
                onMouseLeave={() => setShowCursor(true)}
                className={clsx("cursor-pointer hover:text-primary")}
              >
                locaͲion
              </CustomLink>
              <p>/</p>
              <CustomLink
                href="https://www.knowafest.com/explore/events/2019/01/3101-techletics-2019-christ-college-engineering-technical-festival-irinjalakuda"
                target="_blank"
                onMouseEnter={() => setShowCursor(false)}
                onMouseLeave={() => setShowCursor(true)}
                className={clsx("cursor-pointer hover:text-primary")}
              >
                blog
              </CustomLink>
            </div>
          </div>

          {/* Hamburger Icon */}
          <div className="z-10">
            {isOpen ? (
              <Image
                src="/icons/close.svg"
                width={56}
                height={56}
                alt="Close Icon"
                priority
                className="block scale-50 cursor-pointer sm:scale-75 lg:hidden"
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
                className="block scale-50 cursor-pointer sm:scale-75 lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setShowCursor(false)}
                onMouseLeave={() => setShowCursor(true)}
              />
            )}
          </div>
          {/* Techletics '24 Text */}
          <CustomLink
            href="/"
            onMouseEnter={() => setShowCursor(false)}
            onMouseLeave={() => setShowCursor(true)}
            className="static z-10 flex gap-x-2 self-center text-2xl lowercase leading-tight tracking-wide text-secondary sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:transform sm:justify-center sm:text-3xl lg:text-4xl xl:text-5xl"
          >
            <p className="font-primary">ͲechlςͲics</p>
            <p className="font-secondary font-extrabold">&apos;24</p>
          </CustomLink>

          {/* Contact Btn */}
          <a href="#contact">
            <Image
              src="/images/contact-btn.svg"
              width={152}
              height={56}
              alt="Contact Button"
              priority
              className="hidden scale-75 cursor-pointer sm:block lg:scale-100"
              onMouseEnter={() => setShowCursor(false)}
              onMouseLeave={() => setShowCursor(true)}
            />
          </a>
        </div>
      </div>

      {/* Hamburger Menu */}
      {isOpen && (
        <div className="z-0 flex h-screen w-full bg-modal-logo bg-cover bg-no-repeat lg:hidden">
          {/* Overlay */}
          <div className="absolute inset-0 z-[-1] bg-tertiary bg-opacity-85"></div>
          {/* Menu */}
          <div className="relative right-10 z-0 gap-8 p-16 font-primary text-3xl text-secondary sm:gap-4 sm:p-24 sm:text-6xl">
            <CustomLink
              href="/"
              onMouseEnter={() => setShowCursor(false)}
              onMouseLeave={() => setShowCursor(true)}
              className="group w-fit bg-green-500"
            >
              <p className="cursor-pointer group-hover:text-primary">HOME</p>
              <hr className="hidden border-quarternary py-2 group-hover:block" />
            </CustomLink>
            <CustomLink
              href="/events"
              onMouseEnter={() => setShowCursor(false)}
              onMouseLeave={() => setShowCursor(true)}
              className="group w-fit"
            >
              <p className="cursor-pointer group-hover:text-primary">EVENͲS</p>
              <hr className="hidden border-quarternary py-2 group-hover:block" />
            </CustomLink>
            <CustomLink
              href="/about"
              onMouseEnter={() => setShowCursor(false)}
              onMouseLeave={() => setShowCursor(true)}
              className="group w-fit"
            >
              <p className="cursor-pointer group-hover:text-primary">ABOUͲ</p>
              <hr className="hidden border-quarternary py-2 group-hover:block" />
            </CustomLink>
            <CustomLink
              href="/conferences"
              onMouseEnter={() => setShowCursor(false)}
              onMouseLeave={() => setShowCursor(true)}
              className="group w-fit"
            >
              <p className="cursor-pointer group-hover:text-primary">
                conferences
              </p>
              <hr className="hidden border-quarternary py-2 group-hover:block" />
            </CustomLink>
            <CustomLink
              href="https://www.google.com/maps/search/Christ+College+of+Engineering/@10.3577808,76.2125602,21z?entry=ttu"
              target="_blank"
              onMouseEnter={() => setShowCursor(false)}
              onMouseLeave={() => setShowCursor(true)}
              className="group w-fit"
            >
              <p className="cursor-pointer group-hover:text-primary">
                locaͲion
              </p>
              <hr className="hidden border-quarternary py-2 group-hover:block" />
            </CustomLink>
            <CustomLink
              href="https://www.knowafest.com/explore/events/2019/01/3101-techletics-2019-christ-college-engineering-technical-festival-irinjalakuda"
              target="_blank"
              onMouseEnter={() => setShowCursor(false)}
              onMouseLeave={() => setShowCursor(true)}
              className="group w-fit"
            >
              <p className="cursor-pointer group-hover:text-primary">blog</p>
              <hr className="hidden border-quarternary py-2 group-hover:block" />
            </CustomLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
