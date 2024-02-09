"use client";

import { ExploreButton } from "@/components/svg/buttons";
import clsx from "clsx";
import Link from "next/link";
import { ReactNode, useContext } from "react";
import AnimatedSectionLayout from "./animated-section-layout";
import { CustomCursorContext } from "@/context/custom-cursor-context";
import "@/app/globals.css";

interface SectionProps {
  children: ReactNode;
  full?: boolean;
  float?: boolean;
  explorable?: boolean;
  navigate?: string;
  noanimation?: boolean;
  transparent?: boolean;
  glassMorphism?: boolean;
  navbar?: boolean;
  noVerticalLines?: boolean;
  blurred?: boolean;
  hero?: boolean;
}

const SectionLayout = ({
  children,
  full = false,
  float = false,
  explorable = false,
  navigate = "",
  noanimation = true,
  transparent = false,
  glassMorphism = false,
  navbar = false,
  noVerticalLines = false,
  blurred = false,
  hero = false,
}: SectionProps) => {
  const { setShowCursor } = useContext(CustomCursorContext)!;

  return (
    <div
      className={clsx(
        "w-screen min-w-80 overflow-x-clip border border-x-0 border-t-0 border-quarternary px-6 sm:px-12",
        {
          "fixed left-0 right-0 top-0 z-10": float,
          "bg-tertiary": !transparent,
          "bg-transparent": transparent,
          "backdrop-blur-3xl": glassMorphism,
          "backdrop-blur-md": blurred,
        },
      )}
    >
      <div
        className={clsx("relative w-full border-y-0 border-quarternary", {
          border: !noVerticalLines,
          "px-4 sm:px-8 lg:px-16": !full,
          "py-2 sm:py-4 lg:py-9": !full && !navbar,
          "py-2 sm:py-4": navbar,
          "pb-10": explorable,
          "backdrop-brightness-50": hero,
        })}
      >
        <AnimatedSectionLayout
          noanimation={noanimation}
          initial={{ opacity: 0, scale: 0, translateY: 50 }}
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
          viewPort={{ once: true }}
          transition={{
            ease: "easeOut",
            duration: 0.5,
          }}
        >
          <div className="mx-auto w-full max-w-[1440px]">{children}</div>
        </AnimatedSectionLayout>
        {explorable && (
          <>
            <Link
              href={navigate}
              className="absolute bottom-0 right-0 hidden md:block"
              onMouseEnter={() => setShowCursor(false)}
              onMouseLeave={() => setShowCursor(true)}
            >
              <ExploreButton />
            </Link>
            <Link
              href={navigate}
              className="absolute bottom-0 right-0 md:hidden"
              onMouseEnter={() => setShowCursor(false)}
              onMouseLeave={() => setShowCursor(true)}
            >
              <ExploreButton size={64} />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default SectionLayout;
