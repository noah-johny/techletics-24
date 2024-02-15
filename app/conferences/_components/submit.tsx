import { CustomLink, CustomText } from "@/components/custom";
import Image from "next/image";

interface ConferenceCardProps {
  localURL: string;
  cloudURL: string;
  alt: string;
  label: string;
  link: string;
}

const ConferenceCard: React.FC<ConferenceCardProps> = ({
  localURL,
  cloudURL,
  alt,
  label,
  link,
}) => {
  return (
    <CustomLink href={link} className="mb-4">
      <Image
        src={cloudURL || localURL}
        alt={alt}
        width={320}
        height={256}
        className="h-96 saturate-0 hover:saturate-100"
      />

      <span className="mt-2 flex w-80 justify-center text-center font-secondary text-lg font-semibold text-primary">
        {label}
      </span>
    </CustomLink>
  );
};

const Submit = () => {
  const conferenceData = [
    {
      localURL: "/images/conference/CS-conference.jpeg",
      cloudURL: "",
      alt: "Computer Science and Engineering",
      label: "CSE",
      link: "mailto:callforpapers@cce.edu.in",
    },
    {
      localURL: "/images/conference/EEE-conference.jpeg",
      cloudURL: "",
      alt: "Electrical and Electronics Engineering",
      label: "EEE",
      link: "mailto:iccce2024@cce.edu.in",
    },
    {
      localURL: "/images/conference/ME-conference.jpeg",
      cloudURL: "",
      alt: "Mechanical Engineering",
      label: "ME",
      link: "mailto:icemme24@cce.edu.in",
    },
    {
      localURL: "/images/conference/EC-conference.jpeg",
      cloudURL: "",
      alt: "Electronics and Communication Engineering",
      label: "ECE",
      link: "mailto:icrcet24@cce.edu.in",
    },
    {
      localURL: "/images/conference/CE-conference.jpeg",
      cloudURL: "",
      alt: "Civil Engineering",
      label: "CE",
      link: "mailto:icice2024@cce.edu.in",
    },
    {
      localURL: "/images/conference/ME-conference.jpeg",
      cloudURL: "",
      alt: "Basic Science & Humanities",
      label: "BSH",
      link: "mailto:conference.bsh@cce.edu.in",
    },
  ];

  return (
    <div className="flex flex-col justify-center gap-12 py-6 font-secondary text-secondary lg:py-12">
      <CustomText title>
        <span className="text-primary">submit your&nbsp;</span>
        abstract
      </CustomText>

      <div className="mb-6 sm:mb-12 lg:mb-0">
        <CustomText description>
          Submit your conference & be a part of the academic community at Christ
          College of Engineering.
        </CustomText>
      </div>

      <div className="flex flex-wrap items-center justify-around gap-6  md:gap-12 lg:gap-6">
        {conferenceData.map((conference, index) => (
          <ConferenceCard
            key={index}
            localURL={conference.localURL}
            cloudURL={conference.cloudURL}
            alt={conference.alt}
            label={conference.label}
            link={conference.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Submit;
