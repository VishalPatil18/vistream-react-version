import { Link } from "react-router-dom";
import { useData } from "../../context";
import { MainVideoCard } from "../MainVideoCard/MainVideoCard";
import styles from "./FeaturedVideos.module.css";

const FeaturedVideos = ({ page = "" }) => {
  const { videosData } = useData();

  return (
    <section>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Featured Videos</h2>
        {page === "homePage" ? (
          <Link to="/explore">
            <button
              className={`button btn-plain btn-primary ${styles.seeAllBtn}`}
            >
              See all
            </button>
          </Link>
        ) : null}
      </div>
      <div className={styles.featuredVideos}>
        {videosData.map((video) => (
          <MainVideoCard key={video._id} video={video} />
        ))}
      </div>
    </section>
  );
};

export { FeaturedVideos };
