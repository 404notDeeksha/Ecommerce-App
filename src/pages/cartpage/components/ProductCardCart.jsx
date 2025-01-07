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
    <div className="flex justify-between">
      <div className="mr-5 mb-5 p-5 bg-white flex-1">
        <div className="text-3xl mb-4">Shopping Cart</div>
        <div className="border-b-2 border-gray-300"></div>
        {productData.map((ele) => {
          return (
            <ProductCard key={ele.ProductId} productData={ele} index={0} />
          );
        })}
        <div className="text-lg text-right">
          <div className="">
            Subtotal ({totalQty} items):
            <span className="font-bold ml-4 ">{totalPrice}</span>
          </div>
        </div>
      </div>
      <div className="bg-white font-bold text-lg p-3 h-44">
        <div className=""></div>
        <span className=""> Subtotal ({totalQty} items):</span>
        <span className="ml-4 ">{totalPrice}</span>
        <div className="font-normal text-sm bg-yellow-500 rounded-3xl px-4 py-2 text-center mt-3">
          Proceed to Buy
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
            <QuantityUpdationButton qty={productData.quantity} />
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

const QuantityUpdationButton = ({ qty }) => {
  return (
    <>
      <li className="border-yellow-500 border-4 rounded-xl flex m-2 px-2 py-0.5 ml-0 items-center ">
        <div className="font-bold cursor-pointer">
          <FaMinus />
        </div>
        <div className="mx-4 font-bold">{qty}</div>
        <div className="font-bold p-1 cursor-pointer">
          <FaPlus />
        </div>
      </li>
    </>
  );
};
