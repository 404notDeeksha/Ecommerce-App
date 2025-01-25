import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: "" };

const locationSlice = createSlice({
  name: "deliveryLocation",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;
