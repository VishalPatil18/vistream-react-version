import { removeFromLikesService } from "../../services";

const removeFromLikesHandler = async (
  videoId,
  likesDispatch,
  componentsDispatch,
  token
) => {
  componentsDispatch({
    type: "LOADER",
    payload: {
      active: true,
      title: "Removing from Liked",
    },
  });
  try {
    const response = await removeFromLikesService(videoId, token);
    if (response.status === 200) {
      likesDispatch({
        type: "REMOVE_FROM_LIKES",
        payload: {
          likes: response.data.likes.reverse(),
        },
      });
      componentsDispatch({
        type: "LOADER",
        payload: {
          active: false,
          title: "",
        },
      });
    } else {
      throw new Error("Something went wrong. Please try again later");
    }
  } catch (error) {
    componentsDispatch({
      type: "LOADER",
      payload: {
        active: false,
        title: "",
      },
    });
    alert(error);
  }
};

export { removeFromLikesHandler };
