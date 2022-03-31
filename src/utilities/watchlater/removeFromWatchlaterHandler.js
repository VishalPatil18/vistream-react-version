import { Alert } from "../../components";
import { removeFromWatchlaterService } from "../../services";

const removeFromWatchlaterHandler = async (
  videoId,
  watchlaterDispatch,
  componentsDispatch,
  token,
  page = ""
) => {
  if (page === "watchlater") {
    componentsDispatch({
      type: "LOADER",
      payload: {
        active: true,
        title: "Removing from Watchlater",
      },
    });
  }
  try {
    const response = await removeFromWatchlaterService(videoId, token);
    if (response.status === 200) {
      watchlaterDispatch({
        type: "REMOVE_FROM_WATCHLATER",
        payload: {
          watchlater: response.data.watchlater.reverse(),
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

export { removeFromWatchlaterHandler };
