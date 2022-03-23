const initialComponentsState = {
  modal: {
    active: false,
    child: "",
    title: "",
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
    default:
      return state;
  }
};

export { initialComponentsState, componentsReducer };
