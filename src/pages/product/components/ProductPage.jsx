import axios from "axios";
import React, { useEffect, useState } from "react";
import { convertNumberInNumerals } from "../../product/utils/ConvertNumberInNumerals";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { useLocation, useParams } from "react-router-dom";
import { URL } from "../../../constant/url";
import { getImages } from "../../../utils/common-utils";

export const ProductPage = () => {
  const [productData, setProductData] = useState({});
  const { productId } = useParams();
  const data = useLocation();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`${URL.PRODUCT_API}/${productId}`);
        console.log(`demo url ${URL.PRODUCT_API}/${productId}`);
        console.log(response);
        setProductData(response.data);
      } catch (error) {
        console.log("Error fetching product", error);
      }
    };
    console.log(`My state`, data.state);
    data.state ? setProductData(data.state) : fetchProductData();
  }, [productId]);

  console.log(productData);
  return (
    <div className="w-full min-w-[996px] max-w-[1500px] bg-[#fff] px-[18px] py-3.5 my-0 mt-5 mx-auto ">
      <div className="flex">
        <img
          src={getImages(productData.Images && productData.Images[0])}
          className="w-[580px] h-[580px]"
        />
        <div className=" mx-8 flex-1">
          <h1 className="text-4xl font-[800]">{productData.ProductName}</h1>
          <div className="text-sm">
            Brand: <span className="underline">{productData.Brand}</span>
          </div>
          <div className="rating">{productData.Rating}</div>
          <div className="border-b-2 border-gray-500 my-2"></div>
          <div className="font-bold text-red-600 text-2xl my-2">
            {convertNumberInNumerals(productData.Price)}
          </div>
          <div className="border-b-2 border-gray-500 my-4"></div>
          <ul className="flex gap-8 mb-2 mt-4">
            <li key={`icon-1`}>
              <CiDeliveryTruck className="w-10 h-10 m-auto " />
              <div className="text-sm mt-2">Free Delivery</div>
            </li>
            <li className=" w-16 mx-2" key={`icon-2`}>
              <IoCalendarClearOutline className="w-8 h-10 m-auto " />
              <div className="text-center text-sm mt-2">7 days Replacement</div>
            </li>
            <li key={`icon-3`}>
              <MdOutlineSecurity className="w-8 h-10 m-auto " />
              <div className="text-sm mt-2">Warranty Policy</div>
            </li>
            <li key={`icon-4`}>
              <RiSecurePaymentLine className="w-8 h-10 m-auto " />
              <div className="text-sm mt-2">Secure Transaction</div>
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
            {productData?.AboutThisItem?.map((ele, index) => {
              return (
                <li className="text-sm" key={index}>
                  {ele}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="py-3.5 px-5 w-40 border border-gray-500">
          <div className=" text-lg font-bold mb-2">
            {convertNumberInNumerals(productData.Price)}
          </div>
          <label for="qty" className="text-sm mb-0.5">
            Quantity:{" "}
          </label>
          <select
            id="qty"
            className=" w-28 border border-gray-500 rounded text-center text-sm py-1 px-5 bg-gray-200 "
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
              return <option className="text-center">{item}</option>;
            })}
          </select>
          <button className="px-5 py-1 my-5 mx-auto bg-yellow-500 rounded-xl text-center text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
