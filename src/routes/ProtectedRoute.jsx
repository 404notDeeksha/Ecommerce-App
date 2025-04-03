import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { inactiveOverlay } from "../redux/slices/overlaySlice";
import { useEffect } from "react";
import { routes } from "./routes";
import { getCartQty } from "../api/protectedApi";
import { setCartQuantity } from "../redux/slices/cartSlice";

export const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const data = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(inactiveOverlay());
    };
  }, [dispatch]);

  if (isAuthenticated === undefined) return null;

  useEffect(() => {
    if (user?.id) {
      const fetchQty = async () => {
        try {
          const qty = await getCartQty(user?.id);
          dispatch(setCartQuantity(qty.data));
          if (qty.data === 0) {
            dispatch(setCartQuantity(0));
          }
        } catch (error) {
          console.error("Error fetching cart quantity:", error);
        }
      };
      fetchQty();
    }
  }, [user?.id, data.items]);

  return (
    <>{isAuthenticated ? <Outlet /> : <Navigate to={routes.loginEmail} />}</>
  );
};
