import axios from "axios";
import API from "../axiosInstance.js";
import { URL } from "@config/index.js";
import { persistor } from "@redux/store.js";
import { clearAccessToken } from "@utils/authTokens.js";

export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${URL.USER_API}/signup`, userData, {
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
  try {
    const response = await axios.post(
      `${URL.USER_API}/passwordAuth`,
      userData,
      {
        withCredentials: true,
      }
    );
    console.log("USER response BE ->", response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};

export const logoutUser = async (refreshToken) => {
  clearAccessToken();
  try {
    await API.post(`${URL.USER_API}/logout`, {
      refreshToken: refreshToken || "",
    });
  } catch (error) {
    // Clear state regardless of API error
  }
  persistor.purge();
};
