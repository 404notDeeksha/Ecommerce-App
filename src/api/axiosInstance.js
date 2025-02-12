import axios from "axios";
import { refreshAccessToken } from "./refreshAccessToken"; // Function to refresh token
import { URL } from "../constant/url";

const API = axios.create({
  baseURL: `${URL.BACKEND_URL}`,
  withCredentials: true, // Ensure cookies are sent with requests
});

// Request Interceptor (Attach Access Token to Headers)
API.interceptors.request.use(
  async (config) => {
    const token = document.cookie
      .split("; ")
      .find((row) => row) // Directly find the token (without prefix)
      ?.trim(); // Direct token value without accessToken= prefix
    console.log("TOKEN", token);
    if (token) {
      config.headers.Authorization = token; // Attach token directly to header
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor (Handle Token Expiry)
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If 401 (Unauthorized) & No Retry Attempt Yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await refreshAccessToken();
        return API(originalRequest); // Retry failed request
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default API;
