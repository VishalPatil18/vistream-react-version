import { SmallVideoCard } from "../../components";
import { videos } from "../../backend/db/videos";
import styles from "./WatchlaterVideos.module.css";

const WatchlaterVideos = () => {
  const videoList = [...videos, ...videos];

  return (
    <section>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Watchlater Videos! Watch them now?</h2>
        <button className={`button btn-plain btn-primary ${styles.seeAllBtn}`}>
          See all
        </button>
      </div>
      <div className={styles.table}>
        {videoList.map((video, i) => (
          <SmallVideoCard key={i} video={video} />
        ))}
      </div>
    </section>
  );
};

export { WatchlaterVideos };
