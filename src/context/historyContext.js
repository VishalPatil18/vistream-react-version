import { createContext, useContext, useReducer, useEffect } from "react";
import { useAuth } from "../context";
import { getHistoryService } from "../services";
import { initialHistoryState, historyReducer } from "../redux";

const HistoryContext = createContext({
  historyState: {},
  historyDispatch: () => {},
});

const HistoryProvider = ({ children }) => {
  const [historyState, historyDispatch] = useReducer(
    historyReducer,
    initialHistoryState
  );

  const { authState } = useAuth();

  useEffect(() => {
    authState.token
      ? (async () => {
          try {
            const response = await getHistoryService(authState.token);
            historyDispatch({
              type: "INITIAL_HISTORY",
              payload: { history: response.data.history },
            });
          } catch (error) {
            console.log("ERROR: ", error);
          }
        })()
      : null;
  }, []);

  return (
    <HistoryContext.Provider value={{ historyState, historyDispatch }}>
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);

export { HistoryProvider, useHistory };
