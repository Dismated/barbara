import { createSlice } from "@reduxjs/toolkit";
import endpoints from "utils/endpoints";

const urlSlice = createSlice({
  name: "urls",
  initialState: `${process.env.REACT_APP_BASE_BARBORA_API_URL}${endpoints(
    "52",
    "a"
  )}`,
  reducers: {
    setUrl(state, action) {
      return action.payload;
    },
  },
});
export const { setUrl } = urlSlice.actions;

export default urlSlice.reducer;
