import axios from "axios";
import { refreshAccessToken } from "./refreshAccessToken"; // Function to refresh token
import { URL } from "../constant/url";

const API = axios.create({
  baseURL: `${URL.BACKEND_URL}`,
  withCredentials: true, // Ensure cookies are sent with requests
});

// Request Interceptor (Attach Access Token to Headers)
// No need to access accessToken from cookies as it's handled automatically by the browser
API.interceptors.request.use(
  (config) => {
    // You don't need to manually add the access token to the header
    // The HttpOnly cookie will be sent automatically with the request due to withCredentials
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
        // Call backend to refresh the access token
        await refreshAccessToken();
        // Retry the original request
        return API(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default API;

// import axios from "axios";
// import { refreshAccessToken } from "./refreshAccessToken"; // Function to refresh token
// import { URL } from "../constant/url";

// const API = axios.create({
//   baseURL: `${URL.BACKEND_URL}`,
//   withCredentials: true, // Ensure cookies are sent with requests
// });

// // Request Interceptor (Attach Access Token to Headers)
// API.interceptors.request.use(
//   async (config) => {
//     const token = document.cookie
//       .split("; ")
//       .find((row) => row) // Directly find the token (without prefix)
//       ?.trim(); // Direct token value without accessToken= prefix
//     // console.log("TOKEN", token);
//     if (token) {
//       config.headers.Authorization = token; // Attach token directly to header
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Response Interceptor (Handle Token Expiry)
// API.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     // If 401 (Unauthorized) & No Retry Attempt Yet
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         await refreshAccessToken();
//         return API(originalRequest); // Retry failed request
//       } catch (err) {
//         return Promise.reject(err);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export default API;

// import axios from "axios";
// import { refreshAccessToken } from "./refreshAccessToken"; // Function to refresh token
// import { URL } from "../constant/url";

// // **Utility function to get a specific cookie value by name**
// const getCookieValue = (cookieName) => {
//   const match = document.cookie.match(new RegExp(`(^| )${cookieName}=([^;]+)`));
//   return match ? match[2] : null;
// };

// const API = axios.create({
//   baseURL: `${URL.BACKEND_URL}`,
//   withCredentials: true, // Ensure cookies are sent with requests
// });

// // Request Interceptor (Attach Access Token to Headers)
// API.interceptors.request.use(
//   async (config) => {
//     // **Retrieve accessToken cookie**
//     const accessToken = getCookieValue("accessToken"); // Retrieve accessToken cookie
//     if (accessToken) {
//       config.headers.Authorization = accessToken; // Attach token directly to header
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Response Interceptor (Handle Token Expiry)
// API.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     // If 401 (Unauthorized) & No Retry Attempt Yet
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         await refreshAccessToken();
//         return API(originalRequest); // Retry failed request
//       } catch (err) {
//         return Promise.reject(err);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export default API;
