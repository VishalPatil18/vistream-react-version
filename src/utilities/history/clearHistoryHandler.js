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

export { clearHistoryHandler };
