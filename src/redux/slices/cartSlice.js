import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: {} };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      //   console.log(`Updating state`);
      console.log(`action`, action);
      state.data = action.payload;
      console.log("STATE", state.data);
    },
  },
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
