import axios from "axios";
import { URL } from "../constant/url";
import { store } from "../redux/store";
import { logout } from "../redux/slices/authSlice";

const api = axios.create({
  baseURL: URL.BACKEND_URL,
  withCredentials: true, // Ensures cookies are sent
});

// Response interceptor (Handle expired access token)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      try {
        await axios.get("/user/refresh", { withCredentials: true }); // Requests new token
        return axios(error.config); // Retry failed request
      } catch (refreshError) {
        store.dispatch(logout());
        window.location.href = "/login/email";
      }
    }
    return Promise.reject(error);
  }
);

export default api;
