import { CustomText } from "@/components/custom";
import { featuredEventList } from "./event-list";
import Link from "next/link";
import Image from "next/image";
import SectionLayout from "@/layouts/section-layout";

const FeaturedEvents = () => {
  return (
    <SectionLayout>
      <div className="flex w-full flex-col items-center justify-center gap-12 py-6 font-primary text-secondary lg:py-12">
        <CustomText title>
          featured&nbsp;<CustomText highlightedTitle>event websites</CustomText>
        </CustomText>
      </div>

      <div className="my-10 flex flex-wrap justify-center">
        {featuredEventList.map((event) => (
          <Link href={event.url} key={event.name} target="_blank">
            <div className="h-72 w-64 px-6 py-3 transition-all duration-200 ease-in hover:scale-125">
              <Image
                className="h-full w-full object-cover grayscale hover:grayscale-0"
                src={event.src}
                alt={event.name}
                width={300}
                height={300}
              />
            </div>
          </Link>
        ))}
      </div>
    </SectionLayout>
  );
};

export default FeaturedEvents;
