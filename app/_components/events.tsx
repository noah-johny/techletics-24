import { EventsCard } from "@/components/cards";

const Events = () => {
  return (
    <div className="flex flex-col justify-center gap-6 py-6 lg:py-12 bg-tertiary font-primary text-secondary lowercase">
      <p className="text-4xl md:text-5xl lg:text-6xl md:w-[90%] leading-tight">
        Witness the{" "}
        <span className="text-primary whitespace-nowrap">Ͳech culͲure</span>{" "}
        extravaganza.
      </p>

      <p className="font-secondary font-regular text-xl md:text-2xl min-w-[300px] flex-1 text-justify">
        Explore, Learn, and Enjoy: The Events of Techletics &apos;24
      </p>

      <div className="w-full flex justify-between">
        <EventsCard />
        <EventsCard />
        <EventsCard />
      </div>
    </div>
  );
};

export default Events;
