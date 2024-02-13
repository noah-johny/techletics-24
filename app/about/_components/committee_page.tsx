import React from "react";
import { CustomText } from "@/components/custom";
import Committe_card from "./committe_card";
import SectionLayout from "@/layouts/section-layout";

interface Position {
  position: string;
  name: string;
  img: string;
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
        {
          position: "Faculty Co-ordinator",
          name: "Dr. Ravishankar A N",
          img: "/images/members/Dr.png",
        },
        {
          position: "Faculty Co-ordinator",
          name: "Mr. Jisanto M D R",
          img: "/images/members/Jisanto M D R.png",
        },
        {
          position: "Chief Co-ordinator",
          name: "Rikson Raphel",
          img: "/images/members/Rikson Raphel.png",
        },
        {
          position: "Chief Co-ordinator",
          name: "Benhar Raj",
          img: "/images/members/Benhar Raj.png",
        },
        {
          position: "Union Chairman",
          name: "Albert Prakash",
          img: "/images/members/albert.png",
        },
        {
          position: "Union Vice-Chairman",
          name: "Alena Babu T",
          img: "/images/members/Alena Babu T.png",
        },
        {
          position: "Technical Event Co-ordinator",
          name: "Nasih P S",
          img: "/images/members/Nasih P S.png",
        },
        {
          position: "Technical Event Co-ordinator",
          name: "Nihas M S",
          img: "/images/members/Nihas M S.png",
        },
        {
          position: "Cultural Event Co-ordinator",
          name: "Rinoy Saju M",
          img: "/images/members/Rinoy Saju M.png",
        },
        {
          position: "Cultural Event Co-ordinator",
          name: "Swathy Anil",
          img: "/images/members/Swathi Anil.png",
        },
      ],
    },
    {
      title: "Website Committee",
      positions: [
        {
          position: "Website Lead",
          name: "Pranav Madhu",
          img: "/images/members/Pranav Madhu.png",
        },
        {
          position: "Lead Developer / Designer",
          name: "Noah Johny",
          img: "/images/members/Noah Johny.png",
        },
        {
          position: "Lead Designer",
          name: "Enric S Neelamkavil",
          img: "/images/members/Enric S Neelamkavil.png",
        },
        {
          position: "Website Supervisor",
          name: "Surya Kiran P M",
          img: "/images/members/Surya Kiran P M.png",
        },
        {
          position: "Frontend Developer",
          name: "Nikhit Kumar N S",
          img: "/images/members/Nikhit Kumar.png",
        },
        {
          position: "Frontend Developer",
          name: "Navaneeth K U",
          img: "/images/members/Navaneeth K U.png",
        },
        {
          position: "Frontend Developer",
          name: "Alfrin J Poulouse",
          img: "/images/members/alfrin.png",
        },
        {
          position: "Backend Developer",
          name: "Rinto Joseph T R",
          img: "/images/members/Rinto Joseph T R.png",
        },
      ],
    },
    {
      title: "Department Coordinators",
      positions: [
        {
          position: "BSE Deaprtment",
          name: "Farhan M Jeejo",
          img: "/images/members/Farhan M Jeejo.png",
        },
        {
          position: "BSE Deaprtment",
          name: "Raiza Rasheed",
          img: "/images/members/Raiza Rasheed.png",
        },
        {
          position: "CE Deaprtment",
          name: "Jerin John Mathen",
          img: "/images/members/Jerin John Mathen.png",
        },
        {
          position: "CE Deaprtment",
          name: "Nasiya S A",
          img: "/images/members/Nasiya S A.png",
        },
        {
          position: "CSE Deaprtment",
          name: "Neha Johnson",
          img: "/images/members/neha johnson.png",
        },
        {
          position: "CSE Deaprtment",
          name: "Sai Prasad",
          img: "/images/members/Sai Prasad.png",
        },
        {
          position: "ECE Deaprtment",
          name: "Anamin Joseph Leo",
          img: "/images/members/Anamin Joseph Leo.png",
        },
        {
          position: "ECE Deaprtment",
          name: "Nasreen K Ubaid",
          img: "/images/members/Nasreen K Ubaid.png",
        },
        {
          position: "EEE Deaprtment",
          name: "Nevin Yesudas",
          img: "/images/members/Nevin Yesudas.png",
        },
        {
          position: "EEE Deaprtment",
          name: "Nivin Tony",
          img: "/images/members/Nivin Tony.png",
        },
        {
          position: "ME Deaprtment",
          name: "Sandeep Rajesh",
          img: "/images/members/Sandeep Rajesh.png",
        },
        {
          position: "ME Deaprtment",
          name: "Nidhish T",
          img: "/images/members/Nidhish T.png",
        },
      ],
    },
  ];

  return (
    <>
      {data.map((item, index) => (
        <SectionLayout key={index}>
          <div className="flex flex-col items-center justify-center">
            <CustomText highlightedTitle>{item.title}</CustomText>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              {item.positions.map((position, index) => (
                <Committe_card info={position} key={index} />
              ))}
            </div>
          </div>
        </SectionLayout>
      ))}
    </>
  );
}
