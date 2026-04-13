import axios from "axios";
import { URL } from "@config/index.js";
import { getAccessToken, setAccessToken, clearAccessToken, refreshAccessToken } from "@utils/authTokens.js";
import store from "@redux/store.js";
import { loginSuccess } from "@redux/slices/authSlice.js";

const API = axios.create({
  baseURL: `${URL.BACKEND_URL}`,
  withCredentials: true,
});

// Guard flag to prevent concurrent refresh attempts (multiple 401s firing at once)
let _isRefreshing = false;
let _failedQueue = [];

const processQueue = (error, token = null) => {
  _failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  _failedQueue = [];
};

// ─── Request interceptor: attach access token ──────────────────────────────────
API.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ─── Response interceptor: handle 401 + token refresh ─────────────────────────
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Only handle 401 errors that haven't been retried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (_isRefreshing) {
        return new Promise((resolve, reject) => {
          _failedQueue.push({ resolve, reject });
        }).then((token) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return API(originalRequest);
        });
      }

      originalRequest._retry = true;
      _isRefreshing = true;

      try {
        const state = store.getState();
        const refreshToken = state?.auth?.refreshToken;

        if (!refreshToken) {
          throw new Error("No refresh token available");
        }

        const tokens = await refreshAccessToken(refreshToken);
        store.dispatch(loginSuccess({ 
          user: state.auth.user, 
          refreshToken: tokens.refreshToken 
        }));
        processQueue(null, tokens.accessToken);
        _isRefreshing = false;

        originalRequest.headers.Authorization = `Bearer ${tokens.accessToken}`;
        return API(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        _isRefreshing = false;
        clearAccessToken();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default API;
