"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full content-center">
      <div className="flex-col w-fit h-fit m-auto text-secondary font-primary lowercase text-wider">
        <p className="text-7xl w-fit bg-red-500">ILLUMINⱭͲe. IGNIͲЄ.</p>

        <Image
          src="/images/techletics-sticker.svg"
          width={56}
          height={56}
          alt="Techletics Sticker"
          priority
        />

        <div className="flex gap-2 items-baseline w-fit h-fit bg-green-500">
          <p className="font-primary lowercase text-big leading-none">
            INSPIRς
          </p>
          <p className="font-primary lowercase text-center text-2xl h-fit">
            🌞
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
