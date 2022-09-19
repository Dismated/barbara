import { createSlice } from "@reduxjs/toolkit";

const urlSlice = createSlice({
  name: "urls",
  initialState: `${process.env.REACT_APP_PRODUCTS_52_API_URL}a`,
  reducers: {
    setUrl(state, action) {
      return action.payload;
    },
  },
});
export const { setUrl } = urlSlice.actions;

export default urlSlice.reducer;
