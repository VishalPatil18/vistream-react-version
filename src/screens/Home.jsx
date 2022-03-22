import {
  CategoryCarousel,
  PlaylistCarousel,
  FilterTags,
  TrendingVideoTable,
  WatchlaterVideos,
  FeaturedVideos,
} from "../components";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = ({ cname }) => {
  return (
    <main className={cname}>
      <FilterTags page={"homePage"} />
      <CategoryCarousel />
      <PlaylistCarousel />
      <TrendingVideoTable />
      <WatchlaterVideos />
      <FeaturedVideos page="homePage" />
      <footer className={styles.footer}>
        <Link
          to="/explore"
          className={`button btn-solid-primary ${styles.seeAllVideosBtn}`}
        >
          See all Videos
        </Link>
      </footer>
    </main>
  );
};

export { Home };
