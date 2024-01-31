"use client";

import { CountdownWrapper } from "@/components/svg";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Time {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const Hero = () => {
  const targetDate = new Date("2024-02-28");
  const eventDays = ["28", "29", "01"];

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

  const [i, setI] = useState<number>(0);
  const [eventDay, setEventDay] = useState<string>(eventDays[0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
      setEventDay(eventDays[i]);
      setI((prevI) => (prevI + 1) % eventDays.length);
    }, 1000);

    return () => clearTimeout(timer);
  }, [i]);

  let days = String(timeLeft?.days);
  days?.length < 2 ? (days = days.padStart(2, "0")) : days;
  const hours = String(timeLeft?.hours).padStart(2, "0");
  const minutes = String(timeLeft?.minutes).padStart(2, "0");
  const seconds = String(timeLeft?.seconds).padStart(2, "0");

  return (
    <div className="flex flex-col min-h-[456px] lg:gap-6 justify-center items-center bg-hero-img bg-no-repeat bg-cover h-screen overflow-hidden bg-tertiary">
      {/* Hero Text */}
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
      <section className="relative w-[632px] text-secondary font-secondary hidden mt-12 sm:flex items-center justify-center sm:scale-75 lg:scale-100">
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
        <div className="absolute flex flex-col right-7 text-center w-fit">
          <p className="font-bold text-6xl text-primary">{eventDay}</p>
          <p className="flex w-fit text-md">
            <span className="font-extrabold text-md">
              {eventDay === "01" ? "MAR" : "FEB"}
            </span>
            <span className="font-medium text-md">, 2024</span>
          </p>
        </div>
        <div className="absolute">
          <CountdownWrapper />
        </div>
      </section>

      {/* Countdown */}
      <section className="relative w-[275px] h-[496px] text-secondary font-secondary -mt-28 flex sm:hidden items-center justify-center scale-75">
        {/* Timer */}
        <div className="absolute flex flex-col gap-4 left-11 top-14 w-fit">
          <div className="flex gap-4">
            <div className="flex flex-col text-center w-fit -space-y-1">
              <p className="font-bold text-6xl">{days}</p>
              <p className="font-medium text-md text-primary">DAYS</p>
            </div>
            <p className="font-bold text-6xl">:</p>
            <div className="flex flex-col text-center w-fit -space-y-1">
              <p className="font-bold text-6xl">{hours}</p>
              <p className="font-medium text-md text-primary">HOURS</p>
            </div>
          </div>

          <div className="flex gap-4">
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
        </div>

        {/* Date */}
        <div className="absolute flex flex-col justify-center text-center w-fit bottom-10">
          <p className="font-bold text-8xl text-primary">{eventDay}</p>
          <p className="flex w-fit text-center mx-auto text-2xl">
            <span className="font-extrabold">
              {eventDay === "01" ? "MAR" : "FEB"}
            </span>
            <span className="font-medium">, 2024</span>
          </p>
        </div>
        <div className="absolute">
          <CountdownWrapper size="small" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
