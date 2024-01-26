import { motion } from "framer-motion";
import Image from "next/image";

interface EventsCardProps {
  imgSrc: string;
  text?: string;
}

const EventsCard = ({ imgSrc, text = "Hi" }: EventsCardProps) => {
  return (
    <motion.div
      className="relative group"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      whileHover={{ rotateY: 180 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Image alt="Front of card" height={370} width={300} src={imgSrc} />
    </motion.div>
  );
};

export default EventsCard;
