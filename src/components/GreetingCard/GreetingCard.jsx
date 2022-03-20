import { Icon } from "@iconify/react";
import { icons } from "../../utilities";
import styles from "./GreetingCard.module.css";

const GreetingCard = () => {
  return (
    <article className={styles.card}>
      Hello Bablu 👋
      <button className={`button btn-round ${styles.profileBadge}`}>
        <Icon icon={icons.user} />
        Bablu
      </button>
    </article>
  );
};

export { GreetingCard };
