import { CustomLink, CustomText } from "@/components/custom";
import Image from "next/image";

interface ConferenceCardProps {
  src: string;
  alt: string;
  label: string;
  link: string;
}

const ConferenceCard: React.FC<ConferenceCardProps> = ({
  src,
  alt,
  label,
  link,
}) => {
  return (
    <CustomLink href={link} className="relative mb-6">
      <Image
        src={src}
        alt={alt}
        width={320}
        height={320}
        priority
        className="saturate-0 hover:saturate-100 md:w-60"
      />

      <div className="absolute bottom-4 flex w-80 justify-center md:w-60">
        <span className="flex max-w-52 text-center font-secondary text-lg font-semibold text-primary">
          {label}
        </span>
      </div>
    </CustomLink>
  );
};

const Submit = () => {
  const conferenceData = [
    {
      src: "/images/CSE.png",
      alt: "Computer Science and Engineering",
      label: "CSE",
      link: "",
    },
    {
      src: "/images/EEE.png",
      alt: "Electrical and Electronics Engineering",
      label: "EEE",
      link: "",
    },
    {
      src: "/images/ME.png",
      alt: "Mechanical Engineering",
      label: "ME",
      link: "",
    },
    {
      src: "/images/ECE.png",
      alt: "Electronics and Communication Engineering",
      label: "ECE",
      link: "",
    },
    {
      src: "/images/CE.png",
      alt: "Civil Engineering",
      label: "CE",
      link: "",
    },
    {
      src: "/images/ME.png",
      alt: "Basic Science & Humanities",
      label: "BSH",
      link: "",
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

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12  lg:gap-6 xl:justify-between">
        {conferenceData.map((conference) => (
          <ConferenceCard
            key={conference.alt}
            src={conference.src}
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
