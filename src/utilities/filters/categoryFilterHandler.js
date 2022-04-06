const categoryFilterHandler = (videos, categories) => {
  return videos.filter((video) => {
    for (let i = 0; i < categories.length; i++) {
      const isCategoryPresent = video.category.find(
        (videoCategory) => videoCategory === categories[i]
      );
      if (isCategoryPresent) return true;
    }
    return false;
  });
};

export { categoryFilterHandler };
