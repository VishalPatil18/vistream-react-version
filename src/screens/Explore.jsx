import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import useOnclickOutside from "react-cool-onclickoutside";
import { FeaturedVideos, FilterMenu, FilterTags } from "../components";
import { icons, scrollToTop } from "../utilities";
import styles from "./Explore.module.css";

const Explore = () => {
  const [isActive, setIsActive] = useState(false);
  const ref = useOnclickOutside(() => {
    setIsActive(false);
  });

  useEffect(scrollToTop, []);

  return (
    <main>
      <div className={styles.header}>
        <button className={styles.filterBtn} onClick={() => setIsActive(true)}>
          <Icon icon={icons.filter} />
          <p className={styles.filter}>Filters</p>
        </button>
        <div
          ref={ref}
          className={`${styles.filterMenuWrapper} ${
            isActive ? styles.isActive : styles.isInActive
          }`}
        >
          <FilterMenu setIsActive={setIsActive} />
        </div>
        <FilterTags />
      </div>
      <FeaturedVideos />
    </main>
  );
};

export { Explore };
