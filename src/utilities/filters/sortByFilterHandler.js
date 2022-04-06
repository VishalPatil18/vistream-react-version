const sortByFilterHandler = (videos, sortBy) => {
  switch (sortBy) {
    case "likes":
      return [...videos].sort((first, second) => second.likes - first.likes);
    case "views":
      return [...videos].sort((first, second) => second.views - first.views);
    case "oldest":
      return [...videos].sort(
        (first, second) =>
          new Date(first.date).getTime() - new Date(second.date).getTime()
      );
    case "newest":
      return [...videos].sort(
        (first, second) =>
          new Date(second.date).getTime() - new Date(first.date).getTime()
      );
    default:
      return videos;
  }
};

export { sortByFilterHandler };
