import ProductGrid from "./ProductGrid";
import UserProductList from "./UserProductList";
import { Grid, Typography } from "@mui/material";
import useFetch from "../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setMainProduct } from "../reducers/mainProductReducer";

const MainDisplay = () => {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.url);

  const { data, isLoading, error } = useFetch(url);
  useEffect(() => {
    dispatch(setMainProduct(data));
  });

  return (
    <Grid container style={{ marginTop: "100px" }}>
      <Grid container item xs={8} spacing={3}>
        {error && <Typography>Something went wrong</Typography>}
        {isLoading ? <Typography>Loading...</Typography> : <ProductGrid />}
      </Grid>
      <Grid item xs={4}>
        <UserProductList />
      </Grid>
    </Grid>
  );
};

export default MainDisplay;
