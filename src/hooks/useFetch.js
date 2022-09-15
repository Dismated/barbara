import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const response = await fetch(url);
        const stringified = await response.text();
        const regex = /var products =.*/;
        const productString = stringified
          .match(regex)[0]
          .split("=")[1]
          .replace(";", "");
        const products = await JSON.parse(productString);

        setData(products);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);
  return { data, isLoading, hasError };
};

export default useFetch;
