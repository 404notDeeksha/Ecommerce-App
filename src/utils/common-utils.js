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

export const getTotalQtyFromCart = (data = []) => {
  let total = 0;
  data.forEach((ele) => {
    total += ele.quantity;
  });
  return total;
};
