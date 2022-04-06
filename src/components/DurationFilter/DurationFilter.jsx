import { useFilter } from "../../context";
import styles from "./DurationFilter.module.css";

const DurationFilter = () => {
  const { filterState, filterDispatch } = useFilter();

  return (
    <div className={styles.buttonsWrapper}>
      <div className={styles.inputWrapper}>
        <input
          type="radio"
          id="under4min"
          name="duration"
          checked={filterState.duration === "400"}
          onChange={() =>
            filterDispatch({
              type: "DURATION",
              payload: {
                duration: "400",
              },
            })
          }
        />
        <label className={styles.filterByBtn} htmlFor="under4min">
          Under 4 minutes
        </label>
      </div>
      <div className={styles.inputWrapper}>
        <input
          type="radio"
          id="4to20min"
          name="duration"
          checked={filterState.duration === "400-2000"}
          onChange={() =>
            filterDispatch({
              type: "DURATION",
              payload: {
                duration: "400-2000",
              },
            })
          }
        />
        <label className={styles.filterByBtn} htmlFor="4to20min">
          4 - 20 minutes
        </label>
      </div>
      <div className={styles.inputWrapper}>
        <input
          type="radio"
          id="over20min"
          name="duration"
          checked={filterState.duration === "2000"}
          onChange={() =>
            filterDispatch({
              type: "DURATION",
              payload: {
                duration: "2000",
              },
            })
          }
        />
        <label className={styles.filterByBtn} htmlFor="over20min">
          Over 20 minutes
        </label>
      </div>
    </div>
  );
};

export { DurationFilter };
