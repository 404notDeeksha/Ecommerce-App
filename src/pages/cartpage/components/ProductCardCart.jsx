import axios from "axios";
import React, { useEffect, useState } from "react";

export const ProductCardCart = () => {
  const [productData, setProductData] = useState([]);
  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const backend_url = "http://localhost:8000/api/cart";
  const user_id = "64a57e6e8f1a7d123456789a";

  useEffect(() => {
    axios
      .get(`${backend_url}/${user_id}`)
      .then((response) => {
        console.log("Product core data", response.data);
        setProductData(response.data.items || []);
        const qty = CalculateTotalQty(response.data.items);
        setTotalQty(qty);
        const price = ConvertNumberInNumerals(response.data.totalPrice);
        setTotalPrice(price);
      })
      .catch((error) => {
        console.error("Error in retrieving data ", error);
      });
  }, []);

  console.log("Products", productData);

  return (
    <div className="mr-5 mb-5 p-5 bg-white">
      <div className="text-3xl mb-4">Shopping Cart</div>
      <div className="border-b-2 border-gray-300"></div>
      {productData.map((ele) => {
        return <ProductCard key={ele.ProductId} productData={ele} index={0} />;
      })}
      <div className="text-lg text-right">
        <div className="">
          Subtotal ({totalQty} items):
          <span className="font-bold ml-4 ">{totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ productData, index }) => {
  return (
    <>
      <div className="p-3 flex justify-between">
        <img src={productData.Images[index++]} className="w-44 h-44" />
        <div className="text-lg flex-1">{productData.ProductDescription}</div>
        <div className="font-bold text-base ">{productData.Price}</div>
      </div>
      <div className="border-b-2 border-gray-300 my-4"></div>
    </>
  );
};

const CalculateTotalQty = (data) => {
  let total = 0;
  data.forEach((ele) => {
    total += ele.quantity;
  });
  return total;
};

const ConvertNumberInNumerals = (number) => {
  // var number = 1234567.89;

  // Define the formatting options
  var options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: "currency",
    currency: "INR",
  };

  // Format the number using the toLocaleString() and the options
  var formattedNum = number.toLocaleString("en-IN", options);

  // Display the formatted number
  console.log(formattedNum);
  return formattedNum;
  // Output: ₹ 12,34,567.89
};
