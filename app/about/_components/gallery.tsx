"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function PhotoGallery() {
  const images = [
    "/images/legacy_image_1.jpg",
    "/images/legacy_image_1.jpg",
    "/images/legacy_image_1.jpg",
    "/images/legacy_image_2.jpg",
    "/images/legacy_image_2.jpg",
    "/images/legacy_image_2.jpg",
  ];
  const [currentBatchStartIndex, setCurrentBatchStartIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBatchStartIndex((prevIndex) => (prevIndex + 3) % images.length);
    }, 3000); // Change image batch every 3 seconds

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {images
        .slice(currentBatchStartIndex, currentBatchStartIndex + 3)
        .map((image, index) => (
          <div
            key={index}
            className="col-span-1 transition duration-500 ease-in-out"
          >
            <div className="saturate-0 transition duration-500 ease-in-out hover:saturate-100">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                width={500}
                height={300}
              />
            </div>
          </div>
        ))}
    </div>
  );
}
