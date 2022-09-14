import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice = createSlice({
  name: "suggestions",
  initialState: [],
  reducers: {
    setSuggestion(state, action) {
      return action.payload.slice(0, 7);
    },
  },
});
export const { setSuggestion } = suggestionSlice.actions;

export default suggestionSlice.reducer;
