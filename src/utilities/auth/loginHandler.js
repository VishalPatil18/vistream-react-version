import {
  loginService,
  getHistoryService,
  getLikesService,
  getPlaylistsService,
} from "../../services";
import { Alert } from "../../components";

const loginHandler = async (
  login,
  authDispatch,
  componentsDispatch,
  historyDispatch,
  likesDispatch,
  playlistsDispatch,
  event
) => {
  event.preventDefault();
  componentsDispatch({
    type: "MODAL",
    payload: {
      active: false,
      child: "",
      title: "",
    },
  });
  componentsDispatch({
    type: "LOADER",
    payload: {
      active: true,
      title: "Logging In...",
    },
  });
  try {
    const response = await loginService(login);
    if (response.status === 200) {
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("user", JSON.stringify(response.data.foundUser));
      authDispatch({
        type: "LOGIN",
        payload: {
          token: response.data.encodedToken,
          user: response.data.foundUser,
        },
      });
      const responseHistory = await getHistoryService(
        response.data.encodedToken
      );
      historyDispatch({
        type: "INITIAL_HISTORY",
        payload: {
          history: responseHistory.data.history,
        },
      });
      const responseLikes = await getLikesService(response.data.encodedToken);
      likesDispatch({
        type: "INITIAL_LIKES",
        payload: {
          likes: responseLikes.data.likes,
        },
      });
      const responsePlaylists = await getPlaylistsService(
        response.data.encodedToken
      );
      playlistsDispatch({
        type: "INITIAL_PLAYLISTS",
        payload: {
          playlists: responsePlaylists.data.playlists,
        },
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
          child: <Alert action="success" message="Login Successful" />,
        },
      });
    } else if (response.status === 201) {
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
          child: <Alert action="danger" message={"Incorrect Password!"} />,
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
        child: <Alert action="danger" message="User Email not found!" />,
      },
    });
  }
};

export { loginHandler };
