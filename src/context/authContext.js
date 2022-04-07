import { createContext, useContext, useReducer, useEffect } from "react";
import { initialAuthState, authReducer } from "../redux";

const AuthContext = createContext({
  authState: {},
  authDispatch: () => {},
});

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

  useEffect(() => {
    try {
      const currentUser = localStorage.getItem("user");
      const currentToken = localStorage.getItem("token");
      if (currentUser && currentToken)
        authDispatch({
          type: "INITIAL_CHECK",
          payload: {
            token: currentToken,
            user: JSON.parse(currentUser),
          },
        });
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
