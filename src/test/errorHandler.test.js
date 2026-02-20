import { describe, it, expect, beforeEach } from "vitest";
import { configureStore } from "@reduxjs/toolkit";
import errorReducer from "../redux/slices/errorSlice";
import { setGlobalError, clearGlobalError } from "../redux/slices/errorSlice";

const createTestStore = () => configureStore({
  reducer: {
    error: errorReducer,
  },
});

describe("errorHandler utility", () => {
  let store;

  beforeEach(() => {
    store = createTestStore();
    // Override the store import in errorHandler
    vi.doMock("../redux/store", () => ({
      store: createTestStore(),
    }));
  });

  it("setGlobalError creates error with default values", () => {
    store.dispatch(setGlobalError({ message: "Test error" }));
    
    const state = store.getState().error;
    expect(state.globalError.message).toBe("Test error");
    expect(state.globalError.type).toBe("error");
    expect(state.globalError.duration).toBe(5000);
  });

  it("setGlobalError accepts custom duration", () => {
    store.dispatch(setGlobalError({ message: "Test error", duration: 10000 }));
    
    const state = store.getState().error;
    expect(state.globalError.duration).toBe(10000);
  });

  it("setGlobalError handles success type with custom duration", () => {
    store.dispatch(setGlobalError({ message: "Operation successful", type: "success", duration: 3000 }));
    
    const state = store.getState().error;
    expect(state.globalError.message).toBe("Operation successful");
    expect(state.globalError.type).toBe("success");
    expect(state.globalError.duration).toBe(3000);
  });

  it("setGlobalError handles warning type", () => {
    store.dispatch(setGlobalError({ message: "Warning message", type: "warning" }));
    
    const state = store.getState().error;
    expect(state.globalError.message).toBe("Warning message");
    expect(state.globalError.type).toBe("warning");
    expect(state.globalError.duration).toBe(5000);
  });

  it("clearGlobalError clears specific error", () => {
    store.dispatch(setGlobalError({ message: "Test error 1", duration: 10000 }));
    const errorId = store.getState().error.globalError.id;
    
    // Add more errors by manually checking the reducer behavior
    store.dispatch(setGlobalError({ message: "Test error 2", duration: 10000 }));
    
    store.dispatch(clearGlobalError(errorId));
    
    const state = store.getState().error;
    // After clearing first error, the queue should have the second error
    expect(state.globalError.message).toBe("Test error 2");
  });
});
