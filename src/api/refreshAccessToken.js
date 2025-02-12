import axios from "axios";
import { URL } from "../constant/url";

export const refreshAccessToken = async () => {
  try {
    const response = await axios.get(`${URL.BACKEND_URL}/user/refresh`, {
      withCredentials: true, // Ensures the refresh token is sent
    });

    if (response.status === 200) {
      console.log("Token refreshed");
    }
  } catch (error) {
    console.error("Failed to refresh token", error);
    throw error;
  }
};
