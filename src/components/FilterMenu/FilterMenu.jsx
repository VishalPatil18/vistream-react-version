import { Icon } from "@iconify/react";
import { useFilter } from "../../context";
import { icons } from "../../utilities";
import { CategoryFilter } from "../CategoryFilter/CategoryFilter";
import { DurationFilter } from "../DurationFilter/DurationFilter";
import { SortByFilter } from "../SortByFilter/SortByFilter";
import styles from "./FilterMenu.module.css";

const FilterMenu = ({ setIsActive }) => {
  const { filterDispatch } = useFilter();

  return (
    <div className={styles.filterSubmenu}>
      <div className={styles.filterHeading}>
        <h4 className={styles.filterHeadingText}>Filter By</h4>
        <button
          className={`button btn-solid-danger btn-sm ${styles.clearBtn}`}
          onClick={() =>
            filterDispatch({
              type: "CLEAR",
            })
          }
        >
          Clear
        </button>
        <button className={styles.closeBtn} onClick={() => setIsActive(false)}>
          <Icon icon={icons.close} />
        </button>
      </div>
      <div className={styles.filterBody}>
        <div>
          <p className={styles.filterTypeHeading}>Duration</p>
          <DurationFilter />
        </div>
        <div>
          <h4 className={styles.filterTypeHeading}>Sort By</h4>
          <SortByFilter />
        </div>

        <div>
          <h4 className={styles.filterTypeHeading}>Categories</h4>
          <CategoryFilter />
        </div>
      </div>
    </div>
  );
};

export { FilterMenu };
