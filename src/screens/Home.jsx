import {
  CategoryCarousel,
  PlaylistCarousel,
  FilterTags,
  TrendingVideoTable,
  WatchlaterVideos,
  FeaturedVideos,
} from "../components";

const Home = ({ cname }) => {
  return (
    <main>
      <FilterTags />
      <CategoryCarousel />
      <PlaylistCarousel />
      <TrendingVideoTable />
      <WatchlaterVideos />
      <FeaturedVideos />
    </main>
  );
};

export { Home };
