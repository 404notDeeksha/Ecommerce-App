import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slices/authSlice";
import { NotFound } from "../components/NotFound";

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      <Provider store={configureStore({ 
        reducer: { auth: authReducer }
      })}>
        {component}
      </Provider>
    </BrowserRouter>
  );
};

describe("NotFound Component", () => {
  it("renders 404 heading", () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("404");
  });

  it("renders error message", () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByText(/The page you're looking for doesn't exist/i)).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByLabelText(/Go to signup page/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Go to home page/i)).toBeInTheDocument();
  });

  it("has proper role and aria-labelledby", () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByRole("main")).toHaveAttribute("aria-labelledby", "error-title");
  });
});
