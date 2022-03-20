import styles from "./CategoryCarousel.module.css";
import { categories } from "../../backend/db/categories";
import { GamesCategoryCard } from "../../components";

const CategoryCarousel = () => {
  return (
    <section>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Categories sorted just for you!</h2>
        <button className={`button btn-plain btn-primary ${styles.seeAllBtn}`}>
          See all
        </button>
      </div>
      <div className={styles.carousel}>
        {categories.map((item) => (
          <GamesCategoryCard
            key={item._id}
            imageSrc={item.imageSrc}
            title={item.categoryName}
            likes={item.likes}
          />
        ))}
      </div>
    </section>
  );
};

export { CategoryCarousel };
