"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { images } from "./images";

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-[75vh] w-full items-center justify-center">
      <Image
        src={images[currentIndex].src}
        width={5760}
        height={4018}
        alt={`Image ${currentIndex + 1}`}
        loading="lazy"
        className="h-full w-full object-cover opacity-30 saturate-0 hover:saturate-100"
      />

      <div className="leading-0 absolute flex flex-col text-center font-primary text-3xl lowercase tracking-wider text-secondary sm:text-4xl md:text-5xl lg:text-6xl">
        GLIMPSE INTO
        <span className="sm:whitespace-nowrap">
          THE mem<span className="opacity-0">o</span>ries we
          <Image
            src="/images/gallery-sticker.svg"
            width={132}
            height={128}
            alt={"Techletics Sticker"}
            priority
            className="absolute -top-4 left-[78px] scale-[26%] sm:-top-2 sm:left-[106px] sm:scale-[32%] md:left-[164px] md:top-1 md:scale-[40%] lg:left-[222px] lg:top-[22px] lg:scale-[52%]"
          />
        </span>
        HAVE CREATED.
      </div>
    </div>
  );
};

export default Gallery;
