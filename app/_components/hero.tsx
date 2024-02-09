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
  });

  let days = String(timeLeft?.days);
  days?.length < 2 ? (days = days.padStart(2, "0")) : days;
  const hours = String(timeLeft?.hours).padStart(2, "0");
  const minutes = String(timeLeft?.minutes).padStart(2, "0");
  const seconds = String(timeLeft?.seconds).padStart(2, "0");

  return (
    <div className="3xl:h-fit 3xl:scale-150 3xl:py-96 flex h-screen min-h-[456px] flex-col items-center justify-center overflow-hidden lg:gap-6">
      {/* Hero Text */}
      <div className="text-wider relative h-fit w-fit scale-[0.36] flex-col font-primary lowercase text-secondary sm:scale-50 md:scale-75 lg:scale-100">
        <p className="w-full text-center text-7xl">ILLUMINⱭͲe. IGNIͲЄ.</p>
        <Image
          src="/images/techletics-sticker.svg"
          width={75}
          height={70}
          alt="Techletics Sticker"
          priority
          className="left-150 absolute right-60 top-8 ml-4 rotate-[6deg]"
        />
        <div className="flex items-baseline gap-2">
          <p className="font-primary text-big lowercase leading-none">
            INSPIRς
          </p>
          <p className="text-center font-primary text-4xl lowercase">🌞</p>
        </div>
      </div>

      {/* Countdown */}
      <section className="relative mt-12 hidden w-[632px] items-center justify-center font-secondary text-secondary sm:flex sm:scale-75 lg:scale-100">
        {/* Timer */}
        <div className="absolute left-10 flex w-fit gap-4">
          <div className="flex w-fit flex-col -space-y-1 text-center">
            <p className="text-6xl font-bold">{days}</p>
            <p className="text-md font-medium text-primary">DAYS</p>
          </div>
          <p className="text-6xl font-bold">:</p>
          <div className="flex w-fit flex-col -space-y-1 text-center">
            <p className="text-6xl font-bold">{hours}</p>
            <p className="text-md font-medium text-primary">HOURS</p>
          </div>
          <p className="text-6xl font-bold">:</p>
          <div className="flex w-fit flex-col -space-y-1 text-center">
            <p className="text-6xl font-bold">{minutes}</p>
            <p className="text-md font-medium text-primary">MINUTES</p>
          </div>
          <p className="text-6xl font-bold">:</p>
          <div className="flex w-fit flex-col -space-y-1 text-center">
            <p className="text-6xl font-bold">{seconds}</p>
            <p className="text-md font-medium text-primary">SECONDS</p>
          </div>
        </div>

        {/* Date */}
        <div className="absolute right-7 flex w-fit flex-col text-center">
          <p className="text-6xl font-bold text-primary">{eventDay}</p>
          <p className="text-md flex w-fit">
            <span className="text-md font-extrabold">
              {eventDay === "01" ? "MAR" : "FEB"}
            </span>
            <span className="text-md font-medium">, 2024</span>
          </p>
        </div>
        <div className="absolute">
          <CountdownWrapper />
        </div>
      </section>

      {/* Countdown */}
      <section className="relative -mt-28 flex h-[496px] w-[275px] scale-75 items-center justify-center font-secondary text-secondary sm:hidden">
        {/* Timer */}
        <div className="absolute left-11 top-14 flex w-fit flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex w-fit flex-col -space-y-1 text-center">
              <p className="text-6xl font-bold">{days}</p>
              <p className="text-md font-medium text-primary">DAYS</p>
            </div>
            <p className="text-6xl font-bold">:</p>
            <div className="flex w-fit flex-col -space-y-1 text-center">
              <p className="text-6xl font-bold">{hours}</p>
              <p className="text-md font-medium text-primary">HOURS</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex w-fit flex-col -space-y-1 text-center">
              <p className="text-6xl font-bold">{minutes}</p>
              <p className="text-md font-medium text-primary">MINUTES</p>
            </div>
            <p className="text-6xl font-bold">:</p>
            <div className="flex w-fit flex-col -space-y-1 text-center">
              <p className="text-6xl font-bold">{seconds}</p>
              <p className="text-md font-medium text-primary">SECONDS</p>
            </div>
          </div>
        </div>

        {/* Date */}
        <div className="absolute bottom-10 flex w-fit flex-col justify-center text-center">
          <p className="text-8xl font-bold text-primary">{eventDay}</p>
          <p className="mx-auto flex w-fit text-center text-2xl">
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
