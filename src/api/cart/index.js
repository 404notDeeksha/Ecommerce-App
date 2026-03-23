import API from "../axiosInstance.js";

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

export const getCartQty = async (userId) => {
  try {
    const response = await API.get(`/cart/quantity/${userId}`);
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
