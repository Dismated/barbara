const endpoints = (amount, query) => {
  return `&limit=${amount}&query=${query}`;
};

export default endpoints;
