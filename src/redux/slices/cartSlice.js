import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: {}, totalQuantity: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.data = action.payload;
      if (action.payload?.items) {
        state.totalQuantity = action.payload.items.reduce(
          (sum, item) => sum + (item.quantity || 0),
          0
        );
      }
    },
    setCartQuantity: (state, action) => {
      state.totalQuantity = action.payload; // Set the quantity from backend
    },
  },
});

export const { setCart, setCartQuantity } = cartSlice.actions;

export default cartSlice.reducer;
