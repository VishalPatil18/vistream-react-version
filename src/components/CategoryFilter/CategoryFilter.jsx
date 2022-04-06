import axios from "axios";
import { useEffect, useState } from "react";
import { useFilter } from "../../context";
import styles from "./CategoryFilter.module.css";

const CategoryFilter = () => {
  const [categories, setCategories] = useState([]);
  const { filterState, filterDispatch } = useFilter();

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
    <div className={styles.buttonsWrapper}>
      {categories.length > 0
        ? categories.map((category) => (
            <div className={styles.inputWrapper} key={category._id}>
              <input
                type="checkbox"
                id={category._id}
                checked={(() => {
                  return filterState.categories.find(
                    (currCategory) => currCategory === category.categoryName
                  )
                    ? true
                    : false;
                })()}
                onChange={(e) => {
                  filterDispatch({
                    type: "CATEGORISE",
                    payload: {
                      categories: (() => {
                        if (e.target.checked) {
                          return [
                            ...filterState.categories,
                            category.categoryName,
                          ];
                        } else {
                          return filterState.categories.filter(
                            (currCategory) =>
                              currCategory !== category.categoryName
                          );
                        }
                      })(),
                    },
                  });
                }}
              />
              <label className={styles.filterByBtn} htmlFor={category._id}>
                {category.categoryName}
              </label>
            </div>
          ))
        : null}
    </div>
  );
};

export { CategoryFilter };
