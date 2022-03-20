import { SmallVideoCard } from "../SmallVideoCard/SmallVideoCard";
import { videos } from "../../backend/db/videos";
import styles from "./TrendingVideoTable.module.css";

const TrendingVideoTable = () => {
  const videoList = [...videos, ...videos];

  return (
    <section>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Trending Videos! Follow the trend</h2>
        <button className={`button btn-plain btn-primary ${styles.seeAllBtn}`}>
          See all
        </button>
      </div>
      <div className={styles.table}>
        {videoList.map((video) => (
          <SmallVideoCard video={video} />
        ))}
      </div>
    </section>
  );
};

export { TrendingVideoTable };
