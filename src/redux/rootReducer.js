import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import overlayReducer from "./slices/overlaySlice";
import sidebarReducer from "./slices/sidebarSlice";
import deliveryLocationReducer from "./slices/locationSlice";
import languageReducer from "./slices/languageSlice";
import loaderReducer from "./slices/loaderSlice";
import errorReducer from "./slices/errorSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  overlay: overlayReducer,
  sidebar: sidebarReducer,
  deliveryLocation: deliveryLocationReducer,
  language: languageReducer,
  loader: loaderReducer,
  error: errorReducer,
});

export default rootReducer;
