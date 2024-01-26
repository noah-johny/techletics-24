import styles from "./eventscard.module.css";
import clsx from "clsx";
const EventsCard = () => {
  return (
    <div
      className={clsx(styles["flip"], "w-[240px] md:w-[300px] lg:w-[360px]")}
    >
      <div className={styles["flip-content"]}>
        <div className={styles["flip-front"]}>
          <img src="/images/event-1-front.svg" />
        </div>
        <div className={styles["flip-back"]}>
          <img src="/images/event-1-back.svg" />
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
