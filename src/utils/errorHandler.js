import { store } from "@redux/store.js";
import { setGlobalError, clearGlobalError } from "@redux/slices/errorSlice.js";

export const showError = (message, duration = 5000) => {
  store.dispatch(
    setGlobalError({
      message,
      type: "error",
      duration,
    })
  );
};

export const showSuccess = (message, duration = 3000) => {
  store.dispatch(
    setGlobalError({
      message,
      type: "success",
      duration,
    })
  );
};

export const showWarning = (message, duration = 5000) => {
  store.dispatch(
    setGlobalError({
      message,
      type: "warning",
      duration,
    })
  );
};

export const dismissError = (errorId) => {
  store.dispatch(clearGlobalError(errorId));
};
