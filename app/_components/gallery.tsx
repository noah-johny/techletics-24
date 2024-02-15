"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface ImageProps {
  src: string;
  width: number;
  height: number;
  className: string;
}

type ImageBatch = { localUrl: string; cloudUrl: string }[];
const images: ImageBatch = [
  {
    localUrl: "/images/legacy/1.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888565/legacy/jbwh0rconpcx29krfksy.jpg",
  },
  {
    localUrl: "/images/legacy/2.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888565/legacy/lkk5prvkjj3sdya5xwez.jpg",
  },
  {
    localUrl: "/images/legacy/3.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888564/legacy/hhzs4kcbygppm1hqtgi8.jpg",
  },
  {
    localUrl: "/images/legacy/4.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888564/legacy/a7cv72abby8929zwln0x.jpg",
  },
  {
    localUrl: "/images/legacy/5.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888564/legacy/aetdgizesmjz3fqqhykq.jpg",
  },
  {
    localUrl: "/images/legacy/6.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888563/legacy/lm2pxvyj4zsszbjzwc78.jpg",
  },
  {
    localUrl: "/images/legacy/7.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888563/legacy/dsaaafy8zt75hyzlwo39.jpg",
  },
  {
    localUrl: "/images/legacy/8.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888544/legacy/xhylrduyzwm0tyostdcg.jpg",
  },
  {
    localUrl: "/images/legacy/9.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888519/legacy/bnvhtfkndmhkbkczqbnx.jpg",
  },
  {
    localUrl: "/images/legacy/10.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888493/legacy/ndljdnuxttesil8iruk7.jpg",
  },
  {
    localUrl: "/images/legacy/11.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888466/legacy/ifr9ofoylqporxoiurdq.jpg",
  },
  {
    localUrl: "/images/legacy/12.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888440/legacy/xfvtzxp3a0i2itqlvacz.jpg",
  },
  {
    localUrl: "/images/legacy/13.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888415/legacy/onay5omlctlwplqdkaca.jpg",
  },
  {
    localUrl: "/images/legacy/14.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888389/legacy/hj1ecgptx9xinga5x4r7.jpg",
  },
  {
    localUrl: "/images/legacy/15.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888362/legacy/v7vvlwixxrfjbkfj86fx.jpg",
  },
  {
    localUrl: "/images/legacy/16.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888337/legacy/ujrrj6oaosc9hxwicesk.jpg",
  },
  {
    localUrl: "/images/legacy/17.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888311/legacy/rifvutbzmdk3hukfflu3.jpg",
  },
  {
    localUrl: "/images/legacy/18.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888284/legacy/bfzenkuiemhk6pcnnjsn.jpg",
  },
  {
    localUrl: "/images/legacy/19.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888277/legacy/igyd8tskpkpucnvgvnxf.jpg",
  },
  {
    localUrl: "/images/legacy/20.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888276/legacy/aj2h9pbhyi6xtqvxl2wg.jpg",
  },
  {
    localUrl: "/images/legacy/21.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888276/legacy/sb6oklcnezwcc9ppdkle.jpg",
  },
  {
    localUrl: "/images/legacy/22.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888276/legacy/mnmtgdod8mm8tbrwgfmw.jpg",
  },
  {
    localUrl: "/images/legacy/23.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888276/legacy/hzhjv5xdcsqgcjgd9apc.jpg",
  },
  {
    localUrl: "/images/legacy/24.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888275/legacy/wmyvouot6vz3nueodk9e.jpg",
  },
  {
    localUrl: "/images/legacy/25.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888275/legacy/jf53slvqw9ttsa0bhste.jpg",
  },
  {
    localUrl: "/images/legacy/26.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888274/legacy/vm8nh5svhuusk2h6t40h.jpg",
  },
  {
    localUrl: "/images/legacy/27.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888274/legacy/thwbqe8vdvrcempke4ki.jpg",
  },
  {
    localUrl: "/images/legacy/28.jpg",
    cloudUrl:
      "https://res.cloudinary.com/techletics/image/upload/v1707888274/legacy/aqtrwchxxry8micwudvn.jpg",
  },
];

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
        src={images[currentIndex].cloudUrl || images[currentIndex].localUrl}
        width={5760}
        height={4018}
        alt={`Image ${currentIndex + 1}`}
        loading="lazy"
        className="h-full w-full object-cover opacity-30 saturate-0 hover:saturate-100"
      />

      <div className="leading-0 absolute flex flex-col text-center font-primary text-xl lowercase tracking-wider text-secondary sm:text-3xl md:text-4xl md:leading-10 xl:text-6xl">
        GLIMPSE INTO&nbsp;
        <span className="sm:whitespace-nowrap">
          THE mem<span className="opacity-0">o</span>ries we&nbsp;
          <Image
            src="/icons/techletics-sticker-2.png"
            width={57}
            height={55}
            alt={"Techletics Sticker"}
            priority
            className="absolute left-[68px] top-3 scale-[30%] sm:left-[116px] sm:top-6 sm:scale-[56%] md:left-36 md:top-7 md:scale-[66%] lg:left-36 lg:top-7 lg:scale-50 xl:left-[260px] xl:top-[57px] xl:scale-100"
          />
        </span>
        HAVE CREATED.
      </div>
    </div>
  );
};

export default Gallery;
