const BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const URL = {
  BASE_URL,
  ACCOUNT_API: BASE_URL + "account",
  CATEGORY_API: BASE_URL + "category",
  CART_API: BASE_URL + "cart",
  PRODUCTS_API: BASE_URL + "products",
  PRODUCT_API: BASE_URL + "products/product",
  DELETE_CART_PRODUCT_API: BASE_URL + "cart",
};
