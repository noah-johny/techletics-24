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
    <CustomLink href={link} className="mb-4">
      <Image
        src={src}
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
      src: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/icccd.jpeg",
      alt: "ICCCD Poster",
      label: "CSE",
      link: "mailto:callforpapers@cce.edu.in",
    },
    {
      src: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/iccce.jpeg",
      alt: "ICCCE Poster",
      label: "EEE",
      link: "mailto:iccce2024@cce.edu.in",
    },
    {
      src: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/icemme.jpeg",
      alt: "ICEMME Poster",
      label: "ME",
      link: "mailto:icemme24@cce.edu.in",
    },
    {
      src: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/icrcet.jpeg",
      alt: "ICRCET Poster",
      label: "ECE",
      link: "mailto:icrcet24@cce.edu.in",
    },
    {
      src: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/icice.jpg",
      alt: "ICICE Poster",
      label: "CE",
      link: "mailto:icice2024@cce.edu.in",
    },
    {
      src: "https://dnbca6q7do6n.cloudfront.net/media/techletics24/icicblh.jpeg",
      alt: "ICICBLH Poster",
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
