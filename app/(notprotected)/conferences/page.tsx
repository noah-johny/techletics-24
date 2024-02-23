import SectionLayout from "@/layouts/section-layout";
import Title from "@/components/title";
import { About, Date, Guidelines, Roadmap, Submit } from "./_components";

export default function ConferencesPage() {
  return (
    <>
      <div className="mt-[72px] sm:mt-[88px] xl:mt-24"></div>
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
