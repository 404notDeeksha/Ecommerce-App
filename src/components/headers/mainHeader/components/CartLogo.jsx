import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";

export const CartLogo = () => {
  const cartItems = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className=" flex-col relative text-[#fff] hover-header cursor-pointer gap-3 px-5 py-0.5  border  ">
      <div className="text-orange-500 inline ml-1.5 text-sm font-[500] ">
        {cartItems}
      </div>

      <div className="flex gap-3 mb-2">
        <FiShoppingCart className=" scale-[1.5]" />
        <div className="text-[14px] font-bold mobile:hidden">Cart</div>
      </div>
    </div>
  );
};
