import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { URL } from "../../../constant/url";
import {
  getImages,
  getCookieId,
  convertNumberInNumerals,
  setNumberToLocalStorage,
} from "../../../utils/common-utils";
import { ShoppingCartSkeleton } from "./ShoppingCartSkeleton";
import { Skeleton } from "../../../components/Skeleton";
import { Link } from "react-router-dom";
import { EmptyCartPage } from "./EmptyCart";
import isEmpty from "lodash.isempty";

export const ShoppingCartItems = () => {
  const [cartData, setCartData] = useState({});
  const [loading, setLoading] = useState(true);

  const userId = getCookieId();

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get(`${URL.CART_API}/${userId}`);
        // console.log("Data present in cart", response.data);
        if (response) {
          setLoading(false);
          if (response.data.success) {
            setCartData(response.data.data);
          }
        }
      } catch (error) {
        console.error("Error in retrieving data ", error);
      }
    };
    fetchCartData();
  }, []);

  if (isEmpty(cartData) || isEmpty(cartData?.items)) {
    return <EmptyCartPage />;
  }

  console.log("CART Data", cartData);
  return (
    <>
      {loading ? (
        <Skeleton Component={ShoppingCartSkeleton} repeatations={1} />
      ) : (
        <div className="flex justify-between">
          <div className="mr-5 mb-5 p-5 bg-white flex-1">
            <div className="text-3xl mb-4">Shopping Cart</div>
            <div className="border-b-2 border-gray-300"></div>
            {cartData?.items?.map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  product={product}
                  index={0}
                  userId={cartData.userId}
                  productId={product.productId}
                  setCartData={setCartData}
                />
              );
            })}
            <div className="text-lg text-right">
              <div className="">
                Subtotal ({calculateTotalQtyInCart(cartData.items)} items):
                <span className="font-bold ml-4 ">
                  {convertNumberInNumerals(cartData?.totalPrice)}
                </span>
              </div>
            </div>
          </div>

          {/* ------------------------------SIDE SECTION CART -------------------------------- */}
          <div className=" font-bold text-lg ">
            <div className="bg-white p-4 pb-6">
              <span className="">
                {" "}
                Subtotal ({calculateTotalQtyInCart(cartData.items)} items):
              </span>
              <span className="ml-4 ">
                {convertNumberInNumerals(cartData?.totalPrice)}
              </span>
              <div className="text-center mt-2">
                <button className="font-normal text-sm bg-yellow-500 rounded-3xl px-4 py-2 text-center mt-3">
                  Proceed to Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ProductCard = ({ product, index, userId, productId, setCartData }) => {
  const handleDelete = async () => {
    console.log("clicking");
    try {
      const response = await axios.delete(
        `${URL.CART_API}/${userId}/${productId}`
      );
      if (response.data.success) {
        setCartData(response.data.data);
        console.log(
          "Product Deletion Data from cart sent Successfully",
          response.data
        );
      }
    } catch (err) {
      console.log("Error sending data", err);
    }
  };

  return (
    <>
      <div className="p-3 flex justify-between">
        <img src={getImages(product.images[index++])} className="w-44" />
        <div className="text-lg flex-1 pl-4">
          <Link to={`/products/product/${product.productId}`}>
            <div className="font-bold">{product.productDescription}</div>
          </Link>
          <div className="text-sm mt-0.5 font-[500]">{product.productName}</div>
          <div className="text-xs mt-2">Gift Options not available</div>
          <ul className="flex text-sm mt-2 items-center">
            <QuantityUpdationButton
              qty={product.quantity}
              userId={userId}
              productId={product.productId}
              setCartData={setCartData}
            />
            <li className="mx-2">|</li>
            <li className="cursor-pointer" onClick={handleDelete}>
              Delete
            </li>
            <li className="mx-2">|</li>
            <li className="">Save for Later</li>
            <li className="mx-2">|</li>
            <li className="">See more like this</li>
            <li className="mx-2">|</li>
            <li className="">Share</li>
          </ul>
        </div>
        <div className="font-bold text-base ">
          {convertNumberInNumerals(product.price)}
        </div>
      </div>
      <div className="border-b-2 border-gray-300 my-4"></div>
    </>
  );
};

const QuantityUpdationButton = ({ qty, userId, productId, setCartData }) => {
  const handleDecrementQuantity = async (qty) => {
    // console.log("Qty", qty);
    if (qty === 1) {
      return null;
    }
    try {
      const response = await axios.put(
        `${URL.CART_API}/${userId}/${productId}/${qty}`
      );
      if (response.data.success) {
        console.log("Product Qty updation Successfully", response.data.data);
        setCartData(response.data.data);
      }
    } catch (err) {
      console.log("Error sending data", err);
    }
  };

  // // Increment quantity
  const handleIncrementQuantity = async (qty) => {
    // console.log("Qty", qty);
    try {
      const response = await axios.put(
        `${URL.CART_API}/${userId}/${productId}/${qty}`
      );
      if (response.data.success) {
        console.log("Product Qty updation Successfully", response.data.data);
        setCartData(response.data.data);
      }
    } catch (err) {
      console.log("Error sending data", err);
    }
  };

  return (
    <>
      <li
        className={`border-yellow-500 border-4 rounded-xl flex m-2 px-2 py-0.5 ml-0 items-center`}
      >
        <div
          className={`font-bold cursor-pointer  ${
            qty === 1
              ? "opacity-25 cursor-not-allowed pointer-events-none"
              : "none"
          }`}
          onClick={() => handleDecrementQuantity(qty - 1)}
        >
          <FaMinus />
        </div>
        <div className="mx-4 font-bold">{qty}</div>
        <div
          className="font-bold p-1 cursor-pointer "
          onClick={() => handleIncrementQuantity(qty + 1)}
        >
          <FaPlus />
        </div>
      </li>
    </>
  );
};

const calculateTotalQtyInCart = (data) => {
  let total = 0;
  data.forEach((ele) => {
    total += ele.quantity;
  });
  setNumberToLocalStorage("cartQty", total);
  return total;
};
