import { CustomText } from "@/components/custom";
import Image from "next/image";


interface PositionInfo {
    position: string;
    name: string;
}


export default function Committe_card({ info }: { info: PositionInfo }) {
    return (
        <div className="w-[200px] md:w-[240px] lg:w-[260px] aspect-[4/5] bg-black group hover:bg-[#DFFF1B] transition delay-80">
            <div className="w-full h-full relative">
                <Image alt="card" src={"/images/enric.png"}
                    width={200}
                    height={275}
                    className="w-full h-full block object-fil" />
                <div className=" peer hidden absolute bottom-0 left-0 right-0 flex-col justify-center items-center w-full bg-gradient-to-t transition delay-100 from-black via-black to-transparent p-3 group-hover:flex">
                    <span className="font-primary text-lg sm:text-xl">{info.name}</span>
                    <span className="font-secondary text-lg text-primary sm:text-xl text-center">{info.position}</span>
                </div>
            </div>
        </div>
    )
}