import { useNavigate } from "react-router-dom";
import styles from "./Error404.module.css";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.error}>
      <img
        className={styles.img}
        src="https://res.cloudinary.com/dbjdu0hvl/image/upload/v1649268228/VISKart/error404_opuo6r.jpg"
        alt="error404"
      />
      <h1 className={`h-4 ${styles.errorHeading}`}>404 - Page Not Found!</h1>
      <p className={`bd-4 ${styles.errorMsg}`}>
        The page you are looking for doesn't exist or any other error occured.
      </p>
      <button
        className={`button btn-solid-primary ${styles.btn}`}
        onClick={() => navigate("/explore")}
      >
        Continue Watching
      </button>
    </div>
  );
};

export { Error404 };
