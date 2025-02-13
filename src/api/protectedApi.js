import { URL } from "../constant/url";
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

export const getProduct = async (productId) => {
  try {
    const response = await API.get(`/products/product/${productId}`);
    return response?.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};

export const getFilteredProducts = async (filter) => {
  try {
    const response = await API.get(`/products?${filter}`);
    if (
      !response?.data ||
      !response.data.success ||
      response.data.data.length === 0
    ) {
      return { success: false, message: "No products available" };
    }
    return response?.data;
  } catch (error) {
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};

export const addToCart = async (body) => {
  try {
    const response = await API.post("/cart", body);
    return response?.data;
  } catch (error) {
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};

export const getCart = async (userId) => {
  try {
    const response = await API.get(`/cart/${userId}`);
    return response?.data;
  } catch (error) {
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};

export const updateCartQty = async (userId, productId, qty) => {
  try {
    // const response = await axios.put(
    //   `${URL.CART_API}/${userId}/${productId}/${qty}`
    // );
    const response = await API.put(`/cart/${userId}/${productId}/${qty}`);
    return response?.data;
  } catch (error) {
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};

export const deleteCartProduct = async (userId, productId) => {
  try {
    // const response = await axios.delete(
    //   `${URL.CART_API}/${userId}/${productId}`
    // );
    const response = await API.delete(`/cart/${userId}/${productId}`);
    return response?.data;
  } catch (error) {
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};
