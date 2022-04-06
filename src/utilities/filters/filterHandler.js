import {
  categoryFilterHandler,
  durationFilterHandler,
  searchHandler,
  sortByFilterHandler,
} from "../../utilities";

const filterHandler = (videos, filterState) => {
  let filteredVideos = videos;

  if (filterState.categories.length >= 1) {
    filteredVideos = categoryFilterHandler(
      filteredVideos,
      filterState.categories
    );
  }

  if (filterState.duration) {
    filteredVideos = durationFilterHandler(
      filteredVideos,
      filterState.duration
    );
  }

  if (filterState.sortBy) {
    filteredVideos = sortByFilterHandler(filteredVideos, filterState.sortBy);
  }

  if (filterState.search) {
    filteredVideos = searchHandler(filteredVideos, filterState.search);
  }

  return filteredVideos;
};

export { filterHandler };
