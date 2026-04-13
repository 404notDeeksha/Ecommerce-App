/**
 * Token management using hybrid storage:
 * - accessToken: stored in memory (short-lived, auto-attached to requests)
 * - refreshToken: stored in Redux (persisted via Redux Persist → localStorage)
 *
 * Why this approach:
 * - Memory storage avoids httpOnly cookie CORS headaches in dev/prod across different origins
 * - refreshToken in localStorage allows session persistence across page refreshes
 * - accessToken in memory is invisible to XSS (unlike localStorage for the short-lived token)
 */

import axios from "axios";
import { URL } from "@config/index.js";

// Module-level memory storage — not accessible from window, dies on page unload
let _accessToken = null;

// ─── Access Token (memory) ───────────────────────────────────────────────────

/**
 * Store the access token in memory.
 * Call this right after login/signup alongside Redux dispatch.
 */
export const setAccessToken = (token) => {
  _accessToken = token;
};

/**
 * Get the current access token from memory.
 * Used by axios request interceptor to attach to headers.
 */
export const getAccessToken = () => _accessToken;

/**
 * Clear the access token from memory.
 * Call this on logout or token expiry.
 */
export const clearAccessToken = () => {
  _accessToken = null;
};

// ─── Token Refresh ───────────────────────────────────────────────────────────

/**
 * Refresh the access token using the stored refreshToken from Redux.
 * Called by axios response interceptor on 401 errors.
 * Returns the new access token or throws.
 */
export const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await axios.post(
      `${URL.BACKEND_URL}/auth/refresh-token`,
      { refreshToken },
      { withCredentials: true }
    );
    if (response.data?.accessToken) {
      setAccessToken(response.data.accessToken);
      return {
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      };
    }
    throw new Error("Refresh failed: no access token returned");
  } catch (error) {
    clearAccessToken();
    throw error;
  }
};
