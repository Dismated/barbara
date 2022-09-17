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
  Box,
  Badge,
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
          <Button
            {...bindTrigger(popupState)}
            variant="contained"
            sx={{ width: "45%" }}
          >
            {openButtonText}
          </Button>
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
            sx={{ borderWidth: "10px" }}
          >
            <InputBase
              placeholder={placeholder}
              onChange={onChange}
              sx={{ pl: "8px" }}
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
        <ListItem
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            onClick={() => dispatch(setProductWindow(e._id))}
            sx={{
              display: "flex",
              "&:hover": { cursor: "pointer" },
            }}
          >
            <Badge badgeContent={e.products.length} color="primary">
              <FolderOutlinedIcon />
            </Badge>
            <Typography sx={{ pl: "16px" }}>{e.name}</Typography>
          </Box>
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
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Folder List
      </Typography>
      <List>{constructFolders(folder)}</List>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          py: "8px",
        }}
      >
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
      </Box>
    </>
  );
};

export default FolderList;
