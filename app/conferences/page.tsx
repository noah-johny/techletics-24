import SectionLayout from "@/layouts/section-layout";
import Navbar from "@/components/navbar";
import Title from "@/components/title";
import { About } from "./_components";
import Date from "./_components/date";

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
    </>
  );
}
