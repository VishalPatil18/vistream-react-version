import { addToWatchlaterService } from "../../services";

const addToWatchlaterHandler = async (video, watchlaterDispatch, token) => {
  try {
    const response = await addToWatchlaterService(video, token);
    if (response.status === 201) {
      watchlaterDispatch({
        type: "ADD_TO_WATCHLATER",
        payload: {
          watchlater: response.data.watchlater.reverse(),
        },
      });
    } else {
      throw new Error("Something went wrong. Please try again later!");
    }
  } catch (error) {
    alert(error);
  }
};

export { addToWatchlaterHandler };
