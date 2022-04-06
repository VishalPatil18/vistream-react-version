import axios from "axios";
import { useEffect, useState } from "react";
import { GamesCategoryCard } from "../../components";
import styles from "./CategoryCarousel.module.css";

const CategoryCarousel = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        if (response.status === 200) {
          setCategories(response.data.categories);
        } else {
          throw new Error("Something went wrong! Please try again later!");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <section>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Categories sorted just for you!</h2>
        <button className={`button btn-plain btn-primary ${styles.seeAllBtn}`}>
          See all
        </button>
      </div>
      <div className={styles.carousel}>
        {categories.length > 0
          ? categories.map((category) => (
              <GamesCategoryCard
                key={category._id}
                imageSrc={category.imageSrc}
                title={category.categoryName}
                likes={category.likes}
              />
            ))
          : null}
      </div>
    </section>
  );
};

export { CategoryCarousel };
