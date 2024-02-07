import { About, Hero, Stats } from "@/app/_components";
import TextMarquee from "@/components/marquee";
import SectionLayout from "@/layouts/section-layout";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <section className="bg-hero-img bg-cover bg-no-repeat">
        <SectionLayout navbar float transparent glassMorphism>
          <Navbar />
        </SectionLayout>
        <SectionLayout full transparent>
          <Hero />
        </SectionLayout>
      </section>

      <section className="bg-primary py-2 md:py-4">
        <TextMarquee />
      </section>

      <SectionLayout explorable navigate="/about">
        <About />
      </SectionLayout>

      <SectionLayout noanimation={false}>
        <Stats />
      </SectionLayout>

      <section className="border border-x-0 border-t-0 border-quarternary bg-tertiary py-2 md:py-4">
        <TextMarquee mode="dark" />
      </section>

      <section className="bg-primary py-2 md:py-4">
        <TextMarquee type="secondary" />
      </section>
    </>
  );
}
