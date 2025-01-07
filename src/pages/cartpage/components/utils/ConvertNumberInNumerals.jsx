export const ConvertNumberInNumerals = (number) => {
  var options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: "currency",
    currency: "INR",
  };

  var formattedNum = number.toLocaleString("en-IN", options);

  console.log(formattedNum);
  return formattedNum;
};
