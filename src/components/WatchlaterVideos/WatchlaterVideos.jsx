import { Link } from "react-router-dom";
import { SmallVideoCard } from "../../components";
import { videos } from "../../backend/db/videos";
import styles from "./WatchlaterVideos.module.css";

const WatchlaterVideos = () => {
  const videoList = videos.slice(0, 4);

  return (
    <section>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Watchlater Videos! Watch them now?</h2>
        <Link to="/watchlater">
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

export { WatchlaterVideos };
