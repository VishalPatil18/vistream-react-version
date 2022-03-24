const initialLikesState = {
  likes: [],
};

const likesReducer = (likesState, likesAction) => {
  switch (likesAction.type) {
    case "INITIAL_LIKES":
      return {
        ...likesState,
        likes: likesAction.payload.likes,
      };
    case "ADD_TO_LIKES":
      return {
        ...likesState,
        likes: likesAction.payload.likes,
      };
    case "REMOVE_FROM_LIKES":
      return {
        ...likesState,
        likes: likesAction.payload.likes,
      };
    case "RESET_LIKES":
      return initialLikesState;
    default:
      return likesState;
  }
};

export { initialLikesState, likesReducer };
