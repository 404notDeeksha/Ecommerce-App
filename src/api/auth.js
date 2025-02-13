import axios from "axios";
import { URL } from "../constant/url";
import { persistor } from "../redux/store";

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
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};

export const logoutUser = async () => {
  try {
    await axios.post(`${URL.USER_API}/logout`, {}, { withCredentials: true }); // ✅ Ensures cookies are handled
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
  persistor.purge();
};
