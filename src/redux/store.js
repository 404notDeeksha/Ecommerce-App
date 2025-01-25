import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import overlayReducer from "./slices/overlaySlice";
import sidebarReducer from "./slices/sidebarSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    overlay: overlayReducer,
    sidebar: sidebarReducer,
  },
});

export default store;
