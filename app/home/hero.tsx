"use client";

import { CountdownWrapper } from "@/ui/components/svg";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Time {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const Hero = () => {
  const targetDate = new Date("2024-04-01");

  const calculateTimeLeft = (targetDate: Date) => {
    const difference = targetDate?.getTime() - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<Time>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  let days = String(timeLeft?.days);
  days?.length < 2 ? (days = days.padStart(2, "0")) : days;
  const hours = String(timeLeft?.hours).padStart(2, "0");
  const minutes = String(timeLeft?.minutes).padStart(2, "0");
  const seconds = String(timeLeft?.seconds).padStart(2, "0");

  return (
    <div className="flex flex-col lg:gap-6 justify-center items-center bg-hero-img bg-no-repeat bg-cover h-[86vh] overflow-hidden">
      <div className="relative w-fit h-fit flex-col text-secondary font-primary lowercase text-wider scale-[0.36] sm:scale-50 md:scale-75 lg:scale-100">
        <p className="text-7xl w-full text-center">ILLUMINⱭͲe. IGNIͲЄ.</p>
        <Image
          src="/images/techletics-sticker.svg"
          width={75}
          height={70}
          alt="Techletics Sticker"
          priority
          className="absolute right-60 ml-4 top-8 rotate-[6deg] left-150"
        />
        <div className="flex gap-2 items-baseline">
          <p className="font-primary lowercase text-big leading-none">
            INSPIRς
          </p>
          <p className="font-primary lowercase text-center text-4xl">🌞</p>
        </div>
      </div>

      {/* Countdown */}
      <div className="relative w-[632px] text-secondary font-secondary hidden mt-12 mb-24 md:flex md:items-center md:justify-center md:scale-75 lg:scale-100">
        {/* Timer */}
        <div className="absolute flex gap-4 left-10 w-fit">
          <div className="flex flex-col text-center w-fit -space-y-1">
            <p className="font-bold text-6xl">{days}</p>
            <p className="font-medium text-md text-primary">DAYS</p>
          </div>
          <p className="font-bold text-6xl">:</p>
          <div className="flex flex-col text-center w-fit -space-y-1">
            <p className="font-bold text-6xl">{hours}</p>
            <p className="font-medium text-md text-primary">HOURS</p>
          </div>
          <p className="font-bold text-6xl">:</p>
          <div className="flex flex-col text-center w-fit -space-y-1">
            <p className="font-bold text-6xl">{minutes}</p>
            <p className="font-medium text-md text-primary">MINUTES</p>
          </div>
          <p className="font-bold text-6xl">:</p>
          <div className="flex flex-col text-center w-fit -space-y-1">
            <p className="font-bold text-6xl">{seconds}</p>
            <p className="font-medium text-md text-primary">SECONDS</p>
          </div>
        </div>

        {/* Date */}
        <div className="absolute flex flex-col right-4 text-center w-fit">
          <p className="font-bold text-4xl text-primary">01-03</p>
          <div className="flex w-fit">
            <p className="font-extrabold text-md">April</p>
            <p className="font-medium text-md">, 2024</p>
          </div>
        </div>

        <div className="absolute">
          <CountdownWrapper />
        </div>
      </div>
    </div>
  );
};

export default Hero;
