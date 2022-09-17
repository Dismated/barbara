import { useSelector } from "react-redux";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  List,
  ListItem,
  IconButton,
  ListItemText,
  Divider,
} from "@mui/material/";

const DropdownBox = (loading) => {
  const suggestion = useSelector((state) => state.suggestion);

  const productList = () =>
    suggestion?.map((e) => (
      <div key={e.id}>
        <ListItem>
          <img src={e.image} alt={e.title} style={{ height: "50px" }}></img>
          <ListItemText
            primary={e.title}
            secondary={`${e.price}€`}
            style={{ position: "relative" }}
          />
          <IconButton>
            <AddShoppingCartIcon />
          </IconButton>
        </ListItem>
        <Divider />
      </div>
    ));

  return (
    <List sx={{ background: "white", padding: 0 }}>
      { productList()}
    </List>
  );
};
export default DropdownBox;
