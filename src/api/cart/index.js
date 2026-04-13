import API from "../axiosInstance.js";

export const addToCart = async (body) => {
  try {
    const response = await API.post("/cart", { items: body.items });
    return response?.data;
  } catch (error) {
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};

export const getCart = async () => {
  try {
    const response = await API.get("/cart");
    return response?.data;
  } catch (error) {
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};

export const getCartQty = async () => {
  try {
    const response = await API.get("/cart/quantity");
    return response?.data;
  } catch (error) {
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};

export const updateCartQty = async (productId, qty) => {
  try {
    const response = await API.put(`/cart/${productId}/${qty}`);
    return response?.data;
  } catch (error) {
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};

export const deleteCartProduct = async (productId) => {
  try {
    const response = await API.delete(`/cart/${productId}`);
    return response?.data;
  } catch (error) {
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};
