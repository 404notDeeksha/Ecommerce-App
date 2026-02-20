import { describe, it, expect, beforeEach } from "vitest";
import { configureStore } from "@reduxjs/toolkit";
import errorReducer, { setGlobalError, clearGlobalError, clearAllErrors } from "../redux/slices/errorSlice";

describe("errorSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        error: errorReducer,
      },
    });
  });

  it("should handle initial state", () => {
    const state = store.getState().error;
    expect(state.globalError).toBeNull();
    expect(state.errorQueue).toEqual([]);
  });

  it("should handle setGlobalError", () => {
    store.dispatch(setGlobalError({ message: "Test error", type: "error", duration: 5000 }));
    const state = store.getState().error;
    
    expect(state.globalError).not.toBeNull();
    expect(state.globalError.message).toBe("Test error");
    expect(state.globalError.type).toBe("error");
    expect(state.errorQueue).toHaveLength(1);
  });

  it("should handle clearGlobalError", () => {
    store.dispatch(setGlobalError({ message: "Test error" }));
    store.dispatch(clearGlobalError());
    
    const state = store.getState().error;
    expect(state.globalError).toBeNull();
    expect(state.errorQueue).toHaveLength(0);
  });

  it("should handle clearAllErrors", () => {
    store.dispatch(setGlobalError({ message: "Test error 1" }));
    store.dispatch(setGlobalError({ message: "Test error 2" }));
    store.dispatch(clearAllErrors());
    
    const state = store.getState().error;
    expect(state.globalError).toBeNull();
    expect(state.errorQueue).toHaveLength(0);
  });

  it("should queue multiple errors", () => {
    store.dispatch(setGlobalError({ message: "Error 1", duration: 5000 }));
    store.dispatch(setGlobalError({ message: "Error 2", duration: 5000 }));
    
    const state = store.getState().error;
    expect(state.errorQueue).toHaveLength(2);
  });
});
