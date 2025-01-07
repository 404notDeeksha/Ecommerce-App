import axios from "axios";
import React, { useEffect, useState } from "react";
import { ConvertNumberInNumerals } from "./utils/ConvertNumberInNumerals";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

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

  // console.log("Products", productData);

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
  const price = ConvertNumberInNumerals(productData.Price);
  return (
    <>
      <div className="p-3 flex justify-between">
        <img src={productData.Images[index++]} className="w-44 h-44" />
        <div className="text-lg flex-1">
          <div className="font-bold">{productData.ProductDescription}</div>
          <div className="text-sm mt-2">{productData.ProductName}</div>
          <div className="text-xs mt-1">Gift Options not available</div>
          <ul className="flex text-sm mt-2 items-center">
            <li className="border-yellow-500 border-4 rounded-xl flex m-2 px-2 py-0.5 items-center ">
              <div className="font-bold cursor-pointer">
                <FaMinus />
              </div>
              <div className="mx-4 font-bold">{productData.quantity}</div>
              <div className="font-bold p-1 cursor-pointer">
                <FaPlus />
              </div>
            </li>
            <li className="mx-2">|</li>
            <li className="">Delete</li>
            <li className="mx-2">|</li>
            <li className="">Save for Later</li>
            <li className="mx-2">|</li>
            <li className="">See more like this</li>
            <li className="mx-2">|</li>
            <li className="">Share</li>
          </ul>
        </div>
        <div className="font-bold text-base ">{price}</div>
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
