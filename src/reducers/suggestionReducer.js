import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice = createSlice({
  name: "suggestions",
  initialState: [],
  reducers: {
    setSuggestion(state, action) {
      return action.payload;
    },
  },
});
export const { setSuggestion } = suggestionSlice.actions;

export default suggestionSlice.reducer;
