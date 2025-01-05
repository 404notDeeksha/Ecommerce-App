export const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
export const setToLocalStorage = (key, user) => {
  return localStorage.setItem(key, JSON.stringify(user));
};
