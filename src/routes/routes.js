export const routes = {
  signup: "/signup",
  loginEmail: "/login/email",
  loginPassword: "/login/password",
  home: "/home",
  products: `/products`,
  product: "/products/product/:productId?",
  cart: "/cart",
  aboutUs: "/about-us",
  privacy: "/privacy",
  terms: "/terms-and-conditions",
  //
  getProducts: (filter) => `/products?${filter}`,
  getProduct: (productId) => `/products/product/${productId}?`,
};
