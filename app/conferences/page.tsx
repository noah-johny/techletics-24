import SectionLayout from "@/layouts/section-layout";
import Navbar from "@/components/navbar";
import Title from "@/components/title";
import { About, Date, Guidelines, Roadmap } from "./_components";

export default function Conferences() {
  return (
    <>
      <SectionLayout navbar float transparent glassMorphism>
        <Navbar />
      </SectionLayout>

      <Title title="conferences" />

      <div className="bg-conference-img bg-cover bg-center bg-no-repeat">
        <SectionLayout transparent blurred>
          <About />
        </SectionLayout>
      </div>

      <Date />

      <SectionLayout>
        <Roadmap />
      </SectionLayout>

      <SectionLayout>
        <Guidelines />
      </SectionLayout>
    </>
  );
}
