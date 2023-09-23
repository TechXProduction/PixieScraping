import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    notification: {},
  },
  reducers: {
    getNotifications: (state, action) => {
      state.notification = action.payload;
    },
   
  },
});

export const {
  getNotifications,
  
} = notificationSlice.actions;

export default notificationSlice.reducer;