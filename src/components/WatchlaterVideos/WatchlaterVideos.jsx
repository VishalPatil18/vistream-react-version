import { Link } from "react-router-dom";
import { SmallVideoCard } from "../../components";
import { useWatchlater } from "../../context";
import styles from "./WatchlaterVideos.module.css";

const WatchlaterVideos = () => {
  const { watchlaterState } = useWatchlater();

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
        {watchlaterState.watchlater.length > 0
          ? watchlaterState.watchlater.map((video) => (
              <SmallVideoCard
                key={`watchLaterVideo-${video._id}`}
                video={video}
                page="watchlater"
              />
            ))
          : null}
      </div>
    </section>
  );
};

export { WatchlaterVideos };
