import SectionLayout from "@/layouts/section-layout";
import Navbar from "@/components/navbar";
import Title from "@/components/title";
import { About, Date, Guidelines, Roadmap, Submit } from "./_components";

export default function ConferencesPage() {
  return (
    <>
      <SectionLayout navbar float transparent glassMorphism>
        <Navbar />
      </SectionLayout>

      <Title title="conferences" />

      <SectionLayout>
        <About />
      </SectionLayout>

      <Date />

      <SectionLayout>
        <Roadmap />
      </SectionLayout>

      <SectionLayout>
        <Guidelines />
      </SectionLayout>

      <SectionLayout>
        <Submit />
      </SectionLayout>
    </>
  );
}
