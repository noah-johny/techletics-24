import { CustomText } from "@/components/custom";
import { TechleticsLogo } from "@/components/svg/logos";

const About = () => {
  return (
    <div className="flex flex-col justify-center gap-12 bg-tertiary py-6 font-primary text-secondary lg:py-12">
      <CustomText title>
        Are YOU a&nbsp;
        <CustomText highlightedTitle>Ͳech enͲhusiasͲ?&nbsp;</CustomText>
        Ͳhen&nbsp;
        <CustomText highlightedTitle>
          ͲechlςͲics&nbsp;
          <CustomText highlightedTitle numeric>
            &apos;24&nbsp;
          </CustomText>
        </CustomText>
        is for Уou.
      </CustomText>

      <div className="mb-6 flex flex-wrap items-center justify-center gap-8 sm:mb-12 md:gap-12 lg:mb-0 lg:gap-16 xl:gap-20">
        <div className="min-w-xxl">
          <TechleticsLogo />
        </div>
        <div className="min-w-64 flex-1 text-justify gap-2 flex flex-col">
          <CustomText description>
            Join us for the&nbsp;
            <CustomText highlightedDescription>third edition</CustomText>
            &nbsp;of Techletics, the&nbsp;
            <CustomText highlightedDescription>
              techno-cultural festival of Christ College of Engineering.&nbsp;
            </CustomText>
            Explore, learn, and enjoy the latest innovations and trends in
            technology and culture. Participate in workshops, competitions,
            exhibitions, performances, and more. Win prizes and awards.&nbsp;
            <CustomText highlightedDescription>
              Ignite your passion, inspire your future and illuminate your mind.
              &nbsp;
            </CustomText>
            Techletics &apos;24 is the ultimate rendezvous of innovation and
            zest. Don&apos;t miss it.
          </CustomText>
          <div className="min-w-64 flex-1 text-justify "></div>
            <CustomText description>
              Techletics &apos;24 is a techno-cultural techfest organized by Christ
              College of Engineering, Irinjalakuda in 2024. The techfest aims to
              provide a platform for technical students and develop students and
              people from all walks of life.
            </CustomText>
        </div>
      </div>
    </div>
  );
};

export default About;
