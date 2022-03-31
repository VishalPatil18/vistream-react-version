const initialWatchlaterState = {
  watchlater: [],
};

const watchlaterReducer = (watchlaterState, watchlaterAction) => {
  switch (watchlaterAction.type) {
    case "INITIAL_WATCHLATER":
      return {
        ...watchlaterState,
        watchlater: watchlaterAction.payload.watchlater,
      };
    case "ADD_TO_WATCHLATER":
      return {
        ...watchlaterState,
        watchlater: watchlaterAction.payload.watchlater,
      };
    case "REMOVE_FROM_WATCHLATER":
      return {
        ...watchlaterState,
        watchlater: watchlaterAction.payload.watchlater,
      };
    case "RESET_WATCHLATER":
      return initialWatchlaterState;
    default:
      return watchlaterState;
  }
};

export { initialWatchlaterState, watchlaterReducer };
