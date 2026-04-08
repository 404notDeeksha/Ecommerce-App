import API from "../axiosInstance.js";

export const createProduct = async (productData) => {
  try {
    const response = await API.post("/products", productData);
    return response?.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Failed to create product. Please try again.");
    }
  }
};

export const updateProduct = async (productId, productData) => {
  try {
    const response = await API.put(`/products/${productId}`, productData);
    return response?.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Failed to update product. Please try again.");
    }
  }
};

export const deleteProduct = async (productId) => {
  try {
    const response = await API.delete(`/products/${productId}`);
    return response?.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Failed to delete product. Please try again.");
    }
  }
};