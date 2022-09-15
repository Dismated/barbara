import { useState } from "react";
import { Paper, Typography } from "@mui/material";
import FolderList from "./FolderList";
import ProductList from "./ProductList";

const UserProductList = () => {
  const [folderWindow, setFolderWindow] = useState(true);
  return (
    <Paper>
      <Typography variant="h2">Shopping List</Typography>
      {folderWindow ? (
        <FolderList setFolderWindow={setFolderWindow} />
      ) : (
        <ProductList />
      )}
    </Paper>
  );
};

export default UserProductList;
