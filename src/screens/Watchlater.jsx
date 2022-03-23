import { InfoSidebar, HorizontalCardWrapper } from "../components";
import { videos } from "../backend/db/videos";
import styles from "./Watchlater.module.css";

const Watchlater = () => {
  const videoList = videos.slice(1, 4);
  return (
    <section className={styles.body}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Your Watchlater</h2>
      </div>
      <div className={styles.watchlaterWrapper}>
        <InfoSidebar page="Watch Later" />
        <HorizontalCardWrapper videoList={videoList} page="watchlater" />
      </div>
    </section>
  );
};

export { Watchlater };
