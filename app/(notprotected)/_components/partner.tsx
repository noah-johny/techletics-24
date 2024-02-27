import { CustomLink, CustomText } from "@/components/custom";
import Image from "next/image";


const Partner = () => {
    return (
        <CustomLink href="https://www.clubfm.in/" target="/" className="h-[60vh] flex items-center justify-center flex-col gap-5" >
            <CustomText title>Media Partner</CustomText>
            <Image
                src="https://dnbca6q7do6n.cloudfront.net/media/techletics24/image.webp"
                width={100}
                height={100}
                alt="Club FM Logo"
                priority
                className="lg"
            />
        </CustomLink>
    );
};

export default Partner;
