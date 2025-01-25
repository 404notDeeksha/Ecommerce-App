import { v4 as uuidv4 } from "uuid";

export const getImages = (image) => {
  return image?.replace("via.placeholder.com", "placehold.co");
};

export const getDataFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const getNumberFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  if (value === null) {
    return null; // Return null if the key doesn't exist
  }
  const parsedValue = parseFloat(value);
  if (isNaN(parsedValue)) {
    return null;
  }
  return parsedValue;
};

export const setDataToLocalStorage = (key, user) => {
  return localStorage.setItem(key, JSON.stringify(user));
};

export const setNumberToLocalStorage = (key, value) => {
  if (typeof value !== "number") {
    throw new Error("Value must be a number.");
  }
  localStorage.setItem(key, value.toString());
};

export const setCookieId = (name, value) => {
  // console.log("Setting Cookie Id");
  const DAYS_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
  const date = new Date();
  date.setTime(date.getTime() + 2 * DAYS_IN_MILLISECONDS); // Convert days to milliseconds
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
};

export const getCookieId = (name) => {
  // console.log("Getting Cookie Id");
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${name}=`)) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
};

export const convertNumberInNumerals = (number) => {
  // console.log("Number", number);
  var options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: "currency",
    currency: "INR",
  };
  var formattedNum = number.toLocaleString("en-IN", options);
  return formattedNum;
};

export const addUniqueIdToElements = (array) => {
  const arrayNew = array.map((item) => {
    const key = uuidv4();
    return { id: key, ...item };
  });
  return arrayNew;
};

export const decodeUserId = (token) => {
  try {
    const base64Url = token.split(".")[1]; // Extract payload
    const payload = JSON.parse(atob(base64Url)); // Decode payload
    return payload.userId; // Extract userId
  } catch {
    return null; // Return null for invalid tokens
  }
};

export const isLoggedIn = (token) => {
  try {
    const base64Url = token.split(".")[1];
    const payload = JSON.parse(atob(base64Url));
    return payload.exp > Math.floor(Date.now() / 1000); // Compare exp with current time
  } catch {
    return false;
  }
};

export const deleteCookieId = (key) => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

export const deleteFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const getTotalQtyFromCart = (data = []) => {
  // console.log("cart for qty ",data);
  let total = 0;
  data.forEach((ele) => {
    total += ele.quantity;
  });
  return total;
};
