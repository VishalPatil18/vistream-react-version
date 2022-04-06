const searchHandler = (videos, searchText) => {
  return videos.filter((video) =>
    video.title.toLowerCase().includes(searchText.toLowerCase())
  );
};

export { searchHandler };
