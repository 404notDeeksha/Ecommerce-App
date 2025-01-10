import axios from "axios";
import React, { useEffect, useState } from "react";
import { ConvertNumberInNumerals } from "./utils/ConvertNumberInNumerals";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { URL } from "../../../constant/url";
export const ShoppingCartItems = () => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [totalQtyInCart, setTotalQtyInCart] = useState(0);
  const [totalPriceOfCart, setTotalPriceOfCart] = useState(0);
  const [userIdCart, setUserIdCart] = useState("");
  const user_id = "64a57e6e8f1a7d123456789a";
  // const api_url = URL.CART_API + `/${user_id}`;

  useEffect(() => {
    axios
      .get(`${URL.CART_API}/${user_id}`)
      .then((response) => {
        console.log("Product core data", response.data);
        setUserIdCart(response.data.userId);
        setItemsInCart(response.data.items || []);
        console.log("Items in cart", response.data);
        const qty = CalculateTotalQtyInCart(response.data.items);
        setTotalQtyInCart(qty);
        const price = ConvertNumberInNumerals(response.data.totalPrice);
        setTotalPriceOfCart(price);
      })
      .catch((error) => {
        console.error("Error in retrieving data ", error);
      });
  }, [userIdCart]);

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
        {itemsInCart.map((ele) => {
          return <ProductCard key={ele.ProductId} itemData={ele} index={0} />;
        })}
        <div className="text-lg text-right">
          <div className="">
            Subtotal ({totalQtyInCart} items):
            <span className="font-bold ml-4 ">{totalPriceOfCart}</span>
          </div>
        </div>
      </div>
      <div className=" font-bold text-lg ">
        <div className="bg-white p-4 pb-6">
          <span className=""> Subtotal ({totalQtyInCart} items):</span>
          <span className="ml-4 ">{totalPriceOfCart}</span>
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

const ProductCard = ({ itemData, index }) => {
  const price = ConvertNumberInNumerals(itemData.Price);
  return (
    <>
      <div className="p-3 flex justify-between">
        <img src={itemData.Images[index++]} className="w-44 h-44" />
        <div className="text-lg flex-1">
          <div className="font-bold">{itemData.ProductDescription}</div>
          <div className="text-sm mt-2">{itemData.ProductName}</div>
          <div className="text-xs mt-1">Gift Options not available</div>
          <ul className="flex text-sm mt-2 items-center">
            <QuantityUpdationButton
              // userIdCart={userIdCart}
              qty={itemData.quantity}
              // productId={itemData.ProductId}
              // itemData={itemData}
            />
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

const CalculateTotalQtyInCart = (data) => {
  let total = 0;
  data.forEach((ele) => {
    total += ele.quantity;
  });
  return total;
};
