import { CommitteeCard } from "@/components/cards";
import { CustomText } from "@/components/custom";
import SectionLayout from "@/layouts/section-layout";

interface Details {
  role: string;
  name: string;
  localUrl: string;
  cloudUrl: string;
}

interface CommitteeData {
  title: string;
  details: Details[];
}

export default function Committee() {
  const data: CommitteeData[] = [
    {
      title: "Executive",
      details: [
        {
          role: "Faculty Co-ordinator",
          name: "Dr. Ravishankar A N",
          localUrl: "/images/members/Dr.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2FDr.png?alt=media&token=f836eb8b-4dc9-462f-be8d-b478947419e2",
        },
        {
          role: "Faculty Co-ordinator",
          name: "Mr. Jisanto M D R",
          localUrl: "/images/members/Jisanto M D R.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2FJisanto%20M%20D%20R.png?alt=media&token=f7439f39-666f-4330-a55c-a945227f73ff",
        },
        {
          role: "Chief Co-ordinator",
          name: "Rikson Raphel",
          localUrl: "/images/members/Rikson Raphel.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2FRikson%20Raphel.png?alt=media&token=24d86598-d8e5-431a-a735-5ecf34048bb2",
        },
        {
          role: "Chief Co-ordinator",
          name: "Benhar Raj",
          localUrl: "/images/members/Benhar Raj.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2FBenhar%20Raj.png?alt=media&token=d0a1420a-7fdb-4b03-89e9-339f3015cbaa",
        },
        {
          role: "Union Chairman",
          name: "Albert Prakash",
          localUrl: "/images/members/albert.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2Falbert.png?alt=media&token=a2a7fa4d-6fd5-4d8e-8e46-5c6f5d59b6f6",
        },
        {
          role: "Union Vice-Chairman",
          name: "Alena Babu T",
          localUrl: "/images/members/Alena Babu T.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2FAlena%20Babu%20T.png?alt=media&token=25871502-f9c2-4512-9e8e-a0caec8266db",
        },
        {
          role: "Technical Event Co-ordinator",
          name: "Nasih P S",
          localUrl: "/images/members/Nasih P S.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2FNasih%20P%20S.png?alt=media&token=6e46c326-8b61-452b-b33e-00d6e6c20db0",
        },
        {
          role: "Technical Event Co-ordinator",
          name: "Nihas M S",
          localUrl: "/images/members/Nihas M S.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2FNihas%20M%20S.png?alt=media&token=29e7d256-654c-4f1e-aac3-a63078910e7c",
        },
        {
          role: "Cultural Event Co-ordinator",
          name: "Rinoy Saju M",
          localUrl: "/images/members/Rinoy Saju M.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2FRinoy%20Saju%20M.png?alt=media&token=212f69b6-8d44-4826-8628-6815fe737ee2",
        },
        {
          role: "Cultural Event Co-ordinator",
          name: "Swathy Anil",
          localUrl: "/images/members/Swathi Anil.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2FSwathi%20Anil.png?alt=media&token=82c04645-45ef-48d4-a8d1-b5edb0e117c7",
        },
      ],
    },
    {
      title: "Website",
      details: [
        {
          role: "Website Lead",
          name: "Pranav Madhu",
          localUrl: "/images/members/pranvmadhu.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2Fpranavmadhu.png?alt=media&token=7d343bf8-dc56-46dd-b394-c8ff421c532e",
        },
        {
          role: "Lead Developer / Designer",
          name: "Noah Johny",
          localUrl: "/images/members/noah.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2Fnoah.png?alt=media&token=2411245c-5aaf-4b84-ab09-eba40b72e4cf",
        },
        {
          role: "Lead Designer",
          name: "Enric S Neelamkavil",
          localUrl: "/images/members/Enric S Neelamkavil.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2FEnric%20S%20Neelamkavil.png?alt=media&token=cc8150b6-7b87-459a-abe6-4418e5572328",
        },
        {
          role: "Website Supervisor",
          name: "Surya Kiran P M",
          localUrl: "/images/members/Surya Kiran P M.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2FSurya%20Kiran%20P%20M.png?alt=media&token=b2dd1e71-1301-466a-acd2-093c1d3d4106",
        },
        {
          role: "Frontend Developer",
          name: "Nikhit Kumar N S",
          localUrl: "/images/members/Nikhit Kumar.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2FNikhit%20Kumar.png?alt=media&token=1876ef36-5925-4713-a00a-c16f6e338b5a",
        },
        {
          role: "Frontend Developer",
          name: "Navaneeth K U",
          localUrl: "/images/members/Navaneeth K U.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2FNavaneeth%20K%20U.png?alt=media&token=e8b6b61e-c62b-4809-aaba-e6e669ddde2d",
        },
        {
          role: "Frontend Developer",
          name: "Alfrin J Poulouse",
          localUrl: "/images/members/alfrin.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2Falfrin.png?alt=media&token=36d25766-6020-4e29-8c75-bf4eae56a54e",
        },
        {
          role: "Backend Developer",
          name: "Rinto Joseph T R",
          localUrl: "/images/members/rinto.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2Frinto.png?alt=media&token=a3cb9ca4-3b7a-450d-9052-f63647af8237",
        },
      ],
    },
    {
      title: "Department",
      details: [
        {
          role: "BSH Deaprtment",
          name: "Farhan M Jeejo",
          localUrl: "/images/members/Farhan M Jeejo.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2FFarhan%20M%20Jeejo.png?alt=media&token=2dfa279e-5e1a-4568-9bfb-b31c4bbcbe82",
        },
        {
          role: "BSH Deaprtment",
          name: "Raiza Rasheed",
          localUrl: "/images/members/Raiza Rasheed.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2FRaiza%20Rasheed.png?alt=media&token=2e7ff74b-d7eb-4a9a-b18f-de3aa651d089",
        },
        {
          role: "CE Deaprtment",
          name: "Jerin John Mathen",
          localUrl: "/images/members/jerin john mathen.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2Fjerin%20john%20mathen.png?alt=media&token=e08d66ca-f736-4388-8ce2-1db897c5705c",
        },
        {
          role: "CE Deaprtment",
          name: "Nasiya S A",
          localUrl: "/images/members/Nasiya S A.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2FNasiya%20S%20A.png?alt=media&token=a8badf76-f328-478b-ac6b-1746c4113f73",
        },
        {
          role: "CSE Deaprtment",
          name: "Neha Johnson",
          localUrl: "/images/members/neha johnson.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2Fneha%20johnson.png?alt=media&token=4680cc3e-da62-4fff-8fd5-9e79d8dd9df8",
        },
        {
          role: "CSE Deaprtment",
          name: "Sai Prasad",
          localUrl: "/images/members/Sai Prasad.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2FSai%20Prasad.png?alt=media&token=6c682b5a-6553-4508-bcb2-4eb784e551cf",
        },
        {
          role: "ECE Deaprtment",
          name: "Anamin Joseph Leo",
          localUrl: "/images/members/Anamin Joseph Leo.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2FAnamin%20Joseph%20Leo.png?alt=media&token=06d1b41c-5106-4a93-b12a-9ff4401960bd",
        },
        {
          role: "ECE Deaprtment",
          name: "Nasreen K Ubaid",
          localUrl: "/images/members/Nasreen K Ubaid.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2FNasreen%20K%20Ubaid.png?alt=media&token=4ab62795-a2a2-42c1-a507-ce44e2f8c72b",
        },
        {
          role: "EEE Deaprtment",
          name: "Nevin Yesudas",
          localUrl: "/images/members/Nevin Yesudas.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2FNevin%20Yesudas.png?alt=media&token=a5cec458-4fcf-48b5-b748-8ddc6d9f16ef",
        },
        {
          role: "EEE Deaprtment",
          name: "Nivin Tony",
          localUrl: "/images/members/Nivin Tony.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2FNivin%20Tony.png?alt=media&token=49a1c129-2502-4b46-8e31-0a409af03e1c",
        },
        {
          role: "ME Deaprtment",
          name: "Sandeep Rajesh",
          localUrl: "/images/members/Sandeep Rajesh.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2FSANDEEP%20RAJESH.png?alt=media&token=784233e2-e93f-422d-b5b8-99591c6cc21b",
        },
        {
          role: "ME Deaprtment",
          name: "Nidhish T",
          localUrl: "/images/members/Nidhish T.png",
          cloudUrl:
            "https://firebasestorage.googleapis.com/v0/b/techletics-24-fe40e.appspot.com/o/members%2FNidhish%20T.png?alt=media&token=5d884625-f28a-4194-ae91-a63eb7fcc49e",
        },
      ],
    },
  ];

  return (
    <>
      {data.map((item, index) => (
        <SectionLayout key={index}>
          <div className="flex flex-col items-center justify-center py-6 lg:py-12">
            <CustomText title>
              <CustomText highlightedTitle>{item.title}</CustomText>
              &nbsp;committee
            </CustomText>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
              {item.details.map((role, index) => (
                <CommitteeCard info={role} key={index} />
              ))}
            </div>
          </div>
        </SectionLayout>
      ))}
    </>
  );
}
