import axios from "axios";
import { URL } from "../constant/url";
import { persistor } from "../redux/store";

export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${URL.USER_API}/signup`, userData, {
      withCredentials: true,
    });
    // console.log(response.data, `${URL.USER_API}/signup`);
    return response.data;
  } catch (error) {
    // console.log(error);
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};

export const verifyEmail = async (userData) => {
  try {
    const response = await axios.post(`${URL.USER_API}/emailAuth`, userData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};

export const verifyPassword = async (userData) => {
  // console.log("Login Res", userData);
  try {
    const response = await axios.post(
      `${URL.USER_API}/passwordAuth`,
      userData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    // console.error("Login failed:", error);
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};

export const logoutUser = async () => {
  // console.log("Logging out");
  try {
    await axios.post(`${URL.USER_API}/logout`, {}, { withCredentials: true }); // ✅ Ensures cookies are handled
  } catch (error) {
    // console.error("Logout failed:", error.response?.data?.message);
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
  persistor.purge();
};
