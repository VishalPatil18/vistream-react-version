const inputHandler = (e, setterFunction, inputType) => {
  setterFunction((prevState) => ({
    ...prevState,
    [inputType]: e.target.value,
  }));
};

export { inputHandler };
