import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../reducers/productReducer";

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const ProductGrid = () => {
  const dispatch = useDispatch();
  const mainProduct = useSelector((state) => state.mainProduct);

  const addToBasket = async (event, product) => {
    event.preventDefault();
    dispatch(createProduct(product));
  };

  const productGenerator = (products) => {
    if (products) {
      return products.map((e) => (
        <Grid item xs={3} key={e.id}>
          <Card style={{ height: "400px" }}>
            <CardMedia
              component="img"
              height="200"
              image={e.image}
              alt={e.title}
              sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            ></CardMedia>
            <CardContent>
              <Typography>{e.title}</Typography>
              <Typography>{e.price}€</Typography>
              <CardActions>
                <Button onClick={(event) => addToBasket(event, e)}>
                  Add To Cart
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      ));
    }
  };

  return <>{productGenerator(mainProduct)}</>;
};

export default ProductGrid;
