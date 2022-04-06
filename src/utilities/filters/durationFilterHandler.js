const durationFilterHandler = (videos, duration) => {
  switch (duration) {
    case "400":
      return videos.filter(
        (video) => Number(video.videoLength.split(":").join("")) <= 400
      );
    case "400-2000":
      return videos.filter(
        (video) =>
          400 <= Number(video.videoLength.split(":").join("")) &&
          Number(video.videoLength.split(":").join("") <= 2000)
      );
    case "2000":
      return videos.filter(
        (video) => Number(video.videoLength.split(":").join("")) >= 2000
      );
    default:
      return videos;
  }
};

export { durationFilterHandler };
