import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";

export const CartLogo = () => {
  const cartItems = useSelector((state) => state.cart.totalQuantity);

  return (
    <div 
      className="flex items-center gap-1 text-[#fff] hover-header cursor-pointer px-2 lg:px-4 py-1"
      role="button"
      aria-label={`Shopping cart with ${cartItems} items`}
      tabIndex={0}
    >
      <div className="relative inline-block">
        <FiShoppingCart className="w-6 h-6 lg:w-7 lg:h-7" aria-hidden="true" />
        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] lg:text-xs font-bold rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center leading-none">
          {cartItems > 99 ? "99+" : cartItems}
        </span>
      </div>
      <span className="text-[12px] lg:text-[14px] font-bold sm:hidden">Cart</span>
    </div>
  );
};
