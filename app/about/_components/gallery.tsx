"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function PhotoGallery() {
  const images = ["/images/legacy_1.png","/images/legacy_1.png","/images/legacy_1.png", "/images/legacy_2.png","/images/legacy_2.png","/images/legacy_2.png",];
  const [currentBatchStartIndex, setCurrentBatchStartIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBatchStartIndex((prevIndex) => (prevIndex + 3) % images.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.slice(currentBatchStartIndex, currentBatchStartIndex + 3).map((image, index) => (
        <div key={index} className="col-span-1 transition duration-500 ease-in-out">
          <div className="filter grayscale hover:grayscale-0">
            <Image src={image} alt={`Image ${index + 1}`} width={500} height={300} />
          </div>
        </div>
      ))}
    </div>
  );
}