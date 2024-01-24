import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return (
    <section>
      <div className="px-6 sm:px-12">
        <div className="px-4 py-2 sm:px-8 sm:py-4 lg:px-16 lg:py-9 border-quarternary border border-y-0">
          {children}
        </div>
      </div>
      <hr className="border-quarternary border-1" />
    </section>
  );
};

export default Section;
