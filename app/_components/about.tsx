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
        <div className="min-w-72 flex-1 text-justify">
          <CustomText description>
            Join us for the&nbsp;
            <CustomText highlightedDescription>third edition</CustomText>
            &nbsp;of Techletics, the&nbsp;
            <CustomText highlightedDescription>
              techno-cultural festival of Christ College of Engineering.
            </CustomText>
            Explore, learn, and enjoy the latest innovations and trends in
            technology and culture. Participate in workshops, competitions,
            exhibitions, performances, and more. Win prizes and awards.&nbsp;
            <CustomText highlightedDescription>
              Illuminate your mind, ignite your passion, and inspire your
              future.
            </CustomText>
            Techletics &apos;24 is the ultimate rendezvous of innovation and
            zest. Don&apos;t miss it.
          </CustomText>
        </div>
      </div>
    </div>
  );
};

export default About;
