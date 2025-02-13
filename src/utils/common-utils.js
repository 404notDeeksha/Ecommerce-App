export const getImages = (image) => {
  return image?.replace("via.placeholder.com", "placehold.co");
};

export const convertNumberInNumerals = (number) => {
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
