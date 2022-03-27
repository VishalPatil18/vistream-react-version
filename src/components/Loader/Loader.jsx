import styles from "./Loader.module.css";

const Loader = ({ title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.centerText}>
        Hold on!
        <br />
        {title}
      </div>
      <div className={styles.loader}></div>
    </div>
  );
};

export { Loader };
