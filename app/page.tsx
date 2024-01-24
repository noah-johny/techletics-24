import { Hero } from "@/app/home";
import Section from "@/ui/components/layouts/section";

export default function Home() {
  return (
    <>
      <Section>
        <Hero />
      </Section>

      <Section>
        <Hero />
      </Section>
    </>
  );
}
