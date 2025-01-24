import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { value: false },
  reducers: {
    active: (state) => {
        state.value=true;
    },
    inactive: (state) => {
        state.value=false;
    },
  },
});

export const { active, inactive } = modalSlice.actions;
export default modalSlice.reducer;
