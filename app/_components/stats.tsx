import { StatsBgElements } from "@/components/svg";

const Stats = () => {
  return (
    <div className="reative flex justify-center items-center">
      <div className="opacity-50 overflow-clip">
        <StatsBgElements />
      </div>

      <div className="absolute top-0 left-0 justify-center w-full h-full flex flex-col gap-12 md:gap-16 font-primary text-primary">
        <div className="flex justify-evenly flex-wrap gap-4">
          <div className="flex flex-col min-w-[320px] px-2 text-center">
            <p className="font-secondary text-transparent text-stroke-primary text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-wide">
              250+
            </p>
            <p className="text-secondary text-xl md:text-2xl lowercase">
              CULTURAL Events
            </p>
          </div>

          <div className="flex flex-col min-w-[320px] px-2 text-center">
            <p className="font-secondary text-transparent text-stroke-primary text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-wide">
              500+
            </p>
            <p className="text-secondary text-xl md:text-2xl lowercase">
              TECH Events
            </p>
          </div>
        </div>

        <div className="flex justify-evenly flex-wrap gap-4">
          <div className="flex flex-col min-w-[320px] px-2 text-center">
            <p className="font-secondary text-stroke-primary text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-wide">
              1k+
            </p>
            <p className="text-secondary text-xl md:text-2xl lowercase">
              COLLEGES
            </p>
          </div>

          <div className="flex flex-col min-w-[320px] px-2 text-center">
            <p className="font-secondary text-stroke-primary text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-wide">
              250k+
            </p>
            <p className="text-secondary text-xl md:text-2xl lowercase">
              PRIZE POOL
            </p>
          </div>

          <div className="flex flex-col min-w-[320px] px-2 text-center">
            <p className="font-secondary text-stroke-primary text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-wide">
              10k+
            </p>
            <p className="text-secondary text-xl md:text-2xl lowercase">
              STUDENTS
            </p>
          </div>
        </div>

        <div className="flex justify-evenly flex-wrap gap-4">
          <div className="flex flex-col min-w-[320px] px-2 text-center">
            <p className="font-secondary text-transparent text-stroke-primary text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-wide">
              30+
            </p>
            <p className="text-secondary text-xl md:text-2xl lowercase">
              TECH EXPERTS
            </p>
          </div>

          <div className="flex flex-col min-w-[320px] px-2 text-center">
            <p className="font-secondary text-transparent text-stroke-primary text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-wide">
              75+
            </p>
            <p className="text-secondary text-xl md:text-2xl lowercase">
              WORKSHOPS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
