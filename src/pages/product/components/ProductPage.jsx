import axios from "axios";
import React, { useEffect, useState } from "react";
import { ConvertNumberInNumerals } from "../../product/utils/ConvertNumberInNumerals";

export const ProductPage = () => {
  const [productData, setProductData] = useState("");
  const [productDataPrice, setProductDataPrice] = useState("");
  const productId = "f8a9c9b0-6a55-40f5-944e-85384159c8fd";

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/products/product/${productId}`
        );
        setProductData(response.data);
        let priceInNumerals = ConvertNumberInNumerals(response.data.Price);
        setProductDataPrice(priceInNumerals);
        console.log("Price", priceInNumerals);
        console.log("Data", response.data);
      } catch (error) {
        console.log("Error fetching product", error);
      }
    };
    fetchProductData();
  }, []);
  return (
    <div className="w-full min-w-[996px] bg-[#EAEDED] px-[18px] py-3.5 my-0 mt-5 mx-auto ">
      <div className="flex">
        <img src={productData.ImageURL} className="w-[580px] h-[580px]" />

        <div className=" mx-8 flex-1">
          <h1 className="text-2xl">{productData.ProductName}</h1>
          <div className="text-sm">Brand: {productData.Brand}</div>
          <div className="rating">Rating</div>
          <div className="border-b-2 border-gray-500 mt-2"></div>
          <div className="">Discount%</div>
          <div className="font-bold text-red-600 text-4xl">
            {productDataPrice}
          </div>
          <div className="">Original Price</div>
          <div className="border-b-2 border-gray-500 mt-2"></div>
          <ul className="flex gap-4">
            <li>Free Delivery</li>
            <li>
              7 days
              <br /> Replacement
            </li>
            <li>Warranty Policy</li>
            <li>Secure Transaction</li>
          </ul>
          <div className="border-b-2 border-gray-500 mt-2"></div>
        </div>
        <div className="mx-4">
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};
