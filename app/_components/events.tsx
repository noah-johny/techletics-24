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
      <p className="text-4xl md:text-5xl lg:text-6xl md:w-[90%] leading-tight tracking-wide lowercase ">
        Witness the{" "}
        <span className="text-primary whitespace-nowrap">Ͳech-culͲure</span>
        <br /> extravaganza.
      </p>

      <p className="font-secondary font-regular text-xl md:text-2xl min-w-[300px] flex-1 text-justify">
        Explore, Learn, and Enjoy: The Events of Techletics &apos;24
      </p>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
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

      <div>
        <p className="font-secondary font-regular text-xs  min-w-[300px] flex-1 text-justify">
          <sup>*</sup>
          Hover to see more details
        </p>
      </div>
    </div>
  );
};

export default Events;
