import { CustomLink } from "@/components/custom";

const Copyright = () => {
  return (
    <div className="relative flex min-h-16 items-center justify-center overflow-clip bg-tertiary">
      <div className="absolute mt-2 md:mt-8">
        <span className="text-stroke-secondary whitespace-nowrap align-middle font-primary text-8xl lowercase leading-none tracking-widest text-transparent md:text-9xl">
          ͲechlςͲics
        </span>
      </div>
      <div>
        <span className="sm:text-md flex flex-wrap items-center justify-center font-secondary text-sm text-secondary md:text-lg">
          <span className="whitespace-nowrap">Copyright © 2024&nbsp;</span>
          <CustomLink
            href="https://cce.edu.in"
            className="whitespace-nowrap text-primary"
          >
            Christ College of Engineering.&nbsp;
          </CustomLink>
          <span className="whitespace-nowrap">All Rights Reserved</span>
        </span>
      </div>
    </div>
  );
};

export default Copyright;
