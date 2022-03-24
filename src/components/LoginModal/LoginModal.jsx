import { useState } from "react";
import { useAuth, useComponents, useHistory, useLikes } from "../../context";
import { guestUser, inputHandler, loginHandler } from "../../utilities";
import { SignupModal } from "../../components";
import styles from "./LoginModal.module.css";

const LoginModal = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const { authDispatch } = useAuth();
  const { componentsDispatch } = useComponents();
  const { historyDispatch } = useHistory();
  const { likesDispatch } = useLikes();

  return (
    <form
      onSubmit={(event) =>
        loginHandler(
          login,
          authDispatch,
          componentsDispatch,
          historyDispatch,
          likesDispatch,
          event
        )
      }
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
            type="text"
            value={login.password}
            placeholder="********"
            onChange={(e) => inputHandler(e, setLogin, "password")}
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
            />
            Remember me!
          </label>
        </div>
        <button className={`cp ${styles.forgetPassword}`}>
          Forget Password?
        </button>
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
