import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../reducers/productReducer";
import {
  List,
  ListItem,
  Button,
  ListItemText,
  Divider,
  LinearProgress,
} from "@mui/material/";

const DropdownBox = ({ loading }) => {
  const dispatch = useDispatch();
  const suggestion = useSelector((state) => state.suggestion);
  const productWindow = useSelector((state) => state.productWindow);

  const addToBasket = async (event, product) => {
    event.preventDefault();
    dispatch(createProduct(product, productWindow));
  };

  const productList = () =>
    suggestion?.map((e) => (
      <div key={e.id}>
        <ListItem>
          <img src={e.image} alt={e.title} style={{ height: "50px" }}></img>
          <ListItemText
            primary={e.title}
            secondary={`${e.price}€`}
            sx={{ position: "relative", color: "text.primary" }}
          />
          <Button
            onClick={(event) => {
              addToBasket(event, e);
            }}
            color="primary"
            variant="contained"
          >
            <AddShoppingCartIcon />
          </Button>
        </ListItem>
        <Divider />
      </div>
    ));

  return (
    <List sx={listStyles}>
      {loading ? <LinearProgress color="primary" /> : productList()}
    </List>
  );
};
export default DropdownBox;

const listStyles = {
  background: "white",
  p: 0,
  width: { xs: "100vw", md: "100%" },
  left: { xs: "50%", md: 0 },
  right: { xs: "50%", md: 0 },
  marginLeft: { xs: "-50vw", md: 0 },
  marginRight: { xs: "-50vw", md: 0 },
};
