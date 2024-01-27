"use client";

import { ExploreButton } from "@/components/svg/buttons";
import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import AnimatedSectionLayout from "./animatedSectionLayout";

interface SectionProps {
  children: ReactNode;
  full?: boolean;
  float?: boolean;
  explorable?: boolean;
  navigate?: string;
  noanimation?: boolean;
}

const Section = ({
  children,
  full = false,
  float = false,
  explorable = false,
  navigate = "",
  noanimation = true,
}: SectionProps) => {
  return (
    <div
      className={clsx(
        "px-6 sm:px-12 bg-tertiary border border-x-0 border-t-0 border-quarternary",
        {
          "z-10 fixed top-0 left-0 right-0": float,
        }
      )}
    >
      <div
        className={clsx("relative border-quarternary border border-y-0", {
          "px-4 py-2 sm:px-8 sm:py-4 lg:px-16 lg:py-9": !full,
          "pb-10": explorable,
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
          {children}
        </AnimatedSectionLayout>
        {explorable && (
          <>
            <Link
              href={navigate}
              className="absolute right-0 bottom-0 hidden md:block"
            >
              <ExploreButton />
            </Link>
            <Link
              href={navigate}
              className="absolute right-0 bottom-0 md:hidden"
            >
              <ExploreButton size={64} />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Section;
