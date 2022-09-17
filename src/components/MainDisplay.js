import ProductGrid from "./ProductGrid";
import UserWindow from "./UserWindow";
import { Grid, Typography, LinearProgress } from "@mui/material";
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
    <Grid container style={{ marginTop: "64px" }} columnSpacing={4}>
      <Grid container item xs={8} spacing={3}>
        {error && <Typography>Something went wrong</Typography>}
        {isLoading ? (
          <Grid xs item>
            <LinearProgress color="primary" />
          </Grid>
        ) : (
          <ProductGrid />
        )}
      </Grid>
      <Grid item xs={4}>
        <UserWindow />
      </Grid>
    </Grid>
  );
};

export default MainDisplay;
