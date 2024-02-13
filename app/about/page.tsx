import SectionLayout from "@/layouts/section-layout";
import Navbar from "@/components/navbar";
import Title from "@/components/title";
import { CustomText } from "@/components/custom";
import PhotoGallery from "./_components/gallery";
import About from "./_components/about";
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
      <SectionLayout>
        <PhotoGallery />
      </SectionLayout>
    </>
  );
}
