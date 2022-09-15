import { createSlice } from "@reduxjs/toolkit";

const urlSlice = createSlice({
  name: "urls",
  initialState:
    "https://serene-eyrie-74646.herokuapp.com/https://barbora.lt/akcijos",
  reducers: {
    setUrl(state, action) {
      return action.payload;
    },
  },
});
export const { setUrl } = urlSlice.actions;

export default urlSlice.reducer;
