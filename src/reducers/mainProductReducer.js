import { createSlice } from "@reduxjs/toolkit";

const mainProductSlice = createSlice({
  name: "mainProducts",
  initialState: [],
  reducers: {
    setMainProduct(state, action) {
      return action.payload;
    },
  },
});

export const { setMainProduct } = mainProductSlice.actions;

export default mainProductSlice.reducer;
