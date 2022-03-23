import { Icon } from "@iconify/react";
import { icons } from "../../utilities";
import { useComponents } from "../../context";
import styles from "./Modal.module.css";

const Modal = ({ title, children }) => {
  const { componentsDispatch } = useComponents();
  return (
    <div className={`modal__container ${styles.modalContainer}`}>
      <div className="modal mdl__icons mdl-primary">
        <header className="modal__title">
          <h1 className="h-5">{title}</h1>
          <button
            className={`button btn-action btn-plain-icon modal__title--close ${styles.closeBtn}`}
            onClick={() =>
              componentsDispatch({
                type: "MODAL",
                payload: {
                  active: false,
                  child: "",
                  title: "",
                },
              })
            }
          >
            <Icon icon={icons.closeFilled} />
          </button>
        </header>
        <main className="modal__body">{children}</main>
      </div>
    </div>
  );
};

export { Modal };
