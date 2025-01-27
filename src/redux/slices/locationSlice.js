import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: "500081" };

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
