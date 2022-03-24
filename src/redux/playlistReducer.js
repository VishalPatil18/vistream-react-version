const initialPlaylistsState = {
  playlists: {},
};

const playlistsReducer = (playlistsState, playlistsAction) => {
  switch (playlistsAction.type) {
    case "INITIAL_PLAYLISTS":
      return {
        ...playlistsState,
        playlists: playlistsAction.payload.playlists,
      };
    case "CREATE_NEW_PLAYLIST":
      return {
        ...playlistsState,
        playlists: playlistsAction.payload.playlists,
      };
    case "REMOVE_FROM_PLAYLISTS":
      return {
        ...playlistsState,
        playlists: playlistsAction.payload.playlists,
      };
    case "ADD_VIDEO_TO_PLAYLIST":
      return {
        ...playlistsState,
        playlists: playlistsState.playlists.reduce((acc, curr) => {
          if (curr._id === playlistsAction.payload.playlistId) {
            acc = [...acc, playlistsAction.payload.playlistVideoAdded];
          } else {
            acc = [...acc, curr];
          }
          return acc;
        }, []),
      };
    case "REMOVE_VIDEO_FROM_PLAYLIST":
      return {
        ...playlistsState,
        playlists: playlistsState.playlists.reduce((acc, curr) => {
          if (curr._id === playlistsAction.payload.playlistId) {
            acc = [...acc, playlistsAction.payload.playlistVideoRemoved];
          } else {
            acc = [...acc, curr];
          }
          return acc;
        }, []),
      };
    case "CLEAR_PLAYLIST":
      return initialPlaylistsState;
    default:
      return playlistsState;
  }
};

export { initialPlaylistsState, playlistsReducer };
