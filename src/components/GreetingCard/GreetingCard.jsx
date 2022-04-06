import { useLocation } from "react-router";
import { useAuth, useFilter } from "../../context";
import styles from "./GreetingCard.module.css";

const GreetingCard = () => {
  const { authState } = useAuth();
  const { filterState, filterDispatch } = useFilter();
  const { pathname } = useLocation();

  return (
    <article
      className={`${styles.card} ${
        pathname === "/explore" ? styles.cardOnExplore : ""
      }`}
    >
      <p className={pathname === "/explore" ? styles.greetingText : ""}>
        Hello {authState.user ? authState.user.username : "there"} 👋
      </p>
      {pathname === "/explore" ? (
        <div className={`input input__icons ${styles.searchWrapper}`}>
          <input
            className={`input__field--text search ${styles.searchInput}`}
            type="text"
            placeholder="Looking for a video? Search here..."
            value={filterState.search}
            onChange={(e) =>
              filterDispatch({
                type: "SEARCH",
                payload: {
                  search: e.target.value,
                },
              })
            }
          />
        </div>
      ) : null}
    </article>
  );
};

export { GreetingCard };
