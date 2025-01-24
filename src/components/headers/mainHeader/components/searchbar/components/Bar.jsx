import React from "react";
import { IoMdSearch as IconSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { activeOverlay } from "../../../../../../redux/slices/overlaySlice";

export const Bar = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(activeOverlay("SEARCHBAR"));
  };

  return (
    <div
      className="
    flex justify-between flex-1 "
    >
      <input
        type="text"
        placeholder="Search Amazon.in"
        className="block w-full placeholder:text-slate-400 text-[15px] font-[600] outline-none p-2  rounded-l"
        onClick={handleClick}
      />
      <div
        className="relative 
       bg-orange-300 border-orange-300 rounded w-12"
      >
        <IconSearch className="block scale-[1.7]  m-3 ml-3.5" />
      </div>
    </div>
  );
};
