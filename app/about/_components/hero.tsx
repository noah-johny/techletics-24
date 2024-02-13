import { CustomText } from "@/components/custom";

function Hero() {
    return (
        <section className="bg-college-img bg-cover bg-no-repeat  px-4 sm:px-8 lg:px-16 py-2 sm:py-4 lg:py-9 w-full h-full">
            <div className="w-full h-full">
                <div className="min-w-64 flex justify-center text-center items-center flex-col gap-2 pt-8">
                    <CustomText title> CHRIST COLLEGE OF ENGINEERING</CustomText><span className="font-primary text-2xl text-primary sm:text-3xl">Irinjalakuda, Thrissur, Kerala</span>
                </div>
                <div className="min-w-64 flex-1 text-justify mt-8">
                    <CustomText description>
                        Christ College of Engineering (CCE), established in 2015, is affiliated to APJ Abdul Kalam Technological University, Thiruvananthapuram; and is recognized by AICTE, New Delhi. This college was found at a time when starting a new engineering college was not considered as a sensible proposition. In its short span of existence, exceeding all expectations and proving all critics wrong, Christ College of Engineering has managed to create ripples on the academic front in the university, so much so that today the college is being recognized as one of the best self-financing engineering colleges in Kerala.
                    </CustomText>
                </div>
                <div className="mb-8 mt-8 min-w-64 flex-1 text-justify">
                    <CustomText description>
                        Staff and students are at the center of this success story. No stone is being left unturned in ensuring that along with academics, the students get the right amount of exposure required for tomorrow’s successful global citizen, through the various initiatives held at this campus. With the kind of transformative learning model in place here, the college is well on its way to making a positive impact on our society and nation at large.
                    </CustomText>
                </div>
            </div>
        </section>
    )
}
export default Hero