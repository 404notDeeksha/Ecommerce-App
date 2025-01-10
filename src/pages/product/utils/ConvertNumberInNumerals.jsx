export const convertNumberInNumerals = (number) => {
  // console.log("Number", number);
  var options = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    style: "currency",
    currency: "INR",
  };
  var formattedNum = number?.toLocaleString("en-IN", options);
  return formattedNum;
};
