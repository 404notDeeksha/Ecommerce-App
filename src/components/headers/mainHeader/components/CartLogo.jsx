import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { getNumberFromLocalStorage } from "../../../../utils/common-utils";

export const CartLogo = () => {
  let itemsNumberInCart;
  if (getNumberFromLocalStorage("cartQty")) {
    itemsNumberInCart = getNumberFromLocalStorage("cartQty");
  } else {
    itemsNumberInCart = 0;
  }

  const handleClick = () => {};

  return (
    <div
      className=" flex-col relative text-[#fff] hover-header cursor-pointer gap-3 px-5 py-0.5  border  "
      onClick={handleClick()}
    >
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
