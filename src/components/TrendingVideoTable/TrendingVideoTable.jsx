import { Link } from "react-router-dom";
import { SmallVideoCard } from "../../components";
import { useData } from "../../context";
import { useEffect, useState } from "react";
import { findTrendingVideos } from "../../utilities";
import styles from "./TrendingVideoTable.module.css";

const TrendingVideoTable = () => {
  const { videosData } = useData();
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    setVideoList(
      videosData.length > 0 ? findTrendingVideos(videosData).slice(0, 4) : []
    );
  }, [videosData]);

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
          <SmallVideoCard
            key={`trendingVideo-${video._id}`}
            video={video}
            page="watchlater"
          />
        ))}
      </div>
    </section>
  );
};

export { TrendingVideoTable };
