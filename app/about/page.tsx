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

      <Title title="about" />

      <About />
      <Legacy />

      <Committee />
    </>
  );
}
