import { useSelector, useDispatch } from "react-redux";
import { changedQuantity } from "../reducers/productReducer";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ButtonGroup,
  Button,
  TextField,
  Divider,
  IconButton,
} from "@mui/material";

const sum = (num1, num2) => {
  return num1 + num2;
};

const switchNumbers = (num1, num2) => {
  return num2;
};

const UserList = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  const findQuantity = (id) => {
    const foundProduct = product.find((product) => {
      return product.id === id;
    });
    return foundProduct.quantity;
  };

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
                    dispatch(
                      changedQuantity({ product: e, num: -1, func: sum })
                    );
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
                  onChange={(event) =>
                    dispatch(
                      changedQuantity({
                        product: e,
                        num: event,
                        func: switchNumbers,
                      })
                    )
                  }
                ></TextField>
                <Button
                  onClick={() => {
                    dispatch(
                      changedQuantity({ product: e, num: 1, func: sum })
                    );
                  }}
                >
                  +
                </Button>
              </ButtonGroup>
              <IconButton>
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
    <Paper>
      <Typography variant="h2">Shopping List</Typography>

      <List>{basketList(product)}</List>
    </Paper>
  );
};

export default UserList;
