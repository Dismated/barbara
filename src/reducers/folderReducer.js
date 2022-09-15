import { createSlice } from "@reduxjs/toolkit";
import folderService from "../services/folders";

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
    const folders = await folderService.getAll();
    dispatch(setFolder(folders));
  };
};

export const createFolder = (content) => {
  return async (dispatch) => {
    const newFolder = await folderService.create(content);
    dispatch(appendFolder(newFolder));
  };
};

export default folderSlice.reducer;
