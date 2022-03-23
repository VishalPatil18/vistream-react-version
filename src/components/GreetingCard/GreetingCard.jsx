import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { LoginModal } from "../../components";
import { useAuth, useComponents } from "../../context";
import { icons } from "../../utilities";
import styles from "./GreetingCard.module.css";

const GreetingCard = () => {
  const { authState } = useAuth();
  const { componentsDispatch } = useComponents();

  return (
    <article className={styles.card}>
      Hello {authState.user ? authState.user.username : "there"} 👋
      {authState.user ? (
        <Link to="/settings">
          <button className={`button btn-round ${styles.profileBadge}`}>
            <Icon icon={icons.user} />
            {authState.user.username}
          </button>
        </Link>
      ) : (
        <button
          className={`button btn-round ${styles.profileBadge}`}
          onClick={() =>
            componentsDispatch({
              type: "MODAL",
              payload: {
                active: true,
                child: <LoginModal />,
                title: "Login",
              },
            })
          }
        >
          <Icon icon={icons.login} />
          Login
        </button>
      )}
    </article>
  );
};

export { GreetingCard };
