import { AmazonLogo } from "./amazonLogo";
import { DeliveryLocation } from "./deliveryLocation";
import { SearchBar } from "./searchBar";
import { LanguageSelection } from "./languageSelection";
import { AccountDetails } from "./accountDetails";
import { ReturnOrders } from "./returnOrders";
import { CartLogo } from "./cartLogo";
import { SideBarButton } from "./sideBarButton";
import { Link } from "react-router-dom";
import { routes } from "@config/routes.js";

export const MainHeader = () => {
  return (
    <div className="bg-amazon_blue border-0 p-0 m-0 relative z-[5]">
      <div className="h-[60px] hidden lg:flex items-center justify-between lg:justify-evenly px-2 lg:px-0">
        <Link to={routes.home}>
          <AmazonLogo />
        </Link>
        <DeliveryLocation />
        <SearchBar />
        <div className="flex items-center text-white gap-1 lg:gap-0 lg:ml-3 lg:justify-evenly">
          <LanguageSelection />
          <AccountDetails />
          <ReturnOrders />
          <Link to={routes.cart}>
            <CartLogo />
          </Link>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="h-[50px] flex items-center justify-between px-2">
          <SideBarButton />
          <Link to={routes.home}>
            <AmazonLogo />
          </Link>
          <Link to={routes.cart} className="pr-2">
            <CartLogo />
          </Link>
        </div>

        <div className="px-2 pb-2">
          <SearchBar />
        </div>

        <div className="h-[50px] flex items-center justify-between px-1">
          <DeliveryLocation />
          <div className="flex">
            <AccountDetails />
            <ReturnOrders />
          </div>
        </div>
      </div>
    </div>
  );
};
