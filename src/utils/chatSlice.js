import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addChatMessages: (state, action) => {
      if (state.messages.length > 20) {
        state.messages.splice(0, 5);
      }
      state.messages.push(action.payload);
    },
  },
});

export const { addChatMessages } = chatSlice.actions;
export default chatSlice.reducer;
