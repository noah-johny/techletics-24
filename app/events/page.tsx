import Navbar from "@/components/navbar";
import Title from "@/components/title";
import SectionLayout from "@/layouts/section-layout";
import TextMarquee from "@/components/marquee";
import { Events, FeaturedEvents } from "./_components";

export default function EventsPage() {
  return (
    <>
      <SectionLayout navbar float transparent glassMorphism>
        <Navbar />
      </SectionLayout>

      <div className="mt-[72px] sm:mt-[88px] xl:mt-24"></div>
      <Title title="events" />

      <Events />
      <FeaturedEvents />

      <TextMarquee bgColor="primary" />
    </>
  );
}
