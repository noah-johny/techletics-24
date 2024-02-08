import { CustomText } from "@/components/custom";

const About = () => {
  return (
    <div className="flex flex-col justify-center gap-12 py-6 font-primary text-secondary lg:py-12">
      <CustomText title>
        <span className="text-primary">
          CHRIST COLLEGE OF ENGINEERING&nbsp;
        </span>
        INTERNATIONAL CONFERENCE
      </CustomText>

      <div className="mb-6 sm:mb-12 lg:mb-0">
        <CustomText description>
          Join us for the&nbsp;
          <CustomText highlightedDescription>Conference Presentation</CustomText>
          &nbsp;at Christ College of Engineering.&nbsp;
          <CustomText highlightedDescription>
            Discover the latest research and advancements in various fields of engineering.&nbsp;
          </CustomText>
          Engage with industry experts, network with peers, and gain valuable insights into the future of technology. Participate in interactive sessions, panel discussions, and technical workshops. Expand your knowledge, enhance your skills, and be a part of the academic community at Christ College of Engineering.&nbsp;
          <CustomText highlightedDescription>
            Don&apos;t miss this opportunity to be inspired and stay ahead in the ever-evolving world of engineering.&nbsp;
          </CustomText>
          Join us for the Conference Presentation at Christ College of Engineering.
        </CustomText>
      </div>
    </div>
  );
};

export default About;
