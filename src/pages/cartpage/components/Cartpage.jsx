import React from "react";
import { EmptyCartPage } from "./EmptyCart";
import { ProductCardCart } from "./ProductCardCart";

export const Cartpage = () => {
  return (
    <div>
      <div className="w-full min-w-[998px] bg-[#EAEDED] px-[18px] py-3.5 my-0 mx-auto">
        <div className="max-w-[1500px] m-auto text-sm leading-5 ">
          {/* <EmptyCartPage /> */}
          <ProductCardCart />

          {/* <div className="max-w-[1500px] bg-[#fff]  h-[74px] pt-5 pb-[15px] mb-5 mr-5"></div> */}
          <div className="text-xs">
            The price and availability of items at Amazon.in are subject to
            change. The shopping cart is a temporary place to store a list of
            your items and reflects each item's most recent price. Do you have a
            promotional code? We'll ask you to enter your claim code when it's
            time to pay.
          </div>
        </div>
      </div>
    </div>
  );
};
