import { About, Hero, Stats } from "@/app/_components";
import TextMarquee from "@/components/marquee";
import SectionLayout from "@/layouts/section-layout";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <section className="bg-hero-img bg-cover bg-no-repeat ">
        <SectionLayout navbar float transparent glassMorphism>
          <Navbar />
        </SectionLayout>
        <SectionLayout full transparent hero>
          <Hero />
        </SectionLayout>
      </section>

      <TextMarquee />

      <SectionLayout explorable navigate="/about">
        <About />
      </SectionLayout>

      <SectionLayout noanimation={false}>
        <Stats />
      </SectionLayout>

      <TextMarquee />

      <TextMarquee bgColor="tertiary" textColor="dark" />
    </>
  );
}
