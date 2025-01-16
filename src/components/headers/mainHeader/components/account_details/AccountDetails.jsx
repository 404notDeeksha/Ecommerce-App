import React from "react";
import { RiArrowDropDownFill as DropDownIcon } from "react-icons/ri";
import { SignInDropMenu } from "./components/SignInDropMenu";
import { getFromLocalStorage } from "../../../../../utils/common-utils";

export const AccountDetails = ({
  onOpen,
  onClose,
  modalVisibilityClassType,
}) => {
  const user = getFromLocalStorage("user-info");
  if (user) {
    console.log("user", user);
  }
  const handleMouseOver = () => {
    onOpen();
    modalVisibilityClassType("modal-zindex-navbarTop");
  };
  return (
    <>
      <div
        className="pb-2.5 pt-2.5 pr-5 pl-2 relative group hover-header"
        onMouseOver={handleMouseOver}
        onMouseOut={onClose}
      >
        <div className="text-[12px]">
          Hello,
          {user ? <span className="ml-2">{user.name}</span> : "sign in"}
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
