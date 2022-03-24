import { createContext, useContext, useReducer, useEffect } from "react";
import { initialLikesState, likesReducer } from "../redux";
import { useAuth } from "../context";
import { getLikesService } from "../services";

const LikesContext = createContext({
  likesState: {},
  likesDispatch: () => {},
});

const LikesProvider = ({ children }) => {
  const [likesState, likesDispatch] = useReducer(
    likesReducer,
    initialLikesState
  );

  const { authState } = useAuth();

  useEffect(() => {
    authState.token
      ? (async () => {
          try {
            const response = await getLikesService(authState.token);
            likesDispatch({
              type: "INITIAL_LIKES",
              payload: { likes: response.data.likes },
            });
          } catch (error) {
            console.log("ERROR: ", error);
          }
        })()
      : null;
  }, []);

  return (
    <LikesContext.Provider value={{ likesState, likesDispatch }}>
      {children}
    </LikesContext.Provider>
  );
};

const useLikes = () => useContext(LikesContext);

export { LikesProvider, useLikes };
