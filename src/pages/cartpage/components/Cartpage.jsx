import React from "react";
import { EmptyCartPage } from "./EmptyCart";

export const Cartpage = () => {
  return (
    <div>
      <div className="w-full min-w-[998px] h-[450px] bg-[#EAEDED] px-[18px] py-3.5 my-0 mx-auto">
        <EmptyCartPage />
      </div>
    </div>
  );
};
