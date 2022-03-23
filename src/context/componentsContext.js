import { initialComponentsState, componentsReducer } from "../redux";
import { createContext, useContext, useReducer } from "react";

const ComponentsContext = createContext({
  componentState: {},
  componentsDispatch: () => {},
});

const ComponentsProvider = ({ children }) => {
  const [componentsState, componentsDispatch] = useReducer(
    componentsReducer,
    initialComponentsState
  );

  return (
    <ComponentsContext.Provider value={{ componentsState, componentsDispatch }}>
      {children}
    </ComponentsContext.Provider>
  );
};

const useComponents = () => useContext(ComponentsContext);

export { ComponentsProvider, useComponents };
