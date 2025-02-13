export const routes = {
  signup: "/signup",
  loginEmail: "/login/email",
  loginPassword: "/login/password",
  home: "/home",
  products: `/products`,
  product: "/products/product/:productId?",
  cart: "/cart",
  //
  getProducts: (filter) => `/products?${filter}`,
  getProduct: (productId) => `/products/product/${productId}?`,
};
