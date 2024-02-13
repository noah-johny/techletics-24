import Navbar from "@/components/navbar";
import Title from "@/components/title";
import SectionLayout from "@/layouts/section-layout";
import EventList from "./_components/EventList";
import Image from "next/image";
import TextMarquee from "@/components/marquee";

export default function EventsPage() {
  return (
    <>
      <SectionLayout navbar float transparent glassMorphism>
        <Navbar />
      </SectionLayout>

      <Title title="events" />

      <EventList />

      <Image
        src={"/images/proshow.png"}
        alt="Pro-Show"
        width={5760}
        height={3468}
        className="z-10 -mb-6 w-full"
      />
      <TextMarquee textColor="dark" bgColor="tertiary" />
    </>
  );
}
