import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import overlayReducer from "./slices/overlaySlice";
import sidebarReducer from "./slices/sidebarSlice";
import deliveryLocationReducer from "./slices/locationSlice";
import languageReducer from "./slices/languageSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    overlay: overlayReducer,
    sidebar: sidebarReducer,
    deliveryLocation: deliveryLocationReducer,
    language: languageReducer,
  },
});

export default store;
