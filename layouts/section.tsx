import clsx from "clsx";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  full?: boolean;
  float?: boolean;
}

const Section = ({ children, full = false, float = false }: SectionProps) => {
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
          className={clsx("border-quarternary border border-y-0", {
            "px-4 py-2 sm:px-8 sm:py-4 lg:px-16 lg:py-9": !full,
          })}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
