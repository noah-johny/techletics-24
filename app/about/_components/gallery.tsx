"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type ImageBatch = string[];

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
  "/images/legacy/11.jpg",
  "/images/legacy/12.jpg",
  "/images/legacy/13.jpg",
  "/images/legacy/14.jpg",
  "/images/legacy/15.jpg",
  "/images/legacy/16.jpg",
  "/images/legacy/17.jpg",
  "/images/legacy/18.jpg",
  "/images/legacy/19.jpg",
  "/images/legacy/20.jpg",
  "/images/legacy/21.jpg",
  "/images/legacy/22.jpg",
  "/images/legacy/23.jpg",
  "/images/legacy/24.jpg",
  "/images/legacy/25.jpg",
  "/images/legacy/26.jpg",
  "/images/legacy/27.jpg",
  "/images/legacy/28.jpg",
];

const getRandomIndexes = (max: number, count: number): number[] => {
  const indexes = Array.from({ length: max }, (_, i) => i);
  const shuffledIndexes = indexes.sort(() => Math.random() - 0.5);
  return shuffledIndexes.slice(0, count);
};

const PhotoGallery: React.FC = () => {
  const [currentBatch, setCurrentBatch] = useState<ImageBatch>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBatch((prevBatch) => {
        const randomIndexes = getRandomIndexes(images.length, 3);
        const randomImages = randomIndexes.map((index) => images[index]);
        return randomImages;
      });
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {currentBatch.map((image, index) => (
        <div
          key={index}
          className="col-span-1 transition duration-500 ease-in-out"
        >
          <div className="saturate-0 transition duration-500 ease-in-out hover:saturate-100">
            <Image
              loading="lazy"
              src={image}
              alt={`Image ${index + 1}`}
              width={500}
              height={300}
              className="h-96 w-full transform object-cover transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
