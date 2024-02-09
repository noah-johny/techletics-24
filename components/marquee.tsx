import clsx from "clsx";
import Marquee from "react-fast-marquee";

interface TextMarqueeProps {
  textColor?: "light" | "dark";
  type?: "primary" | "secondary";
  bgColor?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "quarternary"
    | "transparent";
}

const TextMarquee = ({
  textColor = "light",
  type = "primary",
  bgColor = "primary",
}: TextMarqueeProps) => {
  return (
    <section
      className={clsx("w-full min-w-80 overflow-x-clip py-2 md:py-4", {
        "bg-primary": bgColor === "primary",
        "bg-secondary": bgColor === "secondary",
        "bg-tertiary": bgColor === "tertiary",
        "bg-quarternary": bgColor === "quarternary",
        "bg-transparent": bgColor === "transparent",
      })}
    >
      <Marquee>
        {[...Array(10)].map((index) =>
          type === "primary" ? (
            <p
              key={index}
              className={clsx("flex gap-3 font-primary text-2xl md:text-3xl", {
                "text-tertiary": textColor === "light",
                "text-primary": textColor === "dark",
              })}
            >
              <span className="ml-4">🌞</span>
              <span>ͲechlςͲics</span>
              <span className="font-secondary font-extrabold">&apos;24</span>
              <span>✺</span>
              <span>ͲechlςͲics</span>
              <span className="font-secondary font-extrabold">&apos;24</span>
            </p>
          ) : (
            <p
              key={index}
              className={clsx("flex gap-3 font-primary text-3xl", {
                "text-tertiary": textColor === "light",
                "text-primary": textColor === "dark",
              })}
            >
              <span className="ml-4">◌</span>
              <span>ILLUMINⱭͲe</span>
              <span>✺</span>
              <span>IGNIͲЄ</span>
              <span>🌞</span>
              <span>INSPIRς</span>
            </p>
          ),
        )}
      </Marquee>
    </section>
  );
};

export default TextMarquee;
