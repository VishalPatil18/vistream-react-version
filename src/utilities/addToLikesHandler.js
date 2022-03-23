import { addToLikesService } from "../services";

const addToLikesHandler = async (video, likesDispatch, token) => {
  try {
    const response = await addToLikesService(video, token);
    if (response.status === 201) {
      likesDispatch({
        type: "ADD_TO_LIKES",
        payload: {
          likes: response.data.likes,
        },
      });
    } else {
      throw new Error("Something went wrong. Please try again later!");
    }
  } catch (error) {
    alert(error);
  }
};

export { addToLikesHandler };
