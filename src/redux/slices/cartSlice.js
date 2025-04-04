import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: {}, totalQuantity: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.data = action.payload;
    },
    setCartQuantity: (state, action) => {
      state.totalQuantity = action.payload; // Set the quantity from backend
    },
  },
});

export const { setCart, setCartQuantity } = cartSlice.actions;

export default cartSlice.reducer;
