import React from "react";
import { MdOutlineKeyboardArrowRight as SideArrowIcon } from "react-icons/md";

export const ProgramFeaturesCategoryDropList = ({ droplist, sideArrowShow }) => {
  return (
    <>
      <div className="border-slate-200 border-t-[1px] py-2 ">
        <ul id="drop-list" className="flex-col text-slate-500">
          {droplist.map((ele) => {
            return (
              <li
                
                key={ele.id}
                className="font-[500] text-sm py-[13px] pl-9 leading-5 cursor-pointer 
                flex justify-between hover:bg-[#eaeded] group "
              >
                <a href="">{ele.category}</a>
                {sideArrowShow && (
                  <SideArrowIcon className="scale-[2] mr-5 group-hover:text-black" />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
// transition-all duration-700 ease-linear
