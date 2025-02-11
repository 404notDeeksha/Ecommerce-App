// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./slices/cartSlice";
// import overlayReducer from "./slices/overlaySlice";
// import sidebarReducer from "./slices/sidebarSlice";
// import deliveryLocationReducer from "./slices/locationSlice";
// import languageReducer from "./slices/languageSlice";
// import authReducer from "./slices/authSlice";
// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     cart: cartReducer,
//     overlay: overlayReducer,
//     sidebar: sidebarReducer,
//     deliveryLocation: deliveryLocationReducer,
//     language: languageReducer,
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
