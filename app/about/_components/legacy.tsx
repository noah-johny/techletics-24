import { CustomText } from "@/components/custom";
import SectionLayout from "@/layouts/section-layout";
import Gallery from "./gallery";

const Legacy = () => {
  return (
    <SectionLayout>
      <div className="flex flex-col justify-center gap-12 py-6 font-primary text-secondary lg:py-12">
        <CustomText title>Techletics Legacy&nbsp;</CustomText>
        <div className="mb-6 sm:mb-12 lg:mb-0">
          <CustomText description>
            Join us for the&nbsp;
            <CustomText highlightedDescription>
              third edition of Techletics &apos;24
            </CustomText>
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
          </CustomText>
        </div>
        <CustomText description>
          This is a&nbsp;
          <CustomText highlightedDescription>
            3-day long techno-cultural techfest&nbsp;
          </CustomText>
          organized by Christ College of Engineering, Irinjalakuda from&nbsp;
          <CustomText highlightedDescription>
            28th February to 1st March,&nbsp;
          </CustomText>
          2024. The techfest aims to provide a
          <CustomText highlightedDescription>
            platform for technical students and develop students and
            people&nbsp;
          </CustomText>
          from all walks of life. It is an opportunity to showcase their skills,
          learn from industry experts, and network with peers. Participants can
          expect a wide range of activities including competitions, workshops,
          and interactive sessions. Techletics &apos;24 is not just about
          technology, but also about fostering creativity, innovation, and
          collaboration.&nbsp;
        </CustomText>
      </div>

      <div className="py-6 lg:pb-12">
        <Gallery />
      </div>
    </SectionLayout>
  );
};

export default Legacy;
