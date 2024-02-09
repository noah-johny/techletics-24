import { CustomText } from "@/components/custom";
import SectionLayout from "@/layouts/section-layout";

const Date = () => {
  return (
    <SectionLayout>
      <div className="flex flex-col items-center justify-center gap-4 py-6 font-primary text-secondary sm:flex-row sm:gap-12 lg:py-12 ">
        <CustomText title>
          last date&nbsp;
          <span className="whitespace-nowrap">to register</span>
        </CustomText>
        <div className="mb-1 flex h-fit w-full items-center justify-center rounded-full bg-primary py-2 sm:max-w-80 sm:py-4">
          <span className="text-xl text-tertiary sm:text-2xl">
            <span className="font-secondary font-extrabold">05th&nbsp;</span>
            february
          </span>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Date;
