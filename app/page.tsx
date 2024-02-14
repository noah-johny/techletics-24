import { About, Gallery, Hero, Stats } from "@/app/_components";
import TextMarquee from "@/components/marquee";
import SectionLayout from "@/layouts/section-layout";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function HomePage() {
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

      <TextMarquee bgColor="tertiary" textColor="dark" />

      <SectionLayout explorable full imageContent navigate="/about#gallery">
        <Gallery />
      </SectionLayout>

      <section className="w-full">
        <Image
          src={
            "https://res.cloudinary.com/techletics/image/upload/v1707888215/images/b2hw0m7pr72xzfyhnmpc.png"
          }
          alt="Techletics Logo Construction"
          width={5760}
          height={4018}
          priority
          className="h-full w-full object-cover"
        />
      </section>

      <TextMarquee type="secondary" />
    </>
  );
}
