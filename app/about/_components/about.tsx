import { CustomText } from "@/components/custom";

const About = () => {
  return (
    <div className="flex flex-col justify-center gap-12 py-6 font-primary text-secondary lg:py-12">
      <CustomText title>
        <span className="text-primary">Techletics Legacy&nbsp;</span>
      </CustomText>

      <div className="mb-6 sm:mb-12 lg:mb-0">
        <CustomText description>
          Join us for the&nbsp;
          <CustomText highlightedDescription>Techletics Tech Fest</CustomText>
          &nbsp;at Christ College of Engineering.&nbsp;
          <CustomText highlightedDescription>
            Experience the latest technology and innovations in various fields
            of engineering.&nbsp;
          </CustomText>
          Engage with industry experts, network with peers, and gain valuable
          insights into the future of technology. Participate in exciting
          competitions, workshops, and interactive sessions. Expand your
          knowledge, enhance your skills, and be a part of the vibrant tech
          community at Christ College of Engineering.&nbsp;
          <CustomText highlightedDescription>
            Don&apos;t miss this opportunity to explore and be inspired by the
            ever-evolving world of engineering.&nbsp;
          </CustomText>
          Join us for the Techletics Tech Fest at Christ College of Engineering.
        </CustomText>
      </div>
      <CustomText description>
        <CustomText highlightedDescription>Techletics &apos;24</CustomText>
        &nbsp;is a techno-cultural techfest organized by Christ College of
        Engineering, Irinjalakuda in 2022.&nbsp;
        <CustomText highlightedDescription>
          The techfest aims to provide a platform for technical students and
          develop students and people from all walks of life.&nbsp;
        </CustomText>
        It is an opportunity to showcase their skills, learn from industry
        experts, and network with peers. Participants can expect a wide range of
        activities including competitions, workshops, and interactive sessions.
        Techletics &apos;24 is not just about technology, but also about
        fostering creativity, innovation, and collaboration.&nbsp;
        <CustomText highlightedDescription>
          Join us for an unforgettable experience at Techletics &apos;24!
        </CustomText>
      </CustomText>
    </div>
  );
};

export default About;
