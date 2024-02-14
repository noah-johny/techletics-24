import Navbar from "@/components/navbar";
import Title from "@/components/title";
import SectionLayout from "@/layouts/section-layout";
import Image from "next/image";
import TextMarquee from "@/components/marquee";
import { Events } from "./_components";

export default function EventsPage() {
  return (
    <>
      <SectionLayout navbar float transparent glassMorphism>
        <Navbar />
      </SectionLayout>

      <Title title="events" />

      <Events />

      <Image
        src={""||"/images/musical-night.png"}
        alt="Pro-Show"
        width={5760}
        height={3468}
        className="w-full"
      />
      <TextMarquee textColor="dark" bgColor="tertiary" />
    </>
  );
}
