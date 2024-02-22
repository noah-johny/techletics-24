import SectionLayout from "@/layouts/section-layout";
import Navbar from "@/components/navbar";
import Title from "@/components/title";
import { About, Committee, Legacy } from "./_components";

export default function AboutPage() {
  return (
    <>
      <SectionLayout navbar float transparent glassMorphism>
        <Navbar />
      </SectionLayout>

      <div className="mt-[72px] sm:mt-[88px] xl:mt-24"></div>
      <Title title="about" />

      <About />

      <Legacy />

      <Committee />
    </>
  );
}
