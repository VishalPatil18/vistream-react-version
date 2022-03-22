const filters = [
  "All",
  "New",
  "Under 4 minutes",
  "4-20 minutes",
  "Over 20 minutes",
  "Most Viewed First",
  "Oldest First",
];
import styles from "./FilterTags.module.css";

const FilterTags = ({ page }) => {
  return (
    <div
      className={`${styles.filtersWrapper}  ${
        page === "homePage" ? styles.homePage : null
      }`}
    >
      {filters.map((item, i) => (
        <span key={i} className={`chip ch--primary ${styles.chip}`}>
          {item}
        </span>
      ))}
    </div>
  );
};

export { FilterTags };
