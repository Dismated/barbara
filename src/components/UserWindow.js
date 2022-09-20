import FolderList from "./FolderList";
import { Paper } from "@mui/material";
import ProductList from "./ProductList";
import { useSelector } from "react-redux";

const UserProductList = () => {
  const productWindow = useSelector((state) => state.productWindow);
  return <Paper>{productWindow ? <ProductList /> : <FolderList />}</Paper>;
};

export default UserProductList;
