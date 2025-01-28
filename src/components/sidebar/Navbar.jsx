import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { getDataFromLocalStorage } from "../../utils/common-utils";

export const Navbar = () => {
  const userData = getDataFromLocalStorage("userInfo");
  return (
    <nav className="h-[50px] bg-amazon_light flex pl-9 pt-3 text-white">
      <AccountCircleIcon className="scale-110" />
      <div className="font-bold text-[19px] leading-6 pl-2">
        Hello,{" "}
        <span className="pl-1">{userData ? userData.name : "signin"}</span>
      </div>
    </nav>
  );
};
