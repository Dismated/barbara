import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useFetch = (url, func, execute = true, reset = false) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        const stringified = await response.text();
        if (stringified.length > 1) {
          const regex = /var products =.*/;
          const productString = stringified
            .match(regex)[0]
            .split("=")[1]
            .replace(";", "");
          const products = await JSON.parse(productString);
          dispatch(func(products));
          if (reset) reset(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (execute) {
      fetchProducts();
    }
  }, [dispatch, url, func, execute, reset]);
};

export default useFetch;
