import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false, contentKey: null };

const overlaySlice = createSlice({
  name: "overlay",
  initialState,
  reducers: {
    activeOverlay: (state, action) => {
      state.isOpen = true;
      state.contentKey = action.payload;
      //   console.log("State1", state.isOpen, state.contentKey);
      //   console.log("Action1", action);
    },
    inactiveOverlay: (state, action) => {
      state.isOpen = false;
      state.contentKey = null;
      //   console.log("State2", "Action2", state, action);
    },
  },
});

export const { activeOverlay, inactiveOverlay } = overlaySlice.actions;

export default overlaySlice.reducer;
