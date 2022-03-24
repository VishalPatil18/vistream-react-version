import { removeFromHistoryService } from "../services";

const removeFromHistoryHandler = async (videoId, historyDispatch, token) => {
  try {
    const response = await removeFromHistoryService(videoId, token);
    if (response.status === 200) {
      historyDispatch({
        type: "REMOVE_FROM_HISTORY",
        payload: {
          history: response.data.history.reverse(),
        },
      });
    } else {
      throw new Error("Something went wrong. Please try again later");
    }
  } catch (error) {
    console.log(error);
  }
};

export { removeFromHistoryHandler };
