import React from "react";
import { getDropDownList } from "./../data/DropDownList";

export const DropDownMenu = ({ dropListCategory, className }) => {
  const dropListArray = getDropDownList();

  const handleClick = (value) => {
    const item = dropListArray.find((item) => item.value === value);
    dropListCategory(item.category);
  };

  return (
    <>
      <select
        name="url"
        id="url-dropdown"
        className={className}
        onChange={(e) => handleClick(e.target.value)}
      >
        {dropListArray.map((ele) => {
          return (
            <option
              key={ele.value}
              value={ele.value}
              className="hover:bg-blue-500 hover:text-white mx-1 text-[14px]"
            >
              {ele.category}
            </option>
          );
        })}
      </select>
    </>
  );
};
