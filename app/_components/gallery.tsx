"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface ImageProps {
  src: string;
  width: number;
  height: number;
  className: string;
}

const images: string[] = [
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

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const imageProps: ImageProps = {
    src: images[currentIndex],
    width: 5760,
    height: 4018,
    className:
      "h-full w-full object-cover opacity-30 saturate-0 hover:saturate-100",
  };

  return (
    <div className="flex h-[75vh] w-full items-center justify-center">
      <Image {...imageProps} alt={`Image ${currentIndex + 1}`} />
      <div className="absolute w-2/3 text-center font-primary text-3xl lowercase leading-none tracking-wider text-secondary sm:text-4xl xl:text-6xl">
        GLIMPSE INTO THE memories WE HAVE CREATED.
      </div>
    </div>
  );
};

export default Gallery;
