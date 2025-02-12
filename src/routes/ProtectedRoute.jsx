import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { inactiveOverlay } from "../redux/slices/overlaySlice";
import { useEffect } from "react";

export const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(inactiveOverlay()); // Cleanup on unmount
    };
  }, []);
  console.log("Auth", isAuthenticated);
  if (isAuthenticated === undefined) return null;
  return <>{isAuthenticated ? <Outlet /> : <Navigate to="/login/email" />}</>;
};
