import { PlaylistCard } from "../../components";
import { categories } from "../../backend/db/categories";
import styles from "./PlaylistCarousel.module.css";

const PlaylistCarousel = () => {
  return (
    <section>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Playlists handcrafted by you!</h2>
        <button className={`button btn-plain btn-primary ${styles.seeAllBtn}`}>
          See all
        </button>
      </div>
      <div className={styles.carousel}>
        {categories.map((item) => (
          <PlaylistCard
            key={item._id}
            imageSrc={item.imageSrc}
            title={item.categoryName}
            videos={item.likes}
          />
        ))}
      </div>
    </section>
  );
};

export { PlaylistCarousel };
