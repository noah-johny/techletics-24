import SectionLayout from "@/layouts/section-layout";
import Navbar from "@/components/navbar";
import Title from "@/components/title";
import PhotoGallery from "./_components/gallery";
import About from "./_components/about";
import Image from "next/image";
export default function AboutPage() {
  return (
    <>
      <SectionLayout navbar float transparent glassMorphism>
        <Navbar />
      </SectionLayout>

      <Title title="about" />

      <SectionLayout>
        <About />
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
        <PhotoGallery />
      </SectionLayout>
    </>
  );
}
