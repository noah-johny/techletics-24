"use client";

import Image from "next/image";
import { CustomLink } from "../custom";

interface Details {
  role: string;
  name: string;
  localUrl: string;
  cloudUrl: string;
  profileUrl?: string;
}

export default function CommitteeCard({ info }: { info: Details }) {
  function handleFallback(e: any) {
    e.target.src = info.localUrl;
  }

  return info.profileUrl ? (
    <CustomLink href={info.profileUrl} target="_blank">
      <div className="aspect-[0.76] w-[200px] bg-black saturate-0 transition duration-200 ease-in hover:bg-primary hover:saturate-100 md:w-[240px] lg:w-[260px]">
        <div className="relative h-full w-full">
          <Image
            alt="card"
            src={info.cloudUrl || info.localUrl}
            quality={0}
            width={275}
            height={360}
            className="block h-full w-full object-contain"
            onError={handleFallback}
            priority
            fetchPriority="high"
          />
          <div className="absolute bottom-0 flex w-full flex-col items-center justify-center bg-gradient-to-t from-black via-black to-transparent p-3 tracking-wide transition delay-200">
            <span className="text-md font-primary text-secondary sm:text-lg">
              {info.name}
            </span>
            <span className="text-md text-center font-secondary capitalize text-primary sm:text-lg">
              {info.role}
            </span>
          </div>
        </div>
      </div>
    </CustomLink>
  ) : (
    <div className="aspect-[0.76] w-[200px] bg-black saturate-0 transition duration-200 ease-in hover:bg-primary hover:saturate-100 md:w-[240px] lg:w-[260px]">
      <div className="relative h-full w-full">
        <Image
          alt="card"
          src={info.cloudUrl || info.localUrl}
          quality={0}
          width={275}
          height={360}
          className="block h-full w-full object-contain"
          onError={handleFallback}
          priority
          fetchPriority="high"
        />
        <div className="absolute bottom-0 flex w-full flex-col items-center justify-center bg-gradient-to-t from-black via-black to-transparent p-3 tracking-wide transition delay-200">
          <span className="text-md font-primary text-secondary sm:text-lg">
            {info.name}
          </span>
          <span className="text-md text-center font-secondary capitalize text-primary sm:text-lg">
            {info.role}
          </span>
        </div>
      </div>
    </div>
  );
}
