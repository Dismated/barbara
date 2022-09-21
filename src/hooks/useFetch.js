import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchData = async (url) => {
    setIsLoading(true);
    setHasError(false);
    try {
      const response = await fetch(url);
      const products = await response.json();
      setData(products.products);
    } catch (error) {
      setHasError(true);
    }
    setIsLoading(false);
  };

  return { data, isLoading, hasError, fetchData };
};

export default useFetch;
