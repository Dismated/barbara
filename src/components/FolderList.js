import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { initializeFolder, createFolder } from "../reducers/folderReducer";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { setProductWindow } from "../reducers/productWindowReducer.js";

import {
  Popover,
  Button,
  Divider,
  List,
  ListItem,
  Typography,
  InputBase,
} from "@mui/material";

const FolderList = () => {
  const [folderName, setFolderName] = useState("");

  const dispatch = useDispatch();
  const folder = useSelector((state) => state.folder);

  useEffect(() => {
    dispatch(initializeFolder());
  }, [dispatch]);

  const handleFolderClick = (id) => {
    dispatch(setProductWindow(id));
  };

  const constructFolders = (folders) => {
    if (folders) {
      return folders.map((e) => {
        return (
          <div key={e._id}>
            <ListItem onClick={() => handleFolderClick(e._id)}>
              <FolderOutlinedIcon />
              <Typography>{e.name}</Typography>
            </ListItem>
            <Divider />
          </div>
        );
      });
    }
  };

  const handleSearchChange = (event) => {
    setFolderName(event.target.value);
  };
  const handleClick = () => {
    dispatch(createFolder({ name: folderName }));
  };
  return (
    <>
      <Typography variant="h2">Folder List</Typography>
      <List>{constructFolders(folder)}</List>
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <Button {...bindTrigger(popupState)}>Create List</Button>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
            >
              <InputBase
                placeholder="Create Name"
                onChange={handleSearchChange}
              ></InputBase>
              <Button onClick={handleClick}>Create</Button>
            </Popover>
          </div>
        )}
      </PopupState>
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <Button {...bindTrigger(popupState)}>Join List</Button>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
            >
              <InputBase placeholder="Enter Code"></InputBase>
              <Button>Join</Button>
            </Popover>
          </div>
        )}
      </PopupState>
    </>
  );
};

export default FolderList;
