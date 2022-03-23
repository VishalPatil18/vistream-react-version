import { SmallVideoCard } from "../../components";
import { videos } from "../../backend/db/videos";
import styles from "./TrendingVideoTable.module.css";

const TrendingVideoTable = () => {
  const videoList = videos.slice(10, 14);

  return (
    <section>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Trending Videos! Follow the trend</h2>
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

export { TrendingVideoTable };
