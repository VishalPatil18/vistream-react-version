const isLiked = (video, likedVideos) => {
  return likedVideos.find((currVideo) => currVideo._id === video._id)
    ? true
    : false;
};

export { isLiked };
