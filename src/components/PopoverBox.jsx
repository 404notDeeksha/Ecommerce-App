import React from "react";
import { IoIosClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { inactiveOverlay } from "../redux/slices/overlaySlice";

export const PopoverBox = () => {
  // console.log("Modal On");
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(inactiveOverlay());
  };

  return (
    <div className=" bg-white p-1 rounded-lg  max-w-[500px] w-full">
      <header className="border-b-[1px] border-[#d5d9d9] text-left    bg-[#f0f2f2] relative    rounded-t-lg  py-0 px-6 flex justify-between font-bold">
        <h4 className="py-4 min-h-14  text-base">Choose your location</h4>
        <IoIosClose className=" scale-[2.5] mt-5" onClick={handleClose} />
      </header>
      <div className="py-4 px-6 ">
        <div className="text-[#565959] text-xs ">
          Select a delivery location to see product availability and delivery
          options
        </div>
        <button className="bg-[#ffd814] my-2 shadow-[0_2px_5px_0_rgba(213,217,217,.5)] rounded-lg  text-black w-full align-middle text-center text-[13px] leading-7">
          Sign in to see your addresses
        </button>
        <h5 className="text-[#565959] text-center text-xs mb-3.5">
          or enter an Indian pincode
        </h5>
        <div className="flex h-[29px]">
          <input className="w-[66%] mr-[2%] overflow-visible border-[1px] rounded border-[#888c8c]"></input>
          <button className="w-[32%] border-[1px] leading-5 border-[#888c8c] rounded-lg text-sm">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
