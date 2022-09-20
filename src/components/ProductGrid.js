import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "reducers/productReducer";

const ProductGrid = () => {
  const dispatch = useDispatch();
  const mainProduct = useSelector((state) => state.mainProduct);
  const productWindow = useSelector((state) => state.productWindow);

  const addToBasket = async (event, product) => {
    event.preventDefault();
    dispatch(createProduct(product, productWindow));
  };
  const productGenerator = (products) => {
    if (products)
      return products.map((e) => (
        <Grid item xs={6} sm={4} md={3} key={e.id}>
          <Card
            sx={{
              height: "300px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="img"
              height="144px"
              image={e.image}
              alt={e.title}
              sx={{ padding: "0 1em 0 1em", objectFit: "contain" }}
            ></CardMedia>
            <CardContent
              sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "space-between",
                flexDirection: "column",
                "&:last-child": {
                  padding: 0,
                },
              }}
            >
              <Typography sx={{ textAlign: "center", px: "10px", pt: "10px" }}>
                {e.title}
              </Typography>
              <div>
                <Typography
                  sx={{ textAlign: "center" }}
                  color="primary"
                  variant="h5"
                >
                  {e.price}€
                </Typography>
                <CardActions>
                  <Button
                    onClick={(event) => addToBasket(event, e)}
                    variant="contained"
                    sx={{ width: "100%" }}
                  >
                    Add To Cart
                  </Button>
                </CardActions>
              </div>
            </CardContent>
          </Card>
        </Grid>
      ));
  };

  return <>{productGenerator(mainProduct)}</>;
};

export default ProductGrid;
