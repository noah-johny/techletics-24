import SectionLayout from "@/layouts/section-layout";
import Navbar from "@/components/navbar";
import Title from "@/components/title";
import { About, Date, Guidelines, Roadmap, Submit } from "./_components";

export default function Conferences() {
  return (
    <>
      <SectionLayout navbar float transparent glassMorphism>
        <Navbar />
      </SectionLayout>

      <Title title="conferences" />

      {/* <div className="bg-conference-img bg-cover bg-center bg-no-repeat"> */}
      <SectionLayout>
        <About />
      </SectionLayout>
      {/* </div> */}

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
