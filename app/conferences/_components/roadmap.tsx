import { CustomText } from "@/components/custom";
import Image from "next/image";

const Roadmap = () => {
  const events = [
    {
      date: "15th February",
      description: "Abstract Submission Closes",
    },
    {
      date: "20th February",
      description: "Intimation of Acceptance",
    },
    {
      date: "22nd February",
      description:
        "Camera-ready paper & final registration (including fee payment)",
    },
    {
      date: "25th February",
      description: "Submission of Presentation",
    },
    {
      date: "28th February",
      description: "Presentation (Hybrid - Offline/Online)",
    },
    {
      date: "29th February",
      description: "Results & Awards Distribution",
    },
  ];

  return (
    <div className="relative my-12 flex flex-col justify-start gap-12 font-secondary text-secondary">
      <CustomText title>
        hackathon&nbsp;<CustomText highlightedTitle>roadmap</CustomText>
      </CustomText>

      <div className="flex w-full items-center justify-center gap-6">
        <div
          className="z-10 flex w-full flex-col gap-12 sm:grid-cols-2 sm:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2"
          style={{ display: "grid" }}
        >
          {events.map((event, index) => (
            <div key={index} className="flex w-full flex-col gap-2">
              <span className="font-primary text-2xl text-primary sm:text-3xl">
                <span className="font-secondary font-extrabold">
                  {event.date.split(" ")[0] + " "}
                </span>
                {event.date.split(" ")[1]}
              </span>

              <span className="max-w-64 font-secondary text-lg font-medium text-white">
                {event.description}
              </span>
            </div>
          ))}
        </div>

        <span className="absolute right-0 rotate-12 pb-12 font-primary text-9xl text-primary opacity-30 sm:relative sm:opacity-100">
          🌞
        </span>
      </div>
    </div>
  );
};

export default Roadmap;
