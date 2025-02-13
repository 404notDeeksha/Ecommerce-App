import React from "react";
import { GrLocation as LocationIcon } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { activeOverlay } from "../../../../redux/slices/overlaySlice";
import isEmpty from "lodash.isempty";

export const DeliveryLocation = () => {
  const dispatch = useDispatch();
  const pincode = useSelector((state) => state.deliveryLocation.data);
  const handleClick = () => {
    dispatch(activeOverlay("POPOVER"));
  };

  return (
    <div
      className=" hover-header ml-[4px] cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex text-white my-[15px] mr-[2px] px-[9px] box-border leading-3 float-none gap-2 items-center">
        <LocationIcon className="w-[15px] h-[18px] scale-x-[1.2] scale-y-[1.1]" />

        <span className="flex flex-col gap-1 ">
          {!isEmpty(pincode) ? (
            <>
              <div className="  text-[12px] font-normal text-lightText leading-[14px] text-nowrap box-border  clear-both">
                Deliver to
              </div>
              <div className="text-[14px] font-bold pb-[1px] text-nowrap box-border clear-both">
                {pincode}
              </div>
            </>
          ) : (
            <div className="  text-[12px] font-normal text-lightText text-nowrap box-border  clear-both">
              Enter Pincode
            </div>
          )}
        </span>
      </div>
    </div>
  );
};
