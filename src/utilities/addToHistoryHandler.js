import { addToHistoryService } from "../services";

const addToHistoryHandler = async (video, historyDispatch, token) => {
  try {
    const response = await addToHistoryService(video, token);
    console.log(response);
    if (response.status === 201) {
      historyDispatch({
        type: "ADD_TO_HISTORY",
        payload: {
          history: response.data.history.reverse(),
        },
      });
    } else {
      throw new Error("Something went wrong. Please try again later!");
    }
  } catch (error) {
    console.log("Error in add history handler", error);
  }
};

export { addToHistoryHandler };
