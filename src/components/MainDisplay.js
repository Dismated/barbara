import { Grid, LinearProgress, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ProductGrid from "./ProductGrid";
import UserWindow from "./UserWindow";
import { setMainProduct } from "reducers/mainProductReducer";
import { useEffect } from "react";
import useFetch from "hooks/useFetch";

const MainDisplay = () => {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.url);
  const { data, isLoading, error } = useFetch(url);
  useEffect(() => {
    dispatch(setMainProduct(data));
  });
  return (
    <Grid container style={{ marginTop: "64px" }} columnSpacing={4}>
      <Grid container item xs={12} md={8} spacing={2}>
        {error && <Typography>Something went wrong</Typography>}
        {isLoading ? (
          <Grid item>
            <LinearProgress color="primary" />
          </Grid>
        ) : (
          <ProductGrid />
        )}
      </Grid>
      <Grid item xs={0} md={4} sx={{ display: { xs: "none", md: "block" } }}>
        <UserWindow />
      </Grid>
    </Grid>
  );
};

export default MainDisplay;
