const isInHistory = (video, historyVideos) => {
  return historyVideos.find((currVideo) => currVideo._id === video._id)
    ? true
    : false;
};

export { isInHistory };
