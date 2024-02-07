import SectionLayout from "@/layouts/section-layout";
import Image from "next/image";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <section className="mt-[72px] sm:mt-[88px] xl:mt-[136px]">
      <SectionLayout>
        <div className="flex flex-wrap items-center justify-between py-2 font-primary text-4xl lowercase tracking-wide text-secondary sm:text-5xl md:text-7xl xl:text-[112px]">
          <span className="mr-6">{title}</span>
          <div className="flex gap-1">
            <Image
              src="/icons/barcode.svg"
              width={424}
              height={128}
              alt="Barcode"
              priority
              className="hidden h-28 w-auto 2xl:flex"
            />
            <Image
              src="/icons/barcode.svg"
              width={424}
              height={128}
              alt="Barcode"
              priority
              className="hidden w-auto sm:h-20 md:flex xl:h-28"
            />
            <Image
              src="/icons/barcode.svg"
              width={424}
              height={128}
              alt="Barcode"
              priority
              className="h-12 w-auto sm:h-20 xl:h-28"
            />
          </div>
        </div>
      </SectionLayout>
    </section>
  );
};

export default Title;
