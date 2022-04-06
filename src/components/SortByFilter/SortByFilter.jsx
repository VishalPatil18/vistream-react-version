import { useFilter } from "../../context";
import styles from "./SortByFilter.module.css";

const SortByFilter = () => {
  const { filterState, filterDispatch } = useFilter();

  return (
    <div className={styles.buttonsWrapper}>
      <div className={styles.inputWrapper}>
        <input
          type="radio"
          id="views"
          name="sort"
          checked={filterState.sortBy === "views"}
          onChange={() =>
            filterDispatch({
              type: "SORT_BY",
              payload: {
                sortBy: "views",
              },
            })
          }
        />
        <label className={styles.filterByBtn} htmlFor="views">
          Views
        </label>
      </div>
      <div className={styles.inputWrapper}>
        <input
          type="radio"
          id="likes"
          name="sort"
          checked={filterState.sortBy === "likes"}
          onChange={() =>
            filterDispatch({
              type: "SORT_BY",
              payload: {
                sortBy: "likes",
              },
            })
          }
        />
        <label className={styles.filterByBtn} htmlFor="likes">
          Likes
        </label>
      </div>
      <div className={styles.inputWrapper}>
        <input
          type="radio"
          id="oldest"
          name="sort"
          checked={filterState.sortBy === "oldest"}
          onChange={() =>
            filterDispatch({
              type: "SORT_BY",
              payload: {
                sortBy: "oldest",
              },
            })
          }
        />
        <label className={styles.filterByBtn} htmlFor="oldest">
          Oldest First
        </label>
      </div>
      <div className={styles.inputWrapper}>
        <input
          type="radio"
          id="newest"
          name="sort"
          checked={filterState.sortBy === "newest"}
          onChange={() =>
            filterDispatch({
              type: "SORT_BY",
              payload: {
                sortBy: "newest",
              },
            })
          }
        />
        <label className={styles.filterByBtn} htmlFor="newest">
          Newest First
        </label>
      </div>
    </div>
  );
};

export { SortByFilter };
