import { createSlice } from "@reduxjs/toolkit";
import folderService from "services/folders";

const updateLocalStorage = (newFolder) => {
  const folderIds = JSON.parse(window.localStorage.getItem("folderIds"));
  const newFolderIds = folderIds
    ? folderIds.concat(newFolder._id)
    : [newFolder._id];
  window.localStorage.setItem("folderIds", JSON.stringify(newFolderIds));
};

const folderSlice = createSlice({
  name: "folders",
  initialState: [],
  reducers: {
    setFolder(state, action) {
      return action.payload;
    },
    appendFolder(state, action) {
      state.push(action.payload);
    },
  },
});

export const { setFolder, appendFolder } = folderSlice.actions;

export const initializeFolder = () => {
  return async (dispatch) => {
    const folderIds = JSON.parse(window.localStorage.getItem("folderIds"));
    const folders = folderIds
      ? await Promise.all(
          folderIds.map(async (e) => await folderService.getById(e))
        )
      : [];
    dispatch(setFolder(folders));
  };
};

export const createFolder = (content) => {
  return async (dispatch) => {
    const newFolder = await folderService.create(content);
    updateLocalStorage(newFolder);
    dispatch(appendFolder(newFolder));
  };
};

export const importFolder = (code) => {
  return async (dispatch) => {
    updateLocalStorage(code);
    const newFolder = await folderService.getById(code._id);
    dispatch(appendFolder(newFolder));
  };
};

export default folderSlice.reducer;
