import { addToLikesHandler, removeFromLikesHandler } from "../../utilities";
import { LoginModal } from "../../components";

const likesHandler = (
  token,
  componentsDispatch,
  likesDispatch,
  isVideoLiked,
  setIsLiked,
  video,
  page
) => {
  if (token) {
    if (isVideoLiked) {
      setIsLiked(false);
      return removeFromLikesHandler(
        video._id,
        likesDispatch,
        componentsDispatch,
        token,
        page
      );
    } else {
      setIsLiked(true);
      return addToLikesHandler(video, likesDispatch, token);
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

export { likesHandler };
