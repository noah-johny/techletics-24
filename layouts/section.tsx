import { ExploreButton } from "@/components/svg/buttons";
import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  full?: boolean;
  float?: boolean;
  explorable?: boolean;
  navigate?: string;
}

const Section = ({
  children,
  full = false,
  float = false,
  explorable = false,
  navigate = "",
}: SectionProps) => {
  return (
    <section>
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
          {children}

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
    </section>
  );
};

export default Section;
