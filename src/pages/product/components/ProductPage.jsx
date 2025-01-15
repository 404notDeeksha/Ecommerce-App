import axios from "axios";
import React, { useEffect, useState } from "react";
import { convertNumberInNumerals } from "../../product/utils/ConvertNumberInNumerals";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { URL } from "../../../constant/url";
import { getImages } from "../../../utils/common-utils";
import StarRatings from "react-star-ratings";
import { ProductSkeleton } from "./ProductSkeleton";
import { Skeleton } from "../../../components/Skeleton";

export const ProductPage = () => {
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  const data = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`${URL.PRODUCT_API}/${productId}`);
        if (response) {
          setLoading(false);
          if (response.data.success) {
            setProductData(response.data.data);
          }
        }
      } catch (error) {
        console.log("Error fetching product", error);
      }
    };
    if (data.state) {
      setLoading(false);
      setProductData(data.state);
    } else {
      fetchProductData();
    }
  }, [productId]);

  const handleClick = async () => {
    const userId = "64a57e6e8f1a7d123456789a";
    const body = {
      userId: userId,
      items: [{ ...productData, quantity: 1 }],
    };
    try {
      const response = await axios.post(`${URL.CART_API}`, body);
      if (response.data.success) {
        console.log("Data added in cart", response.data);
        navigate("/cart");
      }
    } catch (err) {
      console.log("Error Updating data in cart", err);
    }
  };

  return (
    <>
      {loading ? (
        <Skeleton Component={ProductSkeleton} repeatations={1} />
      ) : (
        <div className="w-full min-w-[996px] max-w-[1500px] bg-[#fff] px-[18px] py-3.5 my-0 mt-5 mx-auto ">
          <div className="flex">
            <div className="w-[540px]">
              <img
                src={getImages(productData.Images && productData.Images[0])}
                className="w-full h-auto"
              />
            </div>

            <div className=" mx-8 flex-1 flex flex-col gap-3">
              <h1 className="text-4xl font-[800]">{productData.ProductName}</h1>
              <div className="text-base">
                Brand: <span className="underline">{productData.Brand}</span>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className="text-sm">{productData.Rating}</div>
                <StarRatings
                  rating={productData.Rating}
                  starRatedColor="#de7921"
                  starEmptyColor="dark-grey"
                  starDimension="18px"
                  starSpacing="2px"
                  numberOfStars={5}
                  name="rating"
                />
              </div>
              <div className="border-b-2 border-gray-400 my-1"></div>
              <div className="font-bold text-red-600 text-2xl my-1">
                {convertNumberInNumerals(productData.Price)}
              </div>
              <div className="border-b-2 border-gray-400 my-1"></div>
              <ul className="flex gap-8 ">
                <li key={`icon-1`} className="flex flex-col gap-2 align-middle">
                  <CiDeliveryTruck className="w-10 h-10 m-auto " />
                  <div className="text-sm text-center">Free Delivery</div>
                </li>
                <li className="flex flex-col gap-2 align-middle" key={`icon-2`}>
                  <IoCalendarClearOutline className="w-8 h-10 m-auto " />
                  <div className="text-center text-sm">7 days Replacement</div>
                </li>
                <li key={`icon-3`} className="flex flex-col gap-2 align-middle">
                  <MdOutlineSecurity className="w-8 h-10 m-auto " />
                  <div className="text-sm text-center">Warranty Policy</div>
                </li>
                <li key={`icon-4`} className="flex flex-col gap-2 align-middle">
                  <RiSecurePaymentLine className="w-8 h-10 m-auto " />
                  <div className="text-sm text-center">Secure Transaction</div>
                </li>
              </ul>
              <div className="border-b-2 border-gray-400 my-4"></div>
              <div className="text-sm flex flex-col gap-3">
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
              <div className="border-b-2 border-gray-400 my-4"></div>
              <div className="font-bold ">About this Item</div>
              <ul className="mb-20 flex flex-col gap-2">
                {productData?.AboutThisItem?.map((description, index) => {
                  return (
                    <li className="text-sm " key={index}>
                      {description}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="py-3.5 px-5 w-40 border border-gray-400 flex flex-col gap-4 gap-y-5">
              <div className=" text-lg font-bold">
                {convertNumberInNumerals(productData.Price)}
              </div>
              <label for="qty" className="text-sm">
                Quantity:
              </label>
              <select
                id="qty"
                className=" w-28 border border-gray-400 rounded text-center text-sm py-1 px-5 bg-gray-200 "
              >
                {[...Array(20).keys()].map((item, index) => {
                  return (
                    <option className="text-center" key={index}>
                      {item + 1}
                    </option>
                  );
                })}
              </select>

              <button
                className="px-5 py-1 mx-auto bg-yellow-500 rounded-xl text-center text-sm"
                onClick={handleClick}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
