import React from "react";
import { RiArrowDropDownFill as DropDownIcon } from "react-icons/ri";
import { SignInDropMenu } from "./components/SignInDropMenu";
import { getDataFromLocalStorage } from "../../../../../utils/common-utils";
import { useDispatch } from "react-redux";
import {
  activeOverlay,
  inactiveOverlay,
} from "../../../../../redux/slices/overlaySlice";

export const AccountDetails = () => {
  const userData = getDataFromLocalStorage("userInfo");

  const dispatch = useDispatch();

  const handleMouseOver = () => {
    dispatch(activeOverlay("TOOLTIP"));
  };
  
  return (
    <>
      <div
        className="pb-2.5 pt-2.5 pr-5 pl-2 relative group hover-header"
        onMouseOver={handleMouseOver}
        onMouseOut={() => dispatch(inactiveOverlay())}
      >
        <div className="text-[12px]">
          Hello,
          {userData ? <span className="ml-2">{userData.name}</span> : "sign in"}
        </div>
        <div className="text-[14px] text-nowrap font-bold -mt-1">
          Account & Lists
        </div>

        <DropDownIcon
          className="scale-[1.3] min-w-4 min-h-4 absolute right-1 bottom-[13px] 
        text-[#e6e6e6]"
        />
        <SignInDropMenu />
      </div>
    </>
  );
};
