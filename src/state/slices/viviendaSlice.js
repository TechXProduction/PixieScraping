import { createSlice } from "@reduxjs/toolkit";

export const viviendaSlice = createSlice({
  name: "vivienda",
  initialState: {
    vivienda: {},
    
  },
  reducers: {
    getViviendas: (state, action) => {
      state.vivienda = action.payload;
    },
    // getUserStatus: (state, action)=>{
    //     state.logged = action.payload
    // },
    // createUser: (state, action)=>{
    //     state.user = [...state.user, action.payload]
    // },
    // deleteUser: (state, action)=>{
    //     state.user = action.payload
    // },
  },
});

export const {
    getViviendas,
  
} = viviendaSlice.actions;

export default viviendaSlice.reducer;