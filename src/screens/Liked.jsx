import { InfoSidebar, HorizontalCardWrapper } from "../components";
import { videos } from "../backend/db/videos";
import styles from "./Liked.module.css";

const Liked = () => {
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
        <h2 className={styles.heading}>Your Liked Videos</h2>
      </div>
      <div className={styles.likedWrapper}>
        <InfoSidebar page="Liked Videos" />
        <HorizontalCardWrapper videoList={videoList} />
      </div>
    </section>
  );
};

export { Liked };
