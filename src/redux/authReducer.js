const initialAuthState = {
  token: "",
  user: "",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_CHECK":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case "LOGOUT":
      return { ...state, token: "", user: "" };
    case "SIGNUP":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export { initialAuthState, authReducer };
