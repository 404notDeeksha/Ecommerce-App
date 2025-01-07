import axios from "axios";
import React, { useEffect, useState } from "react";
import { ConvertNumberInNumerals } from "../../product/utils/ConvertNumberInNumerals";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { ProductCardCart } from "./../../cartpage/components/ProductCardCart";

export const ProductPage = () => {
  const [productData, setProductData] = useState("");
  const [productDataPrice, setProductDataPrice] = useState("");
  const productId = "6741dae5-4430-4f99-b2e1-da4f03194ae4";

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
    <div className="w-full min-w-[996px] bg-[#fff] px-[18px] py-3.5 my-0 mt-5 mx-auto ">
      <div className="flex">
        <img src={productData.ImageURL} className="w-[580px] h-[580px]" />

        <div className=" mx-8 flex-1">
          <h1 className="text-2xl">{productData.ProductName}</h1>
          <div className="text-sm">Brand: {productData.Brand}</div>
          <div className="rating">{productData.Rating}</div>
          <div className="border-b-2 border-gray-500 mt-2"></div>
          <div className="">Discount%</div>
          <div className="font-bold text-red-600 text-4xl">
            {productDataPrice}
          </div>
          <div className="">Original Price</div>
          <div className="border-b-2 border-gray-500 my-4"></div>
          <ul className="flex gap-8 mb-2 mt-4">
            <li>
              <CiDeliveryTruck className="w-10 h-10 m-auto " />
              Free Delivery
            </li>
            <li className=" w-16 mx-2">
              <IoCalendarClearOutline className="w-10 h-10 m-auto " />
              <div className="text-center">7 days Replacement</div>
            </li>
            <li>
              <MdOutlineSecurity className="w-10 h-10 m-auto " />
              Warranty Policy
            </li>
            <li>
              <RiSecurePaymentLine className="w-10 h-10 m-auto " />
              Secure Transaction
            </li>
          </ul>
          <div className="border-b-2 border-gray-500 my-4"></div>
          <div className="text-sm">
            <div className="flex text-wrap ">
              <div className="font-bold w-40">Colour:</div>
              <div className="">{productData.Colour}</div>
            </div>
            <div className="flex">
              <div className="font-bold w-40">Category:</div>
              <div className="">{productData.Category}</div>
            </div>
            <div className="flex">
              <div className="font-bold w-40">Model Name:</div>
              <div className="">{productData.ModelName}</div>
            </div>
            <div className="flex">
              <div className="font-bold w-40">Warranty:</div>
              <div className="">{productData.Warranty}</div>
            </div>
            <div className="flex">
              <div className="font-bold w-40">Material:</div>
              <div className="">{productData.Material}</div>
            </div>
            <div className="flex">
              <div className="font-bold w-40">Item Dimensions:</div>
              <div className="">{productData.ItemDimensions}</div>
            </div>
          </div>
          <div className="border-b-2 border-gray-500 my-4"></div>
          <div className="font-bold mt-5 ">About this Item</div>
          <ul className="mb-20">
            {productData?.AboutThisItem?.map((ele) => {
              return (
                <li className="text-sm" key={ele.ProductId}>
                  {ele}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
