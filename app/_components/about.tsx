import { TechleticsLogo } from "@/components/svg/logos";

const About = () => {
  return (
    <div className="flex flex-col justify-center gap-12 py-6 lg:py-12 bg-tertiary font-primary text-secondary">
      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:max-w-[95%] xl:max-w-[80%] leading-tight tracking-wide lowercase flex flex-wrap">
        Are YOU a&nbsp;
        <span className="whitespace-nowrap">
          <span className="text-primary">Ͳech enͲhusiasͲ</span>?&nbsp;
        </span>
        Ͳhen&nbsp;
        <span className="whitespace-nowrap">
          <span className="text-primary">
            ͲechlςͲics&nbsp;
            <span className="font-secondary font-extrabold">
              &apos;24&nbsp;
            </span>
          </span>
        </span>
        is for Уou.
      </p>

      <div className="flex flex-wrap gap-8 mb-6 sm:mb-12 lg:mb-0 md:gap-12 lg:gap-16 xl:gap-20 items-center justify-center">
        <div className="min-w-xxl">
          <TechleticsLogo />
        </div>
        <p className="font-secondary font-regular text-md md:text-xl lg:2xl xl:3xl text-justify flex-1">
          Join us for the <span className="font-extrabold">third edition</span>
          &nbsp; of Techletics, the&nbsp;
          <span className="font-extrabold">
            techno-cultural festival of Christ College of Engineering
          </span>
          . Explore, learn, and enjoy the latest innovations and trends in
          technology and culture. Participate in workshops, competitions,
          exhibitions, performances, and more. Win prizes and awards.&nbsp;
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
