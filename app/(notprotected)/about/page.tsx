import Title from "@/components/title";
import { About, Committee, Legacy } from "./_components";

export default function AboutPage() {
  return (
    <>
      <div className="mt-[72px] sm:mt-[88px] xl:mt-24"></div>
      <Title title="about" />

      <About />

      <Legacy />

      <Committee />
    </>
  );
}
