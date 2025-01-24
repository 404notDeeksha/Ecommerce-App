import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { getTotalQtyFromCart } from "../../../../utils/common-utils";
import { useSelector } from "react-redux";

export const CartLogo = () => {
  const cartItems = useSelector((state) => state.cart.data.items);
  let itemsNumberInCart = getTotalQtyFromCart(cartItems);
  // console.log("cartItems", cartItems);
  // console.log("NoOfItemsInCart", itemsNumberInCart);

  return (
    <div className=" flex-col relative text-[#fff] hover-header cursor-pointer gap-3 px-5 py-0.5  border  ">
      <div className="text-orange-500 inline pl-1.5 text-sm ">
        {itemsNumberInCart}
      </div>

      <div className="flex gap-3 mb-2">
        <FiShoppingCart className=" scale-[1.5]" />
        <div className="text-[14px] font-bold mobile:hidden">Cart</div>
      </div>
    </div>
  );
};
