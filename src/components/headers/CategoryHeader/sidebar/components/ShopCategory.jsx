import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight as SideArrowIcon } from "react-icons/md";
import { IoIosArrowDown as DownArrowIcon } from "react-icons/io";
import { ShopCategoryDropDown } from "./ShopCategoryDropDown";
import { AnimatePresence, motion } from "framer-motion";
import { getExtraShopCategory, getShopCategory } from "../data/Categories";

export const ShopCategory = ({ isOpen }) => {
  const [openDownArrow, setOpenDownArrow] = useState(false);
  const shopCategory = getShopCategory();
  const droplist = getExtraShopCategory();

  const handleDownIcon = () => {
    setOpenDownArrow(!openDownArrow);
  };
  return (
    <div className="border-slate-200 border-b-[1px] py-2">
      <li key="shopByCategory" className="pl-9 pr-5 py-[13px] text-black">
        Shop by Category
      </li>
      {shopCategory.map((ele, index) => {
        return (
          <li
            key={ele.id}
            className="font-[500] text-sm py-[13px] leading-5 px-9 
              cursor-pointer flex justify-between  hover:bg-[#eaeded] group"
          >
            <a href="">{ele.category}</a>
            {index < 4 && (
              <SideArrowIcon
                className={`group-hover:text-black 
                  ${isOpen ? "scale-[2]" : "scale-0"}`}
              />
            )}
          </li>
        );
      })}
      <li
        className="font-[500] text-sm leading-4 cursor-pointer bg-white"
        onClick={handleDownIcon}
      >
        {openDownArrow && (
          <AnimatePresence>
            <motion.div
              // initial={{ y: 0 }}
              // animate={{ y: "100%" }}
              // transition={{ duration: 0.7 }}
              // exit={{ y: 0 }}
              className="max-h-96 overflow-hidden grid text-sm text-slate-600"
            >
              <ShopCategoryDropDown droplist={droplist} sideArrowShow={true} />
            </motion.div>
          </AnimatePresence>
        )}
        <div className="hover:bg-[#eaeded] py-[13px] group flex">
          <span
            className={`pl-9 ${
              !openDownArrow
                ? "after:content-['See_all']"
                : "after:content-['see_less']"
            }`}
          ></span>
          <DownArrowIcon
            className={`group-hover:text-black ml-2 mt-0.5 scale-[1.3] 
              ${!openDownArrow ? "rotate-0" : "rotate-180"} `}
          />
        </div>
      </li>
    </div>
  );
};
