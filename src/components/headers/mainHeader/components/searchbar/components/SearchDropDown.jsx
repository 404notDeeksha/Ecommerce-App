import  { useState } from "react";
import { RiArrowDropDownFill as DropDownIcon } from "react-icons/ri";
import { SearchList } from "./SearchList";

export const SearchDropDown = () => {
  const [display, setDisplay] = useState("All");

  const handleCategoryDisplay = (category) => {
    setDisplay(category);
  };

  return (
    <div
      className="mobile:hidden cursor-pointer
          bg-[#e6e6e6] hover:bg-slate-300
           max-w-[30%] w-fit 
          flex rounded-l
         text-[#555] hover:text-black
         relative"
    >
      <div
        className="text-ellipsis overflow-hidden 
             py-2.5 px-3 
             text-nowrap
            text-[12px]"
      >
        {display}
      </div>
      <DropDownIcon className="scale-[1.3] mx-2 mt-3 min-w-4 min-h-4" />
      <SearchList dropListCategory={handleCategoryDisplay} />
    </div>
  );
};
