import { useState } from "react";
import { FILTER_TAGS } from "../../constants";
import { useFilter } from "../../context";
import styles from "./FilterTags.module.css";

const FilterTags = () => {
  const { filterDispatch } = useFilter();
  const [isActive, setIsActive] = useState("");

  return (
    <div className={styles.filtersWrapper}>
      {FILTER_TAGS.map((filter) => (
        <span
          key={filter.title}
          className={`chip ${
            isActive === filter.title ? styles.active : "ch--primary"
          } ${styles.chip}`}
          onClick={() => {
            setIsActive(filter.title);
            filterDispatch({
              type: filter.type,
              payload: {
                [filter.payloadKey]: filter.payloadValue,
              },
            });
          }}
        >
          {filter.title}
        </span>
      ))}
    </div>
  );
};

export { FilterTags };
