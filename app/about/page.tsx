import SectionLayout from "@/layouts/section-layout";
import Navbar from "@/components/navbar";
import Title from "@/components/title";

export default function About() {
  return (
    <>
      <SectionLayout navbar float transparent glassMorphism>
        <Navbar />
      </SectionLayout>

      <Title title="about" />
    </>
  );
}