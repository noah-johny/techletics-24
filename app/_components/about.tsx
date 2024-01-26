import { TechleticsLogo } from "@/components/svg/logos";

const About = () => {
  return (
    <div className="flex flex-col justify-center gap-12 py-6 lg:py-12 bg-tertiary font-primary text-secondary ">
      <p className="text-4xl md:text-5xl lg:text-6xl md:w-[90%] leading-tight">
        Are YOU a{" "}
        <span className="text-primary whitespace-nowrap">Ͳech enͲhusiasͲ</span>?
        Ͳhen{" "}
        <span className="whitespace-nowrap">
          <span className="text-primary">
            ͲechlςͲics{" "}
            <span className="font-secondary font-extrabold">&apos;24</span>
          </span>
        </span>{" "}
        <span className="whitespace-nowrap">is for Уou.</span>
      </p>

      <div className="flex flex-wrap gap-8 items-center justify-center">
        <div className="min-w-xxl">
          <TechleticsLogo />
        </div>
        <p className="font-secondary font-regular text-xl md:text-2xl min-w-[300px] flex-1 text-justify">
          Join us for the <span className="font-extrabold">third edition</span>{" "}
          of Techletics, the{" "}
          <span className="font-extrabold">
            techno-cultural festival of Christ College of Engineering
          </span>
          . Explore, learn, and enjoy the latest innovations and trends in
          technology and culture. Participate in workshops, competitions,
          exhibitions, performances, and more. Win prizes and awards.{" "}
          <span className="font-extrabold">
            Illuminate your mind, ignite your passion, and inspire your future
          </span>
          . Techletics &apos;24 is the ultimate rendezvous of innovation and
          zest. Don&apos;t miss it.
        </p>
      </div>
    </div>
  );
};

export default About;
