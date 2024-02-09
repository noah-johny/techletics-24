import { CustomText } from "@/components/custom";

const Guidelines = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-12 py-6 font-primary text-secondary lg:py-12">
      <CustomText title>
        submission&nbsp;<CustomText highlightedTitle>guidelines</CustomText>
      </CustomText>

      <div className="mb-6 flex flex-col gap-6 sm:mb-12 sm:items-center lg:mb-0">
        <CustomText description>
          <span className="justify-center">
            <span className="block font-normal tracking-widest text-primary sm:inline">
              ✺✺✺&nbsp;&nbsp;
            </span>
            Abstract can contain a&nbsp;
            <CustomText highlightedDescription>
              maximum of 150 words
              <span className="hidden font-normal tracking-widest text-primary sm:inline">
                &nbsp;&nbsp;✺✺✺
              </span>
            </CustomText>
          </span>
        </CustomText>

        <CustomText description>
          <span className="justify-center">
            <span className="block font-normal tracking-widest text-primary sm:inline">
              ✺✺✺&nbsp;&nbsp;
            </span>
            Abstract should be in&nbsp;
            <CustomText highlightedDescription>
              IEEE format
              <span className="hidden font-normal tracking-widest text-primary sm:inline">
                &nbsp;&nbsp;✺✺✺
              </span>
            </CustomText>
          </span>
        </CustomText>
      </div>

      <div className="flex w-fit justify-center rounded-xl border border-primary bg-primary bg-opacity-10 px-6 py-2 sm:min-w-80 sm:px-12 sm:py-4">
        <span className="text-center text-xl lowercase tracking-wider text-primary sm:text-2xl">
          <span>PS:&nbsp;</span>
          selected paper will be published in conference proceedings
        </span>
      </div>
    </div>
  );
};

export default Guidelines;
