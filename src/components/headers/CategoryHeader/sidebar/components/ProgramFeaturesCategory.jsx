import React, { useState } from "react";
import {
  getProgramFeatures,
  getProgramFeaturesExtra,
} from "../data/Categories";
import { MdOutlineKeyboardArrowRight as SideArrowIcon } from "react-icons/md";
import { IoIosArrowDown as DownArrowIcon } from "react-icons/io";
import { ProgramFeaturesCategoryDropList } from "./ProgramFeaturesCategoryDropList";

export const ProgramFeaturesCategory = (isOpen = { isOpen }) => {
  const [openDownArrow, setOpenDownArrow] = useState(false);
  const progFeatures = getProgramFeatures();
  const droplist = getProgramFeaturesExtra();

  const handleDownIcon = () => {
    setOpenDownArrow(!openDownArrow);
  };

  return (
    <div className="border-slate-200 border-b-[1px] py-2">
      <li
        key="progFeatures"
        className="pl-9 pr-5 pt-[13px] pb-[19px] text-black"
      >
        Programs & Features
      </li>
      {progFeatures.map((ele, index) => {
        return (
          <li
            key={ele.id}
            className="font-[500] text-sm py-[13px] leading-5 px-9 cursor-pointer group flex justify-between hover:bg-[#eaeded]"
          >
            <a href="">{ele.category}</a>
            {index === 1 && (
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
          <div className="max-h-96 overflow-hidden grid text-sm text-slate-600">
            <ProgramFeaturesCategoryDropList
              droplist={droplist}
              sideArrowShow={false}
            />
          </div>
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
