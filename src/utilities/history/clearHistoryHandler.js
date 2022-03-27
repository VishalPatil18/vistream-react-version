import { Alert } from "../../components";
import { clearHistoryService } from "../../services";

const clearHistoryHandler = async (
  historyDispatch,
  componentsDispatch,
  token
) => {
  componentsDispatch({
    type: "LOADER",
    payload: {
      active: true,
      title: "Clearing History",
    },
  });
  try {
    const response = await clearHistoryService(token);
    if (response.status === 200) {
      historyDispatch({
        type: "CLEAR_HISTORY",
      });
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
          child: <Alert action="success" message="History Cleared!" />,
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
  }
};

export { clearHistoryHandler };
