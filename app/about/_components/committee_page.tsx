import React from "react";
import { CustomText } from "@/components/custom";
import Committe_card from "./committe_card";
import SectionLayout from "@/layouts/section-layout";

interface Position {
    position: string;
    name: string;
}

interface CommitteeData {
    title: string;
    positions: Position[];
}

export default function Committee_page() {
    const data: CommitteeData[] = [
        {
            title: "Executive Committee",
            positions: [
                { position: "Faculty Co-ordinator", name: "Dr. Ravishankar A N" },
                { position: "Faculty Co-ordinator", name: "Mr. Jisanto M D R" },
                { position: "Cheif Co-ordinator", name: "Rikson Raphel" },
                { position: "Faculty Co-ordinator", name: "Mr. Jisanto M D R" },
                { position: "Faculty Co-ordinator", name: "Mr. Jisanto M D R" },
                { position: "Faculty Co-ordinator", name: "Mr. Jisanto M D R" },
                { position: "Faculty Co-ordinator", name: "Mr. Jisanto M D R" },
                { position: "Faculty Co-ordinator", name: "Mr. Jisanto M D R" },

            ],
        },
        {
            title: "Board of Directors",
            positions: [
                { position: "Chairman", name: "David Lee" },
                { position: "Director", name: "Sarah Wilson" },
                { position: "Secretary", name: "Matthew Taylor" },
            ],
        },
    ];

    const ceo = "CEO";

    return (
        <>
            {data.map((item, index) => (
                <SectionLayout key={index}>
                    <div className="flex flex-col justify-center items-center">
                        <CustomText highlightedTitle>{item.title}</CustomText>
                        <div className="mt-10 flex flex-wrap gap-5 justify-center items-center">

                            {item.positions.map((position) => (
                                        <Committe_card info={position}/>
                                    )
                            )}
                        </div>
                    </div>
                </SectionLayout>
            ))}
        </>
    );
}
