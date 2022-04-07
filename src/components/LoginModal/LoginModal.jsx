import { useState } from "react";
import { Icon } from "@iconify/react";
import {
  useAuth,
  useComponents,
  useHistory,
  useLikes,
  usePlaylists,
  useWatchlater,
} from "../../context";
import {
  guestUser,
  icons,
  inputHandler,
  loginHandler,
  validateLoginUser,
} from "../../utilities";
import { Alert, SignupModal } from "../../components";
import styles from "./LoginModal.module.css";

const LoginModal = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { authDispatch } = useAuth();
  const { componentsDispatch } = useComponents();
  const { historyDispatch } = useHistory();
  const { likesDispatch } = useLikes();
  const { playlistsDispatch } = usePlaylists();
  const { watchlaterDispatch } = useWatchlater();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const validation = validateLoginUser(login);
        if (validation === true) {
          loginHandler(
            login,
            authDispatch,
            componentsDispatch,
            historyDispatch,
            likesDispatch,
            playlistsDispatch,
            watchlaterDispatch,
            event
          );
        } else {
          setLogin((prevState) => ({
            ...prevState,
            password: "",
          }));
          componentsDispatch({
            type: "ALERT",
            payload: {
              active: true,
              child: <Alert action="warning" message={validation} />,
            },
          });
        }
      }}
    >
      <div className="input input__icons input__premium">
        <div className="input__email">
          <input
            className="input__field--text email"
            type="email"
            value={login.email}
            placeholder="bablu_tailor@gmail.com"
            onChange={(e) => inputHandler(e, setLogin, "email")}
          />
          <label className="input__label">Email</label>
        </div>

        <div className="input__password">
          <input
            className="input__field--text password"
            type={isPasswordVisible ? "text" : "password"}
            value={login.password}
            placeholder="********"
            onChange={(e) => inputHandler(e, setLogin, "password")}
          />
          <Icon
            className={`icon-md ${styles.showPswdBtn}`}
            icon={isPasswordVisible ? icons.eyeSlash : icons.eye}
            onClick={() => setIsPasswordVisible((prevState) => !prevState)}
          />
          <label className="input__label">Password</label>
        </div>
      </div>
      <div className={`remember-me__container ${styles.rememberMeContainer}`}>
        <div className="checkbox">
          <label
            className={`radio__label ${styles.rememberMeLabel}`}
            htmlFor="remember-me"
          >
            <input
              className="input__field--checkbox"
              id="remember-me"
              type="checkbox"
              value={login.rememberMe}
              onChange={() =>
                setLogin((prevState) => ({
                  ...prevState,
                  rememberMe: !prevState.rememberMe,
                }))
              }
            />
            Remember me!
          </label>
        </div>
      </div>
      <footer className={`modal__footer ${styles.modalFooter}`}>
        <button
          className={`button btn-plain btn-primary ${styles.guestLogin}`}
          onClick={(e) => {
            e.preventDefault();
            return setLogin(guestUser);
          }}
        >
          Guest Login
        </button>
        <input
          className="button btn-solid-primary modal__footer--btn"
          value="login"
          type="submit"
        />
        <button
          className="button btn-outline-primary modal__footer--btn"
          onClick={(e) => {
            e.preventDefault();
            return componentsDispatch({
              type: "MODAL",
              payload: {
                active: true,
                child: <SignupModal />,
                title: "SignUp",
              },
            });
          }}
        >
          Sign Up
        </button>
      </footer>
    </form>
  );
};

export { LoginModal };
