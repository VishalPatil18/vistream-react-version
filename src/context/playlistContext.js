import { createContext, useContext, useReducer, useEffect } from "react";
import { initialPlaylistsState, playlistsReducer } from "../redux";
import { useAuth } from "../context";
import { getPlaylistsService } from "../services";

const PlaylistsContext = createContext({
  playlistsState: {},
  playlistsDispatch: () => {},
});

const PlaylistsProvider = ({ children }) => {
  const [playlistsState, playlistsDispatch] = useReducer(
    playlistsReducer,
    initialPlaylistsState
  );

  const { authState } = useAuth();

  useEffect(() => {
    authState.token
      ? (async () => {
          try {
            const response = await getPlaylistsService(authState.token);
            playlistsDispatch({
              type: "INITIAL_PLAYLISTS",
              payload: { playlists: response.data.playlists },
            });
          } catch (error) {
            console.log("ERROR: ", error);
          }
        })()
      : null;
  }, []);

  return (
    <PlaylistsContext.Provider value={{ playlistsState, playlistsDispatch }}>
      {children}
    </PlaylistsContext.Provider>
  );
};

const usePlaylists = () => useContext(PlaylistsContext);

export { PlaylistsProvider, usePlaylists };
