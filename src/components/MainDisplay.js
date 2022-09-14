import ProductGrid from "./ProductGrid";
import UserList from "./UserList";
import { Grid } from "@mui/material";

const MainDisplay = () => {
  return (
    <Grid container style={{ marginTop: "100px" }}>
      <Grid container item xs={8} spacing={3}>
        <ProductGrid />
      </Grid>
      <Grid item xs={4}>
        <UserList />
      </Grid>
    </Grid>
  );
};

export default MainDisplay;
