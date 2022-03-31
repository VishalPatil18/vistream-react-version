import { addToHistoryService } from "../../services";

const addToHistoryHandler = async (video, historyDispatch, token) => {
  try {
    const response = await addToHistoryService(video, token);
    if (response.status === 201) {
      historyDispatch({
        type: "ADD_TO_HISTORY",
        payload: {
          history: response.data.history.reverse(),
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export { addToHistoryHandler };
