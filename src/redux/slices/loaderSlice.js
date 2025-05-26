import { createSlice } from "@reduxjs/toolkit";

const initialState = { loading: false };

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    loading: (state, action) => {
        state.loading = action.payload;
      },
  },
});

export const { loading } = loaderSlice.actions;

export default loaderSlice.reducer;
