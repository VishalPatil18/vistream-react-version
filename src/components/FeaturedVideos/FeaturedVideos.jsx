import { useState, useEffect } from "react";
import { getVideosService } from "../../services";
import { MainVideoCard } from "../MainVideoCard/MainVideoCard";
import styles from "./FeaturedVideos.module.css";

const FeaturedVideos = ({ page = "" }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await getVideosService();
        setVideos(response.data.videos);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <section>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Featured Videos</h2>
        {page === "homePage" ? (
          <button
            className={`button btn-plain btn-primary ${styles.seeAllBtn}`}
          >
            See all
          </button>
        ) : null}
      </div>
      <div className={styles.featuredVideos}>
        {videos.map((video, i) => (
          <MainVideoCard key={i} video={video} />
        ))}
      </div>
    </section>
  );
};

export { FeaturedVideos };
