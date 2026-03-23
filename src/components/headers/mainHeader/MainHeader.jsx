import { AmazonLogo } from "./components/AmazonLogo";
import { DeliveryLocation } from "../../headers/mainHeader/components/DeliveryLocation";
import { SearchBar } from "../../headers/mainHeader/components/searchbar/SearchBar";
import { LanguageSelection } from "../../headers/mainHeader/components/language_selection/LanguageSelection";
import { AccountDetails } from "./components/account_details/AccountDetails";
import { ReturnOrders } from "../../headers/mainHeader/components/ReturnOrders";
import { CartLogo } from "./components/CartLogo";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/routes";

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
