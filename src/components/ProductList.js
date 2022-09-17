import { useSelector, useDispatch } from "react-redux";
import { changedQuantity, removeProduct } from "../reducers/productReducer";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { initializeProduct } from "../reducers/productReducer";
import { useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  InputBase,
  Divider,
  IconButton,
  Typography,
  Box,
  ButtonGroup,
} from "@mui/material";
import { setProductWindow } from "../reducers/productWindowReducer";

const ProductList = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const productWindow = useSelector((state) => state.productWindow);
  const findQuantity = (id) => {
    const foundProduct = product.find((product) => {
      return product._id === id;
    });
    return foundProduct.quantity;
  };

  const totalPrice = () =>
    product?.reduce((acc, e) => {
      return Number((e.quantity * e.price + acc).toFixed(2));
    }, 0) || 0;

  useEffect(() => {
    dispatch(initializeProduct(productWindow));
  }, [dispatch, productWindow]);

  const basketList = (products) =>
    products?.map((e) => (
      <div key={e._id}>
        <ListItem sx={{ p: 0 }}>
          <img src={e.image} alt={e.title} style={{ height: "50px" }}></img>
          <ListItemText primary={e.title} secondary={`${e.price}€`} />
          <ButtonGroup>
            <Button
              onClick={() => {
                dispatch(changedQuantity({ product: e, num: -1 }));
              }}
              variant="contained"
            >
              -
            </Button>
            <InputBase
              variant="standard"
              sx={{
                width: "24px",
                px: "1px",
                "& .MuiInputBase-input": { textAlign: "center" },
              }}
              value={findQuantity(e._id)}
            ></InputBase>
            <Button
              onClick={() => {
                dispatch(changedQuantity({ product: e, num: 1 }));
              }}
              variant="contained"
            >
              +
            </Button>
          </ButtonGroup>
          <IconButton
            onClick={() => {
              dispatch(removeProduct(e._id, productWindow));
            }}
          >
            <DeleteOutlinedIcon />
          </IconButton>
        </ListItem>
        <Divider />
      </div>
    ));

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          onClick={() => {
            dispatch(setProductWindow(false));
          }}
        >
          <ArrowBackOutlinedIcon />
        </IconButton>
        <Typography variant="h3">Product List</Typography>
        <IconButton
          onClick={() => {
            navigator.clipboard.writeText(productWindow);
          }}
        >
          <ContentCopyOutlinedIcon />
        </IconButton>
      </Box>
      <List>{basketList(product)}</List>
      <Typography sx={{ fontSize: 20 }}>Total: {totalPrice()}€</Typography>
    </>
  );
};

export default ProductList;
