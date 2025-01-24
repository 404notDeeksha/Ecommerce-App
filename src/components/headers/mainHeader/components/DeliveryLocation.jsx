import React from "react";
import { GrLocation as LocationIcon } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { activeOverlay } from "../../../../redux/slices/overlaySlice";

export const DeliveryLocation = () => {
  const city = "Hyderabad";
  const pincode = "500084";
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(activeOverlay("POPOVER"));
  };
  
  return (
    <>
      <div
        className=" hover-header ml-[4px] cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex text-white my-[15px] mr-[2px] px-[9px] box-border leading-3 float-none">
          <LocationIcon className="w-[15px] h-[18px] mt-[8px] scale-x-[1.2] scale-y-[1.1]" />
          <span className="ml-[3px]">
            <div className="  text-[12px] font-normal text-lightText leading-[14px] text-nowrap box-border  clear-both">
              Deliver to
            </div>
            <div className="text-[14px] font-bold pb-[1px] text-nowrap box-border clear-both">
              {city} {pincode}
            </div>
          </span>
        </div>
      </div>
    </>
  );
};
