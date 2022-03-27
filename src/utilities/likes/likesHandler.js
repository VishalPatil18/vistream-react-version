import { addToLikesHandler, removeFromLikesHandler } from "../../utilities";
import { LoginModal } from "../../components";

const likesHandler = (
  token,
  componentsDispatch,
  liked,
  likesDispatch,
  setLiked,
  video
) => {
  if (token) {
    if (liked) {
      setLiked(false);
      return removeFromLikesHandler(
        video._id,
        likesDispatch,
        componentsDispatch,
        token
      );
    } else {
      setLiked(true);
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
