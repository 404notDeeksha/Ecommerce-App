import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ErrorToast } from "../components/ErrorToast";
import errorReducer, { setGlobalError, clearGlobalError } from "../redux/slices/errorSlice";

const renderWithStore = (component, preloadedState = {}) => {
  const store = configureStore({
    reducer: {
      error: errorReducer,
    },
    preloadedState,
  });

  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("ErrorToast Component", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("does not render when no error", () => {
    const { container } = renderWithStore(<ErrorToast />, {
      error: { globalError: null, errorQueue: [] },
    });
    expect(container.firstChild).toBeNull();
  });

  it("renders error message when error exists", () => {
    const error = {
      id: 1,
      message: "Test error message",
      type: "error",
      duration: 5000,
    };

    renderWithStore(<ErrorToast />, {
      error: { globalError: error, errorQueue: [error] },
    });

    expect(screen.getByText("Test error message")).toBeInTheDocument();
  });

  it("has proper role and aria attributes", () => {
    const error = {
      id: 1,
      message: "Test error",
      type: "error",
      duration: 5000,
    };

    renderWithStore(<ErrorToast />, {
      error: { globalError: error, errorQueue: [error] },
    });

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByLabelText(/Dismiss error notification/i)).toBeInTheDocument();
  });

  it("dismisses error on button click", () => {
    const error = {
      id: 1,
      message: "Test error",
      type: "error",
      duration: 5000,
    };

    const { store } = renderWithStore(<ErrorToast />, {
      error: { globalError: error, errorQueue: [error] },
    });

    const dismissButton = screen.getByLabelText(/Dismiss error notification/i);
    fireEvent.click(dismissButton);

    const state = store.getState().error;
    expect(state.globalError).toBeNull();
  });

  it("auto-dismisses after duration", () => {
    const error = {
      id: 1,
      message: "Test error",
      type: "error",
      duration: 3000,
    };

    const { store } = renderWithStore(<ErrorToast />, {
      error: { globalError: error, errorQueue: [error] },
    });

    vi.advanceTimersByTime(3000);

    const state = store.getState().error;
    expect(state.globalError).toBeNull();
  });
});
