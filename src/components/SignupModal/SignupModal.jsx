import { useState } from "react";
import { Icon } from "@iconify/react";
import { useComponents, useAuth } from "../../context";
import {
  inputHandler,
  signupHandler,
  validateSignupUser,
  icons,
} from "../../utilities";
import { Alert, LoginModal } from "../../components";
import styles from "./SignupModal.module.css";

const SignupModal = () => {
  const [signup, setSignup] = useState({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
    rememberMe: false,
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { authDispatch } = useAuth();
  const { componentsDispatch } = useComponents();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const validation = validateSignupUser(signup);
        if (validation === true) {
          signupHandler(signup, authDispatch, componentsDispatch, event);
        } else {
          setSignup((prevState) => ({
            ...prevState,
            password: "",
            confirmPassword: "",
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
            type={isPasswordVisible ? "text" : "password"}
            value={signup.password}
            placeholder="********"
            onChange={(e) => inputHandler(e, setSignup, "password")}
          />
          <Icon
            className={`icon-md ${styles.showPswdBtn}`}
            icon={isPasswordVisible ? icons.eyeSlash : icons.eye}
            onClick={() => setIsPasswordVisible((prevState) => !prevState)}
          />
          <label className="input__label">Password</label>
        </div>

        <div className="input__password">
          <input
            className="input__field--text password"
            type="password"
            value={signup.confirmPassword}
            placeholder="********"
            onChange={(e) => inputHandler(e, setSignup, "confirmPassword")}
          />
          <label className="input__label">Confirm Password</label>
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
              value={signup.rememberMe}
              onChange={() =>
                setSignup((prevState) => ({
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
