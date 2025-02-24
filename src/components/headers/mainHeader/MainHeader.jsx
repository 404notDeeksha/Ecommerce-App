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
    <div className="h-[60px] bg-amazon_blue border-0 p-0 m-0 flex justify-evenly relative z-[5]">
      <Link to={routes.home}>
        <AmazonLogo />
      </Link>
      <DeliveryLocation />
      <SearchBar />
      <div className="flex text-white ml-3 justify-evenly">
        <LanguageSelection />
        <AccountDetails />
        <ReturnOrders />
        <Link to={routes.cart}>
          <CartLogo />
        </Link>
      </div>
    </div>
  );
};
