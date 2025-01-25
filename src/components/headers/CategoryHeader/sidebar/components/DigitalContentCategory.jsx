import React from "react";
import { getDigitalContent } from "../data/Categories";
import { MdOutlineKeyboardArrowRight as SideArrowIcon } from "react-icons/md";

export const DigitalContentCategory = ({ isOpen }) => {
  const digitalContent = getDigitalContent();
  return (
    <div className="border-slate-200 border-b-[1px] py-2">
      <li key="digital" className="pl-9 pr-5 pt-[11px] pb-[13px] text-black">
        Digital Content and Devices
      </li>
      {digitalContent?.map((ele, index) => {
        return (
          <li
            key={ele.id}
            className="font-[500] text-sm py-[13px] leading-4 px-9 cursor-pointer flex justify-between
                  hover:bg-[#eaeded] group"
          >
            <a href="">{ele.category}</a>
            {index !== 0 && (
              <SideArrowIcon
                className={`group-hover:text-black 
                    ${isOpen ? "scale-[2]" : "scale-0"}`}
              />
            )}
          </li>
        );
      })}
    </div>
  );
};
