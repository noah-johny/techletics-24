import { CustomText } from "@/components/custom";
import SectionLayout from "@/layouts/section-layout";

const About = () => {
  return (
    <SectionLayout full imageContent>
      <div className="h-full w-full bg-college-img bg-cover  bg-center bg-no-repeat px-4 py-2 sm:px-8 sm:py-4 lg:px-16 lg:py-9">
        <div className="h-full w-full">
          <div className="flex min-w-64 flex-col items-center justify-center gap-2 pt-8 text-center">
            <CustomText highlightedTitle>
              CHRIST COLLEGE OF ENGINEERING
            </CustomText>
            <span className="font-primary text-xl text-secondary sm:text-2xl">
              Irinjalakuda, Thrissur, Kerala
            </span>
          </div>
          <div className="mt-8 min-w-56 flex-1 text-justify">
            <CustomText description>
              <CustomText highlightedDescription>
                Christ College of Engineering (CCE)
              </CustomText>
              , established in 2015, is affiliated to&nbsp;
              <CustomText highlightedDescription>
                APJ Abdul Kalam Technological University, Thiruvananthapuram
              </CustomText>
              &nbsp;and is recognized by&nbsp;
              <CustomText highlightedDescription>AICTE, New Delhi</CustomText>.
              This college was found at a time when starting a new engineering
              college was not considered as a sensible proposition. In its short
              span of existence, exceeding all expectations and proving all
              critics wrong, Christ College of Engineering has managed to create
              ripples on the academic front in the university, so much so that
              today the college is being&nbsp;
              <CustomText highlightedDescription>
                recognized as one of the best self-financing engineering
                colleges in Kerala
              </CustomText>
              .
            </CustomText>
          </div>
          <div className="mb-8 mt-8 min-w-56 flex-1 text-justify">
            <CustomText description>
              Staff and students are at the center of this success story. No
              stone is being left unturned in ensuring that along with
              academics,&nbsp;
              <CustomText highlightedDescription>
                the students get the right amount of exposure required for
                tomorrow&apos;s successful global citizen
              </CustomText>
              , through the various initiatives held at this campus. With the
              kind of transformative learning model in place here, the college
              is well on its way to making a positive impact on our society and
              nation at large.
            </CustomText>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default About;
