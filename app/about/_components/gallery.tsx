"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { images } from "@/app/_components/images";

type ImageBatch = { src: string }[];

const getRandomIndexes = (max: number, count: number): number[] => {
  const indexes = Array.from({ length: max }, (_, i) => i);
  const shuffledIndexes = indexes.sort(() => Math.random() - 0.5);
  return shuffledIndexes.slice(0, count);
};

const Gallery: React.FC = () => {
  const [currentBatch, setCurrentBatch] = useState<ImageBatch>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBatch((prevBatch) => {
        const randomIndexes = getRandomIndexes(images.length, 3);
        const randomImages = randomIndexes.map((index) => images[index]);
        return randomImages;
      });
      setIsLoading(false);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {isLoading ? (
        <>
          <div className="animate-pulse bg-gray-200 h-96 w-full"></div>
          <div className="animate-pulse bg-gray-200 h-96 w-full"></div>
          <div className="animate-pulse bg-gray-200 h-96 w-full"></div>
        </>
      ) : (
        currentBatch.map((image, index) => (
          <div
            key={index}
            className="col-span-1 transition duration-500 ease-in-out"
          >
            <div className="saturate-0 transition duration-500 ease-in-out hover:saturate-100">
              <Image
                src={image.src}
                alt={`Image ${index + 1}`}
                width={500}
                height={300}
                className="h-96 w-full scale-95 transform object-cover transition-all duration-500 hover:scale-100"
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Gallery;
