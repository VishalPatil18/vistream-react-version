import { clearHistoryService } from "../services";

const clearHistoryHandler = async (historyDispatch, token) => {
  try {
    const response = await clearHistoryService(token);
    if (response.status === 200) {
      historyDispatch({
        type: "CLEAR_HISTORY",
      });
    } else {
      throw new Error("Something went wrong. Please try again later");
    }
  } catch (error) {
    console.log(error);
  }
};

export { clearHistoryHandler };
