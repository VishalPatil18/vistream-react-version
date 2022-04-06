import { createContext, useContext, useReducer } from "react";
import { initialFilterState, filterReducer } from "../redux";

const FilterContext = createContext({
  filterState: {},
  filterDispatch: () => {},
});

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilterState
  );

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
