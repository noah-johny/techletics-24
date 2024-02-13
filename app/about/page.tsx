import SectionLayout from "@/layouts/section-layout";
import Navbar from "@/components/navbar";
import Title from "@/components/title";
import { CustomText } from "@/components/custom";
import PhotoGallery from "./_components/gallery";
export default function About() {
  return (
    <>
      <SectionLayout navbar float transparent glassMorphism>
        <Navbar />
      </SectionLayout>

      <Title title="about" />
      <SectionLayout>
        <div className="min-w-64 flex justify-center">
          <CustomText highlightedTitle>Techletics Legacy</CustomText>
        </div>
        <div className="min-w-64 flex-1 text-justify mt-8">
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
              Illuminate your mind, ignite your passion, and inspire your
              future.&nbsp;
            </CustomText>
            Techletics &apos;24 is the ultimate rendezvous of innovation and
            zest. Don&apos;t miss it.
          </CustomText>
        </div>
        <div className="mb-8 mt-8 min-w-64 flex-1 text-justify">
          <CustomText description>
            Techletics '22 is a techno-cultural techfest organized by Christ
            College of Engineering, Irinjalakuda in 2022. The techfest aims to
            provide a platform for technical students and develop students and
            people from all walks of life.
          </CustomText>
        </div>

        <PhotoGallery />
      </SectionLayout>
    </>
  );
}
