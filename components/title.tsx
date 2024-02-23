import SectionLayout from "@/layouts/section-layout";
import Image from "next/image";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <SectionLayout>
      <div className="flex flex-wrap items-center justify-between py-2 font-primary text-4xl lowercase tracking-wide text-secondary sm:text-5xl md:text-7xl lg:mt-8 xl:mt-0">
        <span className="mr-4">{title}</span>
        <div className="flex gap-1">
          <Image
            src="/icons/barcode.svg"
            width={424}
            height={128}
            alt="Barcode"
            priority
            className="hidden h-[88px] w-auto 2xl:flex 2xl:h-24"
          />
          <Image
            src="/icons/barcode.svg"
            width={424}
            height={128}
            alt="Barcode"
            priority
            className="hidden w-auto sm:h-20 md:flex xl:h-[88px] 2xl:h-24"
          />
          <Image
            src="/icons/barcode.svg"
            width={424}
            height={128}
            alt="Barcode"
            priority
            className="h-12 w-auto sm:h-20 xl:h-[88px] 2xl:h-24"
          />
        </div>
      </div>
    </SectionLayout>
  );
};

export default Title;
