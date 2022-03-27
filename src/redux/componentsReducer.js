const initialComponentsState = {
  modal: {
    active: false,
    child: "",
    title: "",
  },
  loader: {
    active: false,
    title: "",
  },
  alert: {
    active: false,
    child: "",
  },
};

const componentsReducer = (state, action) => {
  switch (action.type) {
    case "MODAL":
      return {
        ...state,
        modal: {
          ...state.modal,
          active: action.payload.active,
          child: action.payload.child,
          title: action.payload.title,
        },
      };
    case "LOADER":
      return {
        ...state,
        loader: {
          ...state.loader,
          active: action.payload.active,
          title: action.payload.title,
        },
      };
    case "ALERT":
      return {
        ...state,
        alert: {
          ...state.alert,
          active: action.payload.active,
          child: action.payload.child,
        },
      };
    default:
      return state;
  }
};

export { initialComponentsState, componentsReducer };
