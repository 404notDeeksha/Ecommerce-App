import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false, contentKey: null };

const overlaySlice = createSlice({
  name: "overlay",
  initialState,
  reducers: {
    activeOverlay: (state, action) => {
      state.isOpen = true;
      state.contentKey = action.payload;
    },
    inactiveOverlay: (state) => {
      state.isOpen = false;
      state.contentKey = null;
    },
  },
});

export const { activeOverlay, inactiveOverlay } = overlaySlice.actions;

export default overlaySlice.reducer;
