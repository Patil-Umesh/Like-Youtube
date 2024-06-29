import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice = createSlice({
  name: "searchResult",
  initialState: {
    searchResult: null,
  },
  reducers: {
    addSearchResults: (state, action) => {
      state.searchResult = action.payload;
    },
  },
});

export const { addSearchResults } = searchResultSlice.actions;
export default searchResultSlice.reducer;
