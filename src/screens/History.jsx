import { InfoSidebar, HorizontalCardWrapper } from "../components";
import { videos } from "../backend/db/videos";
import styles from "./History.module.css";

const History = () => {
  const videoList = [
    ...videos,
    ...videos,
    ...videos,
    ...videos,
    ...videos,
    ...videos,
  ];
  return (
    <section className={styles.body}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Your Watch History</h2>
      </div>
      <div className={styles.historyWrapper}>
        <InfoSidebar page="Watch History" />
        <HorizontalCardWrapper videoList={videoList} />
      </div>
    </section>
  );
};

export { History };