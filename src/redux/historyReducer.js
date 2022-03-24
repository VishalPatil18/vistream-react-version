const initialHistoryState = {
  history: [],
};

const historyReducer = (historyState, historyAction) => {
  switch (historyAction.type) {
    case "INITIAL_HISTORY":
      return {
        ...historyState,
        history: historyAction.payload.history,
      };
    case "ADD_TO_HISTORY":
      return {
        ...historyState,
        history: historyAction.payload.history,
      };
    case "REMOVE_FROM_HISTORY":
      return {
        ...historyState,
        history: historyAction.payload.history,
      };
    case "CLEAR_HISTORY":
      return initialHistoryState;
    default:
      return historyState;
  }
};

export { initialHistoryState, historyReducer };
