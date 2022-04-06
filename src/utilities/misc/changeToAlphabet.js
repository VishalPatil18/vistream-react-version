const changeToAlphabet = (value) => {
  if (value <= 1000) {
    return `${value}`;
  } else if (value <= 1000000) {
    return `${value / 1000}K`;
  } else {
    return `${value / 1000000}M`;
  }
};

export { changeToAlphabet };
