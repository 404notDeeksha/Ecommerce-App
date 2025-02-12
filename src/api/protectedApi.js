import API from "./axiosInstance";

export const getCarousel = async () => {
  try {
    const response = await API.get("/carousel/featured");
    return response?.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};

export const getProducts = async (category, query) => {
  try {
    const response = await API.get(`/products?category=${category}&&${query}`);
    return response?.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};
