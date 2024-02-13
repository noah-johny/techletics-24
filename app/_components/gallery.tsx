"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Gallery = () => {
  const images = [
    "/images/legacy/1.jpg",
    "/images/legacy/2.jpg",
    "/images/legacy/3.jpg",
    "/images/legacy/4.jpg",
    "/images/legacy/5.jpg",
    "/images/legacy/6.jpg",
    "/images/legacy/7.jpg",
    "/images/legacy/8.jpg",
    "/images/legacy/9.jpg",
    "/images/legacy/10.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-[75vh] w-full items-center justify-center">
      <Image
        src={images[currentIndex]}
        alt="Gallery Image"
        width={5760}
        height={4018}
        className="h-full w-full object-cover opacity-30 saturate-0 hover:saturate-100"
      />
      <div className="absolute w-2/3 text-center font-primary text-3xl lowercase leading-none tracking-wider text-secondary sm:text-4xl xl:text-6xl">
        GLIMPSE INTO THE memories WE HAVE CREATED.
      </div>
    </div>
  );
};

export default Gallery;
