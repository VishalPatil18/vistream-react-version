const findTrendingVideos = (videos) => {
  return [...videos].sort((first, second) => {
    const firstRatio =
      first.views / (new Date(first.date).getTime() - new Date().getTime());
    const secondRatio =
      second.views / (new Date(second.date).getTime() - new Date().getTime());
    return firstRatio - secondRatio;
  });
};

export { findTrendingVideos };
