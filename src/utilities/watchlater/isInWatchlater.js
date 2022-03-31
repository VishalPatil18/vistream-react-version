const isInWatchlater = (video, watchlaterVideos) => {
  return watchlaterVideos.find((currVideo) => currVideo._id === video._id)
    ? true
    : false;
};

export { isInWatchlater };
