import { About, Hero, Stats } from "@/app/_components";
import TextMarquee from "@/components/marquee";
import Section from "@/layouts/section";
import Events from "./_components/events";

export default function Home() {
  return (
    <>
      <Section full>
        <Hero />
      </Section>

      <section className="bg-primary py-2 md:py-4">
        <TextMarquee />
      </section>

      <Section explorable navigate="/about">
        <About />
      </Section>

      <Section noanimation={false}>
        <Stats />
      </Section>

      <Section explorable>
        <Events />
      </Section>

      <section className="bg-tertiary py-2 md:py-4 border-quarternary border border-x-0 border-t-0">
        <TextMarquee mode="dark" />
      </section>

      <section className="bg-primary py-2 md:py-4">
        <TextMarquee type="secondary" />
      </section>
    </>
  );
}
