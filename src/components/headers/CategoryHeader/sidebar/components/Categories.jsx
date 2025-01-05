import React from "react";
import { TrendingCategory } from "./TrendingCategory";
import { DigitalContentCategory } from "./DigitalContentCategory";
import { ShopCategory } from "./ShopCategory";
import { ProgramFeaturesCategory } from "./ProgramFeaturesCategory";
import { HelpSettingsCategory } from "./HelpSettingsCategory";

export const Categories = ({ isOpen }) => {
  return (
    <>
      <ul
        className="text-slate-500  pb-[70px] text-[18px] font-[700] leading-4 pt-[10px] 
        overflow-auto h-full
        "
      >
        {/* --------------------------------Trending --------------------------------- */}
        <TrendingCategory />

        {/* ------------------------#2 Digital Content and Devices---------------------- */}
        <DigitalContentCategory isOpen={isOpen} />

        {/* -----------------------  #3  Shop by Category------------------------------ */}
        <ShopCategory isOpen={isOpen} />

        {/* ---------------------------#4 Programs & Features  ------------------------ */}
        <ProgramFeaturesCategory isOpen={isOpen} />

        {/* ------------------------------ Help & Settings  ----------------------------*/}
        <HelpSettingsCategory />
      </ul>
    </>
  );
};
