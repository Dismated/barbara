import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import {
  initializeFolder,
  createFolder,
  importFolder,
} from "../reducers/folderReducer";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { setProductWindow } from "../reducers/productWindowReducer.js";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import {
  Popover,
  Button,
  Divider,
  List,
  ListItem,
  Typography,
  InputBase,
  IconButton,
} from "@mui/material";

const FolderList = () => {
  const [folderName, setFolderName] = useState("");
  const [folderCode, setFolderCode] = useState("");

  const dispatch = useDispatch();
  const folder = useSelector((state) => state.folder);

  useEffect(() => {
    dispatch(initializeFolder());
  }, [dispatch]);

  const renderPopover = (
    onChange,
    placeholder,
    openButtonText,
    submitButtonText,
    onClick
  ) => (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <>
          <Button {...bindTrigger(popupState)}>{openButtonText}</Button>
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
              placeholder={placeholder}
              onChange={onChange}
            ></InputBase>
            <Button onClick={onClick}>{submitButtonText}</Button>
          </Popover>
        </>
      )}
    </PopupState>
  );

  const constructFolders = (folders) =>
    folders?.map((e) => (
      <div key={e._id}>
        <ListItem>
          <div onClick={() => dispatch(setProductWindow(e._id))}>
            <FolderOutlinedIcon />
            <Typography>{e.name}</Typography>
          </div>
          <IconButton
            onClick={() => {
              navigator.clipboard.writeText(e._id);
            }}
          >
            <ContentCopyOutlinedIcon />
          </IconButton>
        </ListItem>
        <Divider />
      </div>
    ));

  return (
    <>
      <Typography variant="h2">Folder List</Typography>
      <List>{constructFolders(folder)}</List>
      {renderPopover(
        (event) => setFolderName(event.target.value),
        "List Name",
        "Create List",
        "Create",
        () => dispatch(createFolder(folderName))
      )}
      {renderPopover(
        (event) => {
          setFolderCode(event.target.value);
        },
        "Enter Code",
        "Join List",
        "Join",
        () => {
          dispatch(importFolder({ _id: folderCode }));
        }
      )}
    </>
  );
};

export default FolderList;
