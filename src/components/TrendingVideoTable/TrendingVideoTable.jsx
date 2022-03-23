import { Link } from "react-router-dom";
import { SmallVideoCard } from "../../components";
import { videos } from "../../backend/db/videos";
import styles from "./TrendingVideoTable.module.css";

const TrendingVideoTable = () => {
  const videoList = videos.slice(8, 12);

  return (
    <section>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Trending Videos! Follow the trend</h2>
        <Link to="/explore">
          <button
            className={`button btn-plain btn-primary ${styles.seeAllBtn}`}
          >
            See all
          </button>
        </Link>
      </div>
      <div className={styles.table}>
        {videoList.map((video) => (
          <SmallVideoCard key={video._id} video={video} page="watchlater" />
        ))}
      </div>
    </section>
  );
};

export { TrendingVideoTable };
