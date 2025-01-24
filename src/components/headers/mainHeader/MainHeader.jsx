import React from "react";
import { Logo } from "../../headers/mainHeader/components/Logo";
import { DeliveryLocation } from "../../headers/mainHeader/components/DeliveryLocation";
import { SearchBar } from "../../headers/mainHeader/components/searchbar/SearchBar";
import { LanguageSelection } from "../../headers/mainHeader/components/language_selection/LanguageSelection";
import { AccountDetails } from "../../headers/mainHeader/components/account_details/AccountDetails";
import { ReturnOrders } from "../../headers/mainHeader/components/ReturnOrders";
import { CartLogo } from "./components/CartLogo";
import { Link } from "react-router-dom";

export const MainHeader = ({ onOpen, onClose, modalVisibilityClassType }) => {
  return (
    <>
      <div className="header-top">
        {/* ------------------------------  MainHeader LEFT -------------------------------------- */}
        <Link to="/home">
          <Logo />
        </Link>
        <DeliveryLocation />
        {/* ----------------------------- MainHeader SEARCH BAR ------------------------------------- */}
        <SearchBar />
        {/*     ---------------------------  MainHeader RIGHT -------------------------------------- */}
        <div className="flex text-white ml-3 justify-evenly">
          <LanguageSelection
            onOpen={onOpen}
            onClose={onClose}
            modalVisibilityClassType={modalVisibilityClassType}
          />
          <AccountDetails
            onOpen={onOpen}
            onClose={onClose}
            modalVisibilityClassType={modalVisibilityClassType}
          />
          <ReturnOrders />
          <Link to="/cart">
            <CartLogo />
          </Link>
        </div>
      </div>
    </>
  );
};
