import { useAuth } from "../../context";
import styles from "./GreetingCard.module.css";

const GreetingCard = () => {
  const { authState } = useAuth();

  return (
    <article className={styles.card}>
      Hello {authState.user ? authState.user.username : "there"} 👋
    </article>
  );
};

export { GreetingCard };
