import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";
import { useAuth, useComponents } from "../../context";
import { DrawerTab, LoginModal, CreatePlaylistModal } from "../../components";
import { tabsList, icons } from "../../utilities";
import { ASSETS_URL } from "../../constants";
import styles from "./Drawer.module.css";

const Drawer = () => {
  const { authState } = useAuth();
  const { componentsDispatch } = useComponents();
  const location = useLocation();
  const [currPage, setCurrPage] = useState("/");

  useEffect(() => {
    setCurrPage(location.pathname);
  }, [location]);

  return (
    <div className={styles.drawer}>
      <Link to="/" className={styles.drawerHeader}>
        <img src={`${ASSETS_URL}logo.svg`} className="icon-xl" />
        <p className={`h-4 ${styles.brandName}`}>
          <span className={styles.primaryFont}>VIS</span>TREAM
        </p>
      </Link>
      {tabsList.map((item) => (
        <DrawerTab
          key={item.id}
          title={item.title}
          icon={item.icon}
          to={!authState.token && item.isPrivate ? "/" : item.to}
          active={currPage === item.to ? true : false}
          isPrivate={item.isPrivate}
        />
      ))}
      <button
        className={`button btn-outline-primary ${styles.createPlaylistBtn}`}
        onClick={() =>
          authState.token
            ? componentsDispatch({
                type: "MODAL",
                payload: {
                  active: true,
                  child: <CreatePlaylistModal />,
                  title: "Create Playlist",
                },
              })
            : componentsDispatch({
                type: "MODAL",
                payload: {
                  active: true,
                  child: <LoginModal />,
                  title: "Login",
                },
              })
        }
      >
        <Icon icon={icons.plus} />
        Create Playlist
      </button>
    </div>
  );
};

export { Drawer };
