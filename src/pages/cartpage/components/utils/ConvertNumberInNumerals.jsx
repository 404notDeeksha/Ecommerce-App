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
