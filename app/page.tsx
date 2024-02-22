import { About, Gallery, Hero, Stats } from "@/app/_components";
import TextMarquee from "@/components/marquee";
import SectionLayout from "@/layouts/section-layout";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <section className="w-full bg-hero-img bg-cover bg-no-repeat">
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

      <TextMarquee bgColor="tertiary" textColor="dark" />

      <SectionLayout explorable full imageContent navigate="/about#gallery">
        <Gallery />
      </SectionLayout>

      <section className="w-full">
        <Image
          src={"/images/logo-construction.svg"}
          alt="Techletics Logo Construction"
          width={5760}
          height={4018}
          priority
        />
      </section>

      <TextMarquee type="secondary" />
    </>
  );
}
