import axios from "axios";
import React, { useEffect, useState } from "react";
import { convertNumberInNumerals } from "./utils/ConvertNumberInNumerals";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { URL } from "../../../constant/url";
import { getImages } from "../../../utils/common-utils";
import { getCookieId } from "../../../utils/CookieId";

export const ShoppingCartItems = () => {
  const [cartData, setCartData] = useState({});
  const userId = getCookieId();
  console.log("Grid Page -> cart", userId);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get(`${URL.CART_API}/${userId}`);
        console.log("Data present in cart", response.data);
        if (response.data.success) {
          setCartData({
            ...cartData,
            userId: userId,
            items: response.data.data.items || [],
            totalQty: calculateTotalQtyInCart(response?.data.data.items),
            totalPrice: convertNumberInNumerals(response?.data.data.totalPrice),
          });
        }
      } catch (error) {
        console.error("Error in retrieving data ", error);
      }
    };
    fetchCartData();
  }, []);

  // const updateCartOnBackend = async (userIdCart, updatedItems) => {
  // try {
  //   const response = await axios.put(
  //     "http://localhost:8000/api/cart/update",
  //     {
  //       userIdCart,
  //       items: updatedItems,
  //     }
  //   );
  //   console.log("Cart updated successfully:", response.data);
  //   return response.data; // Return data for further processing if needed
  // } catch (error) {
  //   console.error(
  //     "Error updating cart:",
  //     error.response?.data || error.message
  //   );
  //   throw error;
  // }
  // };

  // const updateQuantity = ({ ProductId, newQuantity, itemsInCart }) => {
  //   const updatedCart = itemsInCart.map((item) =>
  //     item.ProductId === ProductId ? { ...item, quantity: newQuantity } : item
  //   );
  //   setItemsInCart(updatedCart);
  //   updateCartOnBackend(updatedCart); // Sync updated cart with backend
  // };

  // console.log("Products", itemsInCart);

  return (
    <div className="flex justify-between">
      <div className="mr-5 mb-5 p-5 bg-white flex-1">
        <div className="text-3xl mb-4">Shopping Cart</div>
        <div className="border-b-2 border-gray-300"></div>
        {cartData?.items?.map((ele, index) => {
          return (
            <ProductCard
              key={index}
              itemData={ele}
              index={0}
              userId={cartData.userId}
              productId={ele.ProductId}
              setCartData={setCartData}
            />
          );
        })}
        <div className="text-lg text-right">
          <div className="">
            Subtotal ({cartData?.totalQty} items):
            <span className="font-bold ml-4 ">{cartData?.totalPrice}</span>
          </div>
        </div>
      </div>

      {/* ------------------------------SIDE SECTION CART -------------------------------- */}
      <div className=" font-bold text-lg ">
        <div className="bg-white p-4 pb-6">
          <span className=""> Subtotal ({cartData?.totalQty} items):</span>
          <span className="ml-4 ">{cartData?.totalPrice}</span>
          <div className="text-center mt-2">
            <button className="font-normal text-sm bg-yellow-500 rounded-3xl px-4 py-2 text-center mt-3">
              Proceed to Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ itemData, index, userId, productId, setCartData }) => {
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
        <img src={getImages(itemData.Images[index++])} className="w-44" />
        <div className="text-lg flex-1 pl-4">
          <div className="font-bold">{itemData.ProductDescription}</div>
          <div className="text-sm mt-2">{itemData.ProductName}</div>
          <div className="text-xs mt-1">Gift Options not available</div>
          <ul className="flex text-sm mt-2 items-center">
            <QuantityUpdationButton
            // userIdCart={userIdCart}
            // qty={ele.totalQty}
            // productId={itemData.ProductId}
            // itemData={itemData}
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
          {convertNumberInNumerals(itemData.Price)}
        </div>
      </div>
      <div className="border-b-2 border-gray-300 my-4"></div>
    </>
  );
};

const QuantityUpdationButton = ({ qty }) =>
  // { qty, productId, itemData }
  {
    // const handleIncrementQuantity = () => {
    //   const item = itemsInCart.find((item) => item.ProductId === productId);
    //   if (item) {
    //     updateQuantity(productId, item.quantity + 1);
    //   }
    // };

    // // Decrement quantity
    // const handleDecrementQuantity = (productId) => {
    //   const item = itemsInCart.find((item) => item.ProductId === productId);
    //   if (item && item.quantity > 1) {
    //     updateQuantity(productId, item.quantity - 1);
    //   }
    // };

    return (
      <>
        <li className="border-yellow-500 border-4 rounded-xl flex m-2 px-2 py-0.5 ml-0 items-center ">
          <div
            className="font-bold cursor-pointer"
            // onClick={handleDecrementQuantity}
          >
            <FaMinus />
          </div>
          <div className="mx-4 font-bold">{qty}</div>
          <div
            className="font-bold p-1 cursor-pointer "
            // onClick={handleIncrementQuantity}
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
  return total;
};
