import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    popularVideos: null,
    mostWatchedVids: null,
    videoInfo: null,
    videoComments: null,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    addPopularVids: (state, action) => {
      state.popularVideos = action.payload;
    },
    addMostWatchedVids: (state, action) => {
      state.mostWatchedVids = action.payload;
    },
    addVideoInfo: (state, action) => {
      state.videoInfo = action.payload;
    },
    addVideoComments: (state, action) => {
      state.videoComments = action.payload;
    },
  },
});

export const {
  toggleMenu,
  addPopularVids,
  addVideoInfo,
  addVideoComments,
  addMostWatchedVids,
} = appSlice.actions;
export default appSlice.reducer;
