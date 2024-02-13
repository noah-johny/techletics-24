import SectionLayout from "@/layouts/section-layout";
import Navbar from "@/components/navbar";
import Title from "@/components/title";
import { CustomText } from "@/components/custom";
import PhotoGallery from "./_components/gallery";
import Image from "next/image";
export default function About() {
  return (
    <>
      <SectionLayout navbar float transparent glassMorphism>
        <Navbar />
      </SectionLayout>

      <Title title="about" />
      <SectionLayout full>
        <section className="bg-college-img bg-cover bg-no-repeat  px-4 sm:px-8 lg:px-16 py-2 sm:py-4 lg:py-9 w-full h-full">
          <div className="w-full h-full">
            <div className="min-w-64 flex justify-center text-center items-center flex-col gap-2 pt-8">
              <CustomText title> CHRIST COLLEGE OF ENGINEERING</CustomText><span className="font-primary text-2xl text-primary sm:text-3xl">Irinjalakuda, Thrissur, Kerala</span>
            </div>
            <div className="min-w-64 flex-1 text-justify mt-8">
              <CustomText description>
                Christ College of Engineering (CCE), established in 2015, is affiliated to APJ Abdul Kalam Technological University, Thiruvananthapuram; and is recognized by AICTE, New Delhi. This college was found at a time when starting a new engineering college was not considered as a sensible proposition. In its short span of existence, exceeding all expectations and proving all critics wrong, Christ College of Engineering has managed to create ripples on the academic front in the university, so much so that today the college is being recognized as one of the best self-financing engineering colleges in Kerala.
              </CustomText>
            </div>
            <div className="mb-8 mt-8 min-w-64 flex-1 text-justify">
              <CustomText description>
                Staff and students are at the center of this success story. No stone is being left unturned in ensuring that along with academics, the students get the right amount of exposure required for tomorrow’s successful global citizen, through the various initiatives held at this campus. With the kind of transformative learning model in place here, the college is well on its way to making a positive impact on our society and nation at large.
              </CustomText>
            </div>
          </div>
        </section>
      </SectionLayout>
      {/* <section className="w-full">
        <Image
          src="/images/logo_hero.svg"
          layout="responsive"
          width={1920} // Adjust the width according to your image's original dimensions
          height={1080} // Adjust the height according to your image's original dimensions
          alt="Techletics Sticker"
          priority
        />
      </section> */}
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
