import { createSlice } from "@reduxjs/toolkit";

const productWindowSlice = createSlice({
  name: "productWindow",
  initialState: false,
  reducers: {
    setProductWindow(state, action) {
      return action.payload;
    },
  },
});
export const { setProductWindow } = productWindowSlice.actions;

export default productWindowSlice.reducer;
