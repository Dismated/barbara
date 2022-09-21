import { CircularProgress, Grid, Typography } from "@mui/material";
import ProductGrid from "./ProductGrid";
import UserWindow from "./UserWindow";
import { useEffect } from "react";
import useFetch from "hooks/useFetch";
import { useSelector } from "react-redux";

const MainDisplay = () => {
  const url = useSelector((state) => state.url);
  const { data, isLoading, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return (
    <Grid container style={{ marginTop: "64px" }} columnSpacing={4}>
      <Grid container item xs={12} md={8} spacing={2}>
        {error && <Typography>Something went wrong</Typography>}
        {isLoading ? (
          <Grid
            item
            xs
            sx={{ display: "flex", justifyContent: "center", m: 8 }}
          >
            <CircularProgress color="primary" />
          </Grid>
        ) : (
          <ProductGrid data={data} />
        )}
      </Grid>
      <Grid item xs={0} md={4} sx={{ display: { xs: "none", md: "block" } }}>
        <UserWindow />
      </Grid>
    </Grid>
  );
};

export default MainDisplay;
