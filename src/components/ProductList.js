import { useSelector, useDispatch } from "react-redux";
import { changedQuantity, removeProduct } from "../reducers/productReducer";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { initializeProduct } from "../reducers/productReducer";
import {
  List,
  ListItem,
  ListItemText,
  ButtonGroup,
  Button,
  TextField,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";

const ProductList = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const productWindow = useSelector((state) => state.productWindow);
  const findQuantity = (id) => {
    const foundProduct = product.find((product) => {
      return product.id === id;
    });
    return foundProduct.quantity;
  };

  dispatch(initializeProduct(productWindow));

  const basketList = (products) => {
    if (products) {
      return products.map((e) => {
        return (
          <div key={e.id}>
            <ListItem>
              <img src={e.image} alt={e.title} style={{ height: "50px" }}></img>
              <ListItemText primary={e.title} secondary={`${e.price}€`} />
              <ButtonGroup variant="contained" color="primary">
                <Button
                  onClick={() => {
                    dispatch(changedQuantity({ product: e, num: -1 }));
                  }}
                >
                  -
                </Button>
                <TextField
                  variant="filled"
                  color="primary"
                  sx={{
                    width: "40px",
                    height: "30px",
                    value: "1",
                    "& .MuiFilledInput-input": {
                      padding: "8px",
                    },
                  }}
                  value={findQuantity(e.id)}
                ></TextField>
                <Button
                  onClick={() => {
                    dispatch(changedQuantity({ product: e, num: 1 }));
                  }}
                >
                  +
                </Button>
              </ButtonGroup>
              <IconButton
                onClick={() => {
                  dispatch(removeProduct(e.id));
                }}
              >
                <DeleteOutlinedIcon />
              </IconButton>
            </ListItem>
            <Divider />
          </div>
        );
      });
    }
  };
  return (
    <>
      <Typography variant="h2">Product List</Typography>
      <List>{basketList(product)}</List>
    </>
  );
};

export default ProductList;
