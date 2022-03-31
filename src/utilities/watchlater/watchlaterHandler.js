import {
  addToWatchlaterHandler,
  removeFromWatchlaterHandler,
} from "../../utilities";
import { LoginModal } from "../../components";

const watchlaterHandler = (
  token,
  componentsDispatch,
  watchlaterDispatch,
  isVideoInWatchlater,
  setIsInWatchlater,
  video,
  page
) => {
  if (token) {
    if (isVideoInWatchlater) {
      setIsInWatchlater(false);
      return removeFromWatchlaterHandler(
        video._id,
        watchlaterDispatch,
        componentsDispatch,
        token,
        page
      );
    } else {
      setIsInWatchlater(true);
      return addToWatchlaterHandler(video, watchlaterDispatch, token);
    }
  }
  return componentsDispatch({
    type: "MODAL",
    payload: {
      active: true,
      child: <LoginModal />,
      title: "Login",
    },
  });
};

export { watchlaterHandler };
