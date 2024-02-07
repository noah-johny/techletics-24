import { EventsCard } from "@/components/cards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Events = () => {
  return (
    <div className="flex flex-col justify-center gap-6 bg-tertiary py-6 font-primary text-secondary lg:py-12">
      <p className="flex flex-wrap text-3xl lowercase leading-tight tracking-wide sm:text-4xl md:text-5xl lg:max-w-[95%] lg:text-6xl xl:max-w-[80%]">
        Witness the&nbsp;
        <span className="whitespace-nowrap text-primary">
          Ͳech-culͲure&nbsp;
        </span>
        extravaganza.
      </p>

      <p className="font-regular text-md lg:2xl xl:3xl text-justify font-secondary md:text-xl">
        Explore, Learn, and Enjoy: The Events of&nbsp;
        <span className="whitespace-nowrap">Techletics &apos;24</span>
      </p>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="mt-4 w-full md:mt-12"
      >
        <CarouselContent className="m-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center md:basis-1/2 xl:basis-1/3"
            >
              <div>
                <EventsCard />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <p className="text-md flex-1 text-justify font-secondary font-medium text-secondary opacity-30">
        <sup>*</sup>
        Hover to see more details
      </p>
    </div>
  );
};

export default Events;
