import { configureStore } from "@reduxjs/toolkit";
// import modalReducer from "./slices/modalSlice";
import cartReducer from "./slices/cartSlice";
import overlayReducer from "./slices/overlaySlice";

const store = configureStore({
  reducer: {
    // modal: modalReducer,
    cart: cartReducer,
    overlay: overlayReducer,
  },
});

export default store;
