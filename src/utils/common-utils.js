export const getImages = (image) => {
  return image?.replace("via.placeholder.com", "placehold.co");
};
export const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
export const setToLocalStorage = (key, user) => {
  return localStorage.setItem(key, JSON.stringify(user));
};
