import SectionLayout from "@/layouts/section-layout";
import Navbar from "@/components/navbar";
import Title from "@/components/title";
import PhotoGallery from "./_components/gallery";
import About from "./_components/about";
import Hero from "./_components/hero";
import Committee_page from "./_components/committee_page";
export default function AboutPage() {
  return (
    <>
      <SectionLayout navbar float transparent glassMorphism>
        <Navbar />
      </SectionLayout>

      <Title title="about" />

      <SectionLayout full>
        <Hero />
      </SectionLayout>

      <SectionLayout>
        <About />
      </SectionLayout>

      <SectionLayout>
        <PhotoGallery />
      </SectionLayout>
      <Committee_page />
    </>
  );
}
