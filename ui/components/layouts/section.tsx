import clsx from "clsx";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  full?: boolean;
}

const Section = ({ children, full = false }: SectionProps) => {
  return (
    <section>
      <div className="px-6 sm:px-12">
        <div
          className={clsx("border-quarternary border border-y-0", {
            "px-4 py-2 sm:px-8 sm:py-4 lg:px-16 lg:py-9": !full,
          })}
        >
          {children}
        </div>
      </div>
      <hr className="border-quarternary border-1" />
    </section>
  );
};

export default Section;
