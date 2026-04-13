import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "@redux/slices/cartSlice.js";
import { getCart, updateCartQty, deleteCartProduct, addToCart } from "@api/cart/index.js";

export const useCart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const userId = useSelector((state) => state?.auth?.user?.id);

  const fetchCart = useCallback(async () => {
    if (!userId) return;
    try {
      const result = await getCart();
      if (result?.success) {
        dispatch(setCart(result.data));
      }
      return result;
    } catch (error) {
      console.error("Error fetching cart:", error);
      throw error;
    }
  }, [userId, dispatch]);

  const updateQuantity = useCallback(async (productId, qty) => {
    if (!userId) return;
    try {
      const result = await updateCartQty(productId, qty);
      if (result?.success) {
        dispatch(setCart(result.data));
      }
      return result;
    } catch (error) {
      console.error("Error updating quantity:", error);
      throw error;
    }
  }, [userId, dispatch]);

  const removeFromCart = useCallback(async (productId) => {
    if (!userId) return;
    try {
      const result = await deleteCartProduct(productId);
      if (result?.success) {
        dispatch(setCart(result.data));
      }
      return result;
    } catch (error) {
      console.error("Error removing from cart:", error);
      throw error;
    }
  }, [userId, dispatch]);

  const addItemToCart = useCallback(async (item) => {
    if (!userId) return;
    try {
      const body = { items: [item] };
      const result = await addToCart(body);
      return result;
    } catch (error) {
      console.error("Error adding to cart:", error);
      throw error;
    }
  }, [userId]);

  return {
    cartData,
    fetchCart,
    updateQuantity,
    removeFromCart,
    addItemToCart,
  };
};
