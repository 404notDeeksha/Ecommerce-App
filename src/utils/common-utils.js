import { v4 as uuidv4 } from "uuid";

export const getImages = (image) => {
  return image?.replace("via.placeholder.com", "placehold.co");
};

export const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const setToLocalStorage = (key, user) => {
  return localStorage.setItem(key, JSON.stringify(user));
};

export const setCookieId = (value) => {
  const DAYS_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
  const date = new Date();
  date.setTime(date.getTime() + 2 * DAYS_IN_MILLISECONDS); // Convert days to milliseconds
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `cId=${value}; ${expires}; path=/`;
};

export const getCookieId = () => {
  let name = `cId`;
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
