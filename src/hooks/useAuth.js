import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, logout } from "@redux/slices/authSlice.js";
import { signupUser, verifyEmail, verifyPassword, logoutUser } from "@api/auth/index.js";

export const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const signup = useCallback(async ({ name, email, password }) => {
    try {
      const result = await signupUser({ name, email, password });
      if (result.success) {
        dispatch(loginSuccess({ user: result.data }));
      }
      return result;
    } catch (error) {
      throw error;
    }
  }, [dispatch]);

  const loginWithEmail = useCallback(async ({ email }) => {
    try {
      const result = await verifyEmail({ email });
      return result;
    } catch (error) {
      throw error;
    }
  }, []);

  const loginWithPassword = useCallback(async ({ email, password }) => {
    try {
      const result = await verifyPassword({ email, password });
      if (result.success) {
        dispatch(loginSuccess({ user: result.data }));
      }
      return result;
    } catch (error) {
      throw error;
    }
  }, [dispatch]);

  const signout = useCallback(async () => {
    try {
      await logoutUser();
      dispatch(logout());
    } catch (error) {
      dispatch(logout());
      throw error;
    }
  }, [dispatch]);

  return {
    user,
    isAuthenticated,
    signup,
    loginWithEmail,
    loginWithPassword,
    signout,
  };
};
