import { Icon } from "@iconify/react";
import { icons } from "../../utilities";
import styles from "./GamesCategoryCard.module.css";

const GamesCategoryCard = ({ imageSrc, title, likes }) => {
  return (
    <article className={styles.card}>
      <img src={imageSrc} className={styles.image} />
      <div className={styles.body}>
        <h1 className={`h-5 ${styles.title}`}>{title}</h1>
        <button className={styles.likeButton}>
          <Icon icon={icons.heart} className={styles.likeBtn} />
          <small className={styles.likeButtonCaption}>{likes}k</small>
        </button>
      </div>
    </article>
  );
};

export { GamesCategoryCard };
