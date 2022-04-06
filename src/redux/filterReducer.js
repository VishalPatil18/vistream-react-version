const initialFilterState = {
  duration: "",
  sortBy: "",
  categories: [],
  uploadDate: "",
  search: "",
};

const filterReducer = (filterState, filterAction) => {
  switch (filterAction.type) {
    case "CLEAR":
      return initialFilterState;
    case "DURATION":
      return {
        ...filterState,
        duration: filterAction.payload.duration,
      };
    case "SORT_BY":
      return {
        ...filterState,
        sortBy: filterAction.payload.sortBy,
      };
    case "CATEGORISE":
      return {
        ...filterState,
        categories: filterAction.payload.categories,
      };
    case "SEARCH":
      return {
        ...filterState,
        search: filterAction.payload.search,
      };
    default:
      return filterState;
  }
};

export { initialFilterState, filterReducer };
