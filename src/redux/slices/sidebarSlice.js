import { createSlice } from "@reduxjs/toolkit";
import { SIDEBAR_STATE } from "../../utils/common-consts";

const initialState = { state: SIDEBAR_STATE.NONE };

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSidebar: (state, action) => {
      state.state = SIDEBAR_STATE.OPEN;
      //   state.contentKey = action.payload;
      //   console.log("State1", state.isOpen, state.contentKey);
      //   console.log("Action1", action);
    },
    closeSidebar: (state, action) => {
      state.state = SIDEBAR_STATE.CLOSE;
      //   state.contentKey = null;
      //   console.log("State2", "Action2", state, action);
    },
  },
});

export const { openSidebar, closeSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
