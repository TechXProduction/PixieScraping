import { createSlice } from "@reduxjs/toolkit";

export const interceptoSlice = createSlice({
  name: "intercepto",
  initialState: {
    intercepto: {},
  },
  reducers: {
    getIntercepto: (state, action) => {
      state.intercepto = action.payload;
    },
   
  },
});

export const {
  getIntercepto,
  
} = interceptoSlice.actions;

export default interceptoSlice.reducer;