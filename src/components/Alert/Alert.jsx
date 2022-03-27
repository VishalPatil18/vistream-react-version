import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { useComponents } from "../../context";
import { icons } from "../../utilities";
import styles from "./Alert.module.css";

const Alert = ({ action = "info", message = "" }) => {
  const { componentsDispatch } = useComponents();

  const themeClass = (() => {
    switch (action) {
      case "info":
        return styles.info;
      case "success":
        return styles.success;
      case "danger":
        return styles.danger;
      case "warning":
        return styles.warning;
      default:
        return styles.info;
    }
  })();

  useEffect(() => {
    setTimeout(
      () =>
        componentsDispatch({
          type: "ALERT",
          payload: {
            active: false,
            child: "",
          },
        }),
      3000
    );
  }, []);

  return (
    <div className={`${styles.alert} ${themeClass}`}>
      <Icon icon={icons[action]} className={styles.leftIcon} />
      {message}
      <Icon
        icon={icons.close}
        className={styles.rightIcon}
        onClick={() =>
          componentsDispatch({
            type: "ALERT",
            payload: {
              active: false,
              child: "",
            },
          })
        }
      />
    </div>
  );
};

export { Alert };
