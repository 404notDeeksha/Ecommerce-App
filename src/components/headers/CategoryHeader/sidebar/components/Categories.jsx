import React from "react";
import { getCategoryData } from "../data/Categories";

export const Categories = () => {
  const categoryList = getCategoryData();
  // console.log(categoryList);
  return (
    <>
      <ul
        className="text-slate-500  pb-[70px] text-[18px] font-[700] leading-4 pt-[10px] 
        overflow-auto h-full
        "
      >
        {categoryList.map((ele) => {
          return (
            <div key={ele.category}>
              <li className="pl-9 pr-5 pt-[13px] pb-[10px] text-black">
                {ele.category}
              </li>
              <ul className="">
                {ele.subCategories.map((subCat) => {
                  return (
                    <li
                      key={subCat.id}
                      className="font-[500] text-sm py-[13px] leading-5 pl-9 cursor-pointer hover:bg-[#eaeded]"
                    >
                      {subCat.subCategory}
                    </li>
                  );
                })}
              </ul>
              <div className="border-slate-200 border-b-[1px] py-2"></div>
            </div>
          );
        })}
      </ul>
    </>
  );
};
