import {
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  Popover,
  Typography,
} from "@mui/material";
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";
import {
  createFolder,
  importFolder,
  initializeFolder,
} from "../reducers/folderReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import { setProductWindow } from "reducers/productWindowReducer.js";

const FolderList = () => {
  const [reloadFolders, setReloadFolders] = useState(false);
  const dispatch = useDispatch();
  const folder = useSelector((state) => state.folder);

  useEffect(() => {
    dispatch(initializeFolder(reloadFolders));
  }, [dispatch, reloadFolders]);

  const removeLocalStorageId = (e) => {
    setReloadFolders(true);
    const folderIds = JSON.parse(window.localStorage.getItem("folderIds"));
    const newFolderIds = folderIds.filter((folderId) => e._id !== folderId);
    window.localStorage.setItem("folderIds", JSON.stringify(newFolderIds));
  };

  const renderPopover = (
    placeholder,
    openButtonText,
    submitButtonText,
    onClick
  ) => {
    const [promptValue, setPromptValue] = useState("");

    return (
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
            >
              <InputBase
                placeholder={placeholder}
                onChange={(event) => setPromptValue(event.target.value)}
                sx={{ pl: "8px" }}
              ></InputBase>
              <Button
                onClick={() => {
                  if (promptValue) {
                    onClick(promptValue);
                    popupState.close();
                  }
                }}
              >
                {submitButtonText}
              </Button>
            </Popover>
          </>
        )}
      </PopupState>
    );
  };

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
          <Box>
            <IconButton
              onClick={() => {
                navigator.clipboard.writeText(e._id);
              }}
            >
              <ContentCopyOutlinedIcon />
            </IconButton>
            <IconButton onClick={() => removeLocalStorageId(e)}>
              <BackspaceOutlinedIcon />
            </IconButton>
          </Box>
        </ListItem>
        <Divider />
      </div>
    ));

  return (
    <>
      <Typography variant="h3" sx={{ textAlign: "center", pt: 1 }}>
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
        {renderPopover("List Name", "Create List", "Create", (promptValue) => {
          dispatch(createFolder(promptValue));
        })}
        {renderPopover("Enter Code", "Join List", "Join", (promptValue) => {
          dispatch(importFolder({ _id: promptValue }));
        })}
      </Box>
    </>
  );
};

export default FolderList;
