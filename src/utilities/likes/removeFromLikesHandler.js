import { Alert } from "../../components";
import { removeFromLikesService } from "../../services";

const removeFromLikesHandler = async (
  videoId,
  likesDispatch,
  componentsDispatch,
  token,
  page=""
) => {
  if(page === "liked") {
    componentsDispatch({
      type: "LOADER",
      payload: {
        active: true,
        title: "Removing from Liked",
      },
    });
  }
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
    }
  } catch (error) {
    componentsDispatch({
      type: "LOADER",
      payload: {
        active: false,
        title: "",
      },
    });
    componentsDispatch({
      type: "ALERT",
      payload: {
        active: true,
        child: (
          <Alert action="danger" message={error.response.data.errors[0]} />
        ),
      },
    });
  }
};

export { removeFromLikesHandler };
