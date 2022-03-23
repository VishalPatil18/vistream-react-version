import { removeFromLikesService } from "../services";

const removeFromLikesHandler = async (videoId, likesDispatch, token) => {
  try {
    const response = await removeFromLikesService(videoId, token);
    if (response.status === 200) {
      likesDispatch({
        type: "REMOVE_FROM_LIKES",
        payload: {
          likes: response.data.likes,
        },
      });
    } else {
      throw new Error("Something went wrong. Please try again later");
    }
  } catch (error) {
    console.log(error);
  }
};

export { removeFromLikesHandler };
