import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, logout } from "@redux/slices/authSlice.js";
import { signupUser, verifyEmail, verifyPassword, logoutUser } from "@api/auth/index.js";

export const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const signup = useCallback(async ({ name, email, password }) => {
    const result = await signupUser({ name, email, password });
    if (result.success) {
      dispatch(loginSuccess({ user: result.data }));
    }
    return result;
  }, [dispatch]);

  const loginWithEmail = useCallback(async ({ email }) => {
    const result = await verifyEmail({ email });
    return result;
  }, []);

  const loginWithPassword = useCallback(async ({ email, password }) => {
    const result = await verifyPassword({ email, password });
    if (result.success) {
      dispatch(loginSuccess({ user: result.data }));
    }
    return result;
  }, [dispatch]);

  const signout = useCallback(async () => {
    try {
      await logoutUser();
    } catch {
      // Ignore API errors, continue with local logout
    }
    dispatch(logout());
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
