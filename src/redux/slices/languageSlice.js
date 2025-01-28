import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: "EN" };

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.data = action.payload;
      console.log(`state, action, ${state.data}`);
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
