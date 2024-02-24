import { CommitteeCard } from "@/components/cards";
import { CustomText } from "@/components/custom";
import SectionLayout from "@/layouts/section-layout";
import { committees } from "./committees";

export default function Committee() {
  return (
    <>
      {committees.map((item, index) => (
        <SectionLayout key={index}>
          <div className="flex flex-col items-center justify-center py-6 lg:py-12">
            <CustomText title>
              <CustomText highlightedTitle>{item.title}</CustomText>
              &nbsp;committee
            </CustomText>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
              {item.details.map((info, index) => (
                <CommitteeCard info={info} key={index} />
              ))}
            </div>
          </div>
        </SectionLayout>
      ))}
    </>
  );
}
