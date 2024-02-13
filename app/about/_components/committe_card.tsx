import Image from "next/image";

interface PositionInfo {
  position: string;
  name: string;
  img: string;
}

export default function Committe_card({ info }: { info: PositionInfo }) {
  return (
    <div className="aspect-[4/5] w-[200px] bg-black saturate-0 transition duration-200 ease-in hover:bg-primary hover:saturate-100 md:w-[240px] lg:w-[260px]">
      <div className="relative h-full w-full">
        <Image
          alt="card"
          src={info.img}
          width={275}
          height={373}
          className="block h-full w-full object-contain"
        />
        <div className="absolute bottom-0 flex w-full flex-col items-center justify-center bg-gradient-to-t from-black via-black to-transparent p-3 tracking-wide transition delay-200">
          <span className="text-md font-primary sm:text-lg">{info.name}</span>
          <span className="text-md text-center font-secondary capitalize text-primary sm:text-lg">
            {info.position}
          </span>
        </div>
      </div>
    </div>
  );
}
