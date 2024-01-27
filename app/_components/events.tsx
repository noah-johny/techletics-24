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
    <div className="flex flex-col justify-center gap-6 py-6 lg:py-12 bg-tertiary font-primary text-secondary">
      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:max-w-[95%] xl:max-w-[80%] leading-tight tracking-wide lowercase flex-wrap flex">
        Witness the&nbsp;
        <span className="text-primary whitespace-nowrap">
          Ͳech-culͲure&nbsp;
        </span>
        extravaganza.
      </p>

      <p className="font-secondary font-regular text-md md:text-xl lg:2xl xl:3xl text-justify">
        Explore, Learn, and Enjoy: The Events of&nbsp;
        <span className="whitespace-nowrap">Techletics &apos;24</span>
      </p>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full mt-4 md:mt-12"
      >
        <CarouselContent className="m-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 xl:basis-1/3 flex items-center justify-center"
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

      <p className="text-secondary font-secondary font-medium text-md flex-1 text-justify opacity-30">
        <sup>*</sup>
        Hover to see more details
      </p>
    </div>
  );
};

export default Events;
