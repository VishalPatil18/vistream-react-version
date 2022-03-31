import { createContext, useContext, useReducer, useEffect } from "react";
import { watchlaterReducer, initialWatchlaterState } from "../redux";
import { useAuth } from "../context";
import { getWatchlaterService } from "../services";

const WatchlaterContext = createContext({
  watchlaterState: {},
  watchlaterDispatch: () => {},
});

const WatchlaterProvider = ({ children }) => {
  const [watchlaterState, watchlaterDispatch] = useReducer(
    watchlaterReducer,
    initialWatchlaterState
  );

  const { authState } = useAuth();

  useEffect(() => {
    authState.token
      ? (async () => {
          try {
            const response = await getWatchlaterService(authState.token);
            if (response.status === 201) {
              watchlaterDispatch({
                type: "INITIAL_WATCHLATER",
                payload: { watchlater: response.data.watchlater },
              });
            } else {
              throw new Error("Something went wrong! Please try again later");
            }
          } catch (error) {
            console.log("ERROR: ", error);
          }
        })()
      : null;
  }, []);

  return (
    <WatchlaterContext.Provider value={{ watchlaterState, watchlaterDispatch }}>
      {children}
    </WatchlaterContext.Provider>
  );
};

const useWatchlater = () => useContext(WatchlaterContext);

export { WatchlaterProvider, useWatchlater };
