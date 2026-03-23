import { AmazonLogo } from "./amazonLogo";
import { DeliveryLocation } from "./deliveryLocation";
import { SearchBar } from "./searchBar";
import { LanguageSelection } from "./languageSelection";
import { AccountDetails } from "./accountDetails";
import { ReturnOrders } from "./returnOrders";
import { CartLogo } from "./cartLogo";
import { Link } from "react-router-dom";
import { routes } from "@config/routes.js";

export const MainHeader = () => {
  return (
    <div className="h-[60px] bg-amazon_blue border-0 p-0 m-0 flex items-center justify-between md:justify-evenly relative z-[5] px-2 md:px-0">
      <Link to={routes.home}>
        <AmazonLogo />
      </Link>
      <div className="hidden md:block">
        <DeliveryLocation />
      </div>
      <SearchBar />
      <div className="flex items-center text-white gap-1 md:gap-0 md:ml-3 md:justify-evenly">
        <div className="hidden lg:block">
          <LanguageSelection />
        </div>
        <div className="hidden md:block">
          <AccountDetails />
        </div>
        <div className="hidden sm:block">
          <ReturnOrders />
        </div>
        <Link to={routes.cart}>
          <CartLogo />
        </Link>
      </div>
    </div>
  );
};
