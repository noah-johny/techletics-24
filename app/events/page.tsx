import Navbar from "@/components/navbar";
import Title from "@/components/title";
import SectionLayout from "@/layouts/section-layout";
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

      {/* <Image
        src={"https://res.cloudinary.com/techletics/image/upload/v1707902073/images/musical-night_iytn2n.png" || "/images/musical-night.png"}
        alt="Pro-Show"
        width={5760}
        height={3468}
        className="w-full"
      /> */}
      <TextMarquee bgColor="primary" />
    </>
  );
}
