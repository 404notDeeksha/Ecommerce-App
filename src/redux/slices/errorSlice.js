import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  globalError: null,
  errorQueue: [],
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setGlobalError: (state, action) => {
      const error = {
        id: Date.now(),
        message: action.payload.message || "An unexpected error occurred",
        type: action.payload.type || "error",
        duration: action.payload.duration || 5000,
      };
      state.errorQueue.push(error);
      state.globalError = error;
    },
    clearGlobalError: (state, action) => {
      const errorId = action.payload;
      if (errorId) {
        state.errorQueue = state.errorQueue.filter((e) => e.id !== errorId);
      } else {
        state.errorQueue.shift();
      }
      state.globalError = state.errorQueue[0] || null;
    },
    clearAllErrors: (state) => {
      state.globalError = null;
      state.errorQueue = [];
    },
  },
});

export const { setGlobalError, clearGlobalError, clearAllErrors } = errorSlice.actions;
export default errorSlice.reducer;
