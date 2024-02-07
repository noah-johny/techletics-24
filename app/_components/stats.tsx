import { StatsBgElements } from "@/components/svg";

const Stats = () => {
  return (
    <div className="reative flex items-center justify-center">
      <div className="overflow-clip opacity-50">
        <StatsBgElements />
      </div>

      <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-center gap-12 font-primary text-primary md:gap-16">
        <div className="flex flex-wrap justify-evenly gap-4">
          <div className="flex min-w-[320px] flex-col px-2 text-center">
            <p className="text-stroke-primary font-secondary text-5xl font-extrabold tracking-wide text-transparent md:text-7xl lg:text-8xl">
              250+
            </p>
            <p className="text-xl lowercase text-secondary md:text-2xl">
              CULTURAL Events
            </p>
          </div>

          <div className="flex min-w-[320px] flex-col px-2 text-center">
            <p className="text-stroke-primary font-secondary text-5xl font-extrabold tracking-wide text-transparent md:text-7xl lg:text-8xl">
              500+
            </p>
            <p className="text-xl lowercase text-secondary md:text-2xl">
              TECH Events
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly gap-4">
          <div className="flex min-w-[320px] flex-col px-2 text-center">
            <p className="text-stroke-primary font-secondary text-5xl font-extrabold tracking-wide md:text-7xl lg:text-8xl">
              1k+
            </p>
            <p className="text-xl lowercase text-secondary md:text-2xl">
              COLLEGES
            </p>
          </div>

          <div className="flex min-w-[320px] flex-col px-2 text-center">
            <p className="text-stroke-primary font-secondary text-5xl font-extrabold tracking-wide md:text-7xl lg:text-8xl">
              250k+
            </p>
            <p className="text-xl lowercase text-secondary md:text-2xl">
              PRIZE POOL
            </p>
          </div>

          <div className="flex min-w-[320px] flex-col px-2 text-center">
            <p className="text-stroke-primary font-secondary text-5xl font-extrabold tracking-wide md:text-7xl lg:text-8xl">
              10k+
            </p>
            <p className="text-xl lowercase text-secondary md:text-2xl">
              STUDENTS
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly gap-4">
          <div className="flex min-w-[320px] flex-col px-2 text-center">
            <p className="text-stroke-primary font-secondary text-5xl font-extrabold tracking-wide text-transparent md:text-7xl lg:text-8xl">
              30+
            </p>
            <p className="text-xl lowercase text-secondary md:text-2xl">
              TECH EXPERTS
            </p>
          </div>

          <div className="flex min-w-[320px] flex-col px-2 text-center">
            <p className="text-stroke-primary font-secondary text-5xl font-extrabold tracking-wide text-transparent md:text-7xl lg:text-8xl">
              75+
            </p>
            <p className="text-xl lowercase text-secondary md:text-2xl">
              WORKSHOPS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
