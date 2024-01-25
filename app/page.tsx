import { Hero } from "@/app/home";
import Section from "@/layouts/section";

export default function Home() {
  return (
    <>
      <Section full>
        <Hero />
      </Section>

      <Section full>
        <Hero />
      </Section>
    </>
  );
}
