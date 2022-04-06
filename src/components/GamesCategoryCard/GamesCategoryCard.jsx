import { Icon } from "@iconify/react";
import { icons } from "../../utilities";
import { useFilter } from "../../context";
import { useNavigate } from "react-router";
import styles from "./GamesCategoryCard.module.css";

const GamesCategoryCard = ({ imageSrc, title, likes }) => {
  const { filterDispatch } = useFilter();
  const navigate = useNavigate();

  return (
    <article
      className={styles.card}
      onClick={() => {
        filterDispatch({
          type: "CATEGORISE",
          payload: {
            categories: [title],
          },
        });
        navigate("/explore");
      }}
    >
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
