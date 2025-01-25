import { createSlice } from "@reduxjs/toolkit";
import { SIDEBAR_STATE } from "../../utils/common-consts";

const initialState = { state: SIDEBAR_STATE.NONE };

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.state = SIDEBAR_STATE.OPEN;
    },
    closeSidebar: (state) => {
      state.state = SIDEBAR_STATE.CLOSE;
    },
  },
});

export const { openSidebar, closeSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
