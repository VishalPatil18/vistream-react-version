import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useAuth, useComponents } from "../../context";
import { Alert } from "../../components";
import styles from "./DrawerTab.module.css";

const DrawerTab = ({ title, icon, active, to, isPrivate }) => {
  const { authState } = useAuth();
  const { componentsDispatch } = useComponents();

  return (
    <Link
      onClick={() => {
        if (!authState.token && isPrivate) {
          componentsDispatch({
            type: "ALERT",
            payload: {
              active: true,
              child: (
                <Alert action="warning" message="You are not Logged in!" />
              ),
            },
          });
        }
      }}
      to={to}
      className={`button btn-plain drawer__item ${styles.tab} ${
        active && styles.active
      }`}
    >
      <Icon icon={icon} className="icon-md drawer__item--icon" />
      {title}
    </Link>
  );
};

export { DrawerTab };
