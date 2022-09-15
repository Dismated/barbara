import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { initializeFolder, createFolder } from "../reducers/folderReducer";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  Popover,
  Button,
  IconButton,
  List,
  ListItem,
  Typography,
  InputBase,
} from "@mui/material";

const FolderList = ({ setFolderWindow }) => {
  const [folderName, setFolderName] = useState("");

  const dispatch = useDispatch();
  const folder = useSelector((state) => state.folder);

  useEffect(() => {
    dispatch(initializeFolder());
  }, [dispatch]);

  const constructFolders = (folders) => {
    if (folders) {
      return folders.map((e) => {
        return (
          <div key={e.id}>
            <ListItem>
              <IconButton>
                <FolderOutlinedIcon />
              </IconButton>
              <Typography>{e.username}</Typography>
            </ListItem>
          </div>
        );
      });
    }
  };

  const handleSearchChange = (event) => {
    setFolderName(event.target.value);
  };
  const handleClick = () => {
    dispatch(createFolder({ username: folderName }));
  };
  return (
    <>
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
              <Button>Cancel</Button>
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
              <Button>Cancel</Button>
              <Button>Join</Button>
            </Popover>
          </div>
        )}
      </PopupState>
    </>
  );
};

export default FolderList;
