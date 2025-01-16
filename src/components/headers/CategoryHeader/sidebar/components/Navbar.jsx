import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { getFromLocalStorage } from "../../../../../utils/common-utils";

export const Navbar = () => {
  const user = getFromLocalStorage("user-info");
  return (
    <nav className="h-[50px] bg-amazon_light flex pl-9 pt-3 text-white">
      <AccountCircleIcon className="scale-110" />
      <div className="font-bold text-[19px] leading-6 pl-2">
        Hello, <span className="pl-2">{user ? user.name : "signin"}</span>
      </div>
    </nav>
  );
};
