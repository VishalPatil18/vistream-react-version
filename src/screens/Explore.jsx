import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { FeaturedVideos, FilterTags } from "../components";
import { icons, scrollToTop } from "../utilities";
import styles from "./Explore.module.css";

const Explore = () => {
  useEffect(scrollToTop, []);

  return (
    <main>
      <div className={styles.header}>
        <div className={styles.filterBtn}>
          <Icon icon={icons.filter} />
          <p className={styles.filter}>Filters</p>
          <div className={styles.filterSubmenu}>
            <div className={styles.filterHeading}>
              <h4 className={styles.filterHeadingText}>Filter By</h4>
              <button className="button btn-solid-danger btn-sm">Clear</button>
            </div>
            <div className={styles.filterBody}>
              <div>
                <p className={styles.filterTypeHeading}>Duration</p>
                <div className={styles.buttonsWrapper}>
                  <button className={styles.filterByBtn}>
                    Under 4 minutes
                  </button>
                  <button className={styles.filterByBtn}>4 - 20 minutes</button>
                  <button className={styles.filterByBtn}>
                    Over 20 minutes
                  </button>
                </div>
              </div>
              <div>
                <h4 className={styles.filterTypeHeading}>Sort By</h4>
                <div className={styles.buttonsWrapper}>
                  <button className={styles.filterByBtn}>View Count</button>
                  <button className={styles.filterByBtn}>Likes</button>
                  <button className={styles.filterByBtn}>View Count</button>
                </div>
              </div>

              <div>
                <h4 className={styles.filterTypeHeading}>Categories</h4>
                <div className={styles.buttonsWrapper}>
                  <button className={styles.filterByBtn}>Action</button>
                  <button className={styles.filterByBtn}>Sports</button>
                  <button className={styles.filterByBtn}>Racing</button>
                </div>
              </div>

              <div>
                <h4 className={styles.filterTypeHeading}>Upload Date</h4>
                <div className={styles.buttonsWrapper}>
                  <button className={styles.filterByBtn}>Oldest First</button>
                  <button className={styles.filterByBtn}>Newest First</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FilterTags />
      </div>
      <FeaturedVideos />
    </main>
  );
};

export { Explore };
