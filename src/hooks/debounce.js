const debounce = (func, delay) => {
  let timer;
  return (event) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(func, delay, event);
  };
};

export default debounce;
