import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useData, useFilter } from "../../context";
import { filterHandler } from "../../utilities";
import { MainVideoCard } from "../MainVideoCard/MainVideoCard";
import styles from "./FeaturedVideos.module.css";

let filteredVideos = [];
const FeaturedVideos = ({ page = "" }) => {
  const { videosData } = useData();
  const { filterState } = useFilter();

  filteredVideos = filterHandler(videosData, filterState);

  return (
    <section>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Featured Videos</h2>
        <small className={styles.showingProduct}>
          (Showing {filteredVideos.length} Videos)
        </small>
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
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <MainVideoCard key={video._id} video={video} />
          ))
        ) : (
          <p>No Videos found!</p>
        )}
      </div>
    </section>
  );
};

export { FeaturedVideos };
