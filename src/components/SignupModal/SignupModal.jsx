import { useState } from "react";
import { useComponents, useAuth } from "../../context";
import { inputHandler, signupHandler } from "../../utilities";
import { LoginModal } from "../../components";
import styles from "./SignupModal.module.css";

const SignupModal = () => {
  const [signup, setSignup] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { authDispatch } = useAuth();
  const { componentsDispatch } = useComponents();

  return (
    <form
      onSubmit={(event) =>
        signupHandler(signup, authDispatch, componentsDispatch, event)
      }
    >
      <div className="input input__icons input__premium">
        <div className="input__username">
          <input
            className="input__field--text user"
            type="text"
            placeholder="bablu_tailor"
            onChange={(e) => inputHandler(e, setSignup, "username")}
          />
          <label className="input__label">Username</label>
        </div>

        <div className="input__email">
          <input
            className="input__field--text email"
            type="email"
            value={signup.email}
            placeholder="bablu_tailor@gmail.com"
            onChange={(e) => inputHandler(e, setSignup, "email")}
          />
          <label className="input__label">Email</label>
        </div>

        <div className="input__password">
          <input
            className="input__field--text password"
            type="text"
            value={signup.password}
            placeholder="********"
            onChange={(e) => inputHandler(e, setSignup, "password")}
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
      </div>
      <footer className={`modal__footer ${styles.modalFooter}`}>
        <input
          className="button btn-solid-primary modal__footer--btn"
          value="Signup"
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
                child: <LoginModal />,
                title: "Login",
              },
            });
          }}
        >
          Login
        </button>
      </footer>
    </form>
  );
};

export { SignupModal };
