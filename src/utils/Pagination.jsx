import React, { useState } from "react";
import { convertNumberInNumerals } from "../pages/product/utils/ConvertNumberInNumerals";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { URL } from "../constant/url";
import axios from "axios";
import { getCookieId, setCookieId } from "./CookieId";
import { v4 as uuid } from "uuid";
import { getImages } from "./common-utils";

export const Pagination = ({ products, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products?.length / itemsPerPage);
  const numberedPages = [1, 2, 3, 4];
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {currentProducts?.map((ele) => {
          return (
            <ProductGridCard
              key={ele.ProductId}
              product_id={ele.ProductId}
              ele={ele}
            />
          );
        })}
      </div>
      <div className="flex border-gray-200 border items-center rounded-xl w-max mx-auto mt-20">
        <div
          className={`flex items-center p-4 cursor-pointer ${
            currentPage === 1
              ? "opacity-25 cursor-not-allowed pointer-events-none"
              : "none"
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <MdOutlineKeyboardArrowLeft />
          Previous
        </div>
        {
          <ul className="flex">
            {numberedPages?.map((number, index) => {
              return (
                <li
                  key={number}
                  className={`p-4 px-6 cursor-pointer${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {number}
                </li>
              );
            })}
          </ul>
        }
        <div
          className={`flex items-center p-4 px-6 cursor-pointer${
            currentPage === totalPages
              ? "opacity-25 cursor-not-allowed pointer-events-none"
              : "none"
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
          <MdKeyboardArrowRight />
        </div>
      </div>
    </div>
  );
};

const ProductGridCard = ({ ele }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Clicking");
    const product_id = ele.ProductId;
    navigate(`/products/product/${product_id}`, { state: ele });
  };

  const handleClickBtn = async () => {
    const userId = "64a57e6e8f1a7d123456789a";
    if (userId) {
      setCookieId(userId);
    } else {
      const uniqueId = uuid();
      setCookieId(uniqueId);
    }
    console.log("getcookie", getCookieId());
    const bodyCart = {
      userId: userId,
      items: [
        {
          ProductId: ele.ProductId,
          ProductName: ele.ProductName,
          ProductDescription: ele.ProductDescription,
          Price: ele.Price,
          Images: ele.Images,
          quantity: 1,
        },
      ],
    };
    console.log(bodyCart);
    try {
      const response = await axios.post(URL.CART_API, bodyCart);
      console.log("Data sent Successfully", response.data);
      navigate("/cart");
    } catch (err) {
      console.log("Error getting data", err);
    }
  };

  return (
    <>
      <div className="border-4 border-gray-200 w-[290px]">
        <img src={getImages(ele.Images[1])} className="w-full" />
        <div className="p-4">
          <div className="font-bold text-xl text-wrap " onClick={handleClick}>
            {ele.ProductDescription}
          </div>
          <div className="font-bold">{ele.ProductName}</div>
          <div className="text-sm">rating</div>
          <div className="font-bold text-3xl mt-5">
            {convertNumberInNumerals(ele.Price)}
          </div>
          <div className="text-sm my-2">Free Delivery</div>

          <button
            className="border-yellow-500 rounded-3xl bg-yellow-500 text-black px-3 py-1 mx-auto inline text-sm"
            onClick={handleClickBtn}
          >
            AddtoCart
          </button>
        </div>
      </div>
    </>
  );
};
