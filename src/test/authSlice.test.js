import { describe, it, expect, beforeEach } from "vitest";
import { configureStore } from "@reduxjs/toolkit";
import authReducer, { loginSuccess, logout } from "../redux/slices/authSlice";

describe("authSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        auth: authReducer,
      },
    });
  });

  it("should handle initial state", () => {
    const state = store.getState().auth;
    expect(state.isAuthenticated).toBe(false);
    expect(state.user).toBeNull();
  });

  it("should handle loginSuccess", () => {
    const user = { id: 1, name: "Test User", email: "test@example.com" };
    store.dispatch(loginSuccess({ user }));
    
    const state = store.getState().auth;
    expect(state.isAuthenticated).toBe(true);
    expect(state.user).toEqual(user);
  });

  it("should handle logout", () => {
    const user = { id: 1, name: "Test User", email: "test@example.com" };
    store.dispatch(loginSuccess({ user }));
    store.dispatch(logout());
    
    const state = store.getState().auth;
    expect(state.isAuthenticated).toBe(false);
    expect(state.user).toBeNull();
  });
});
