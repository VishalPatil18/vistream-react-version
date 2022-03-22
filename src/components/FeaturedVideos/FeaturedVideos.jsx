import { videos } from "../../backend/db/videos";
import { MainVideoCard } from "../MainVideoCard/MainVideoCard";
import styles from "./FeaturedVideos.module.css";

const FeaturedVideos = ({ page = "" }) => {
  // NOTE: Just for rendering purpose. Will remove it when using proper database
  const videoList = [
    ...videos,
    ...videos,
    ...videos,
    ...videos,
    ...videos,
    ...videos,
    ...videos,
    ...videos,
    ...videos,
    ...videos,
  ];

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
        {videoList.map((video, i) => (
          <MainVideoCard key={i} video={video} />
        ))}
      </div>
    </section>
  );
};

export { FeaturedVideos };
