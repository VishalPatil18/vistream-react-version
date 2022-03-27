import { removeFromHistoryService } from "../../services";

const removeFromHistoryHandler = async (
  videoId,
  historyDispatch,
  componentsDispatch,
  token
) => {
  componentsDispatch({
    type: "LOADER",
    payload: {
      active: true,
      title: "Removing from History",
    },
  });
  try {
    const response = await removeFromHistoryService(videoId, token);
    if (response.status === 200) {
      historyDispatch({
        type: "REMOVE_FROM_HISTORY",
        payload: {
          history: response.data.history.reverse(),
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

export { removeFromHistoryHandler };
