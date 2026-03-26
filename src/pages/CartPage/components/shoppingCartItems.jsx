import { useCallback, useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { getImages, convertNumberInNumerals, getTotalQtyFromCart } from "@utils/commonUtils";
import { ShoppingCartSkeleton } from "./shoppingCartSkeleton";
import { Skeleton } from "@components/feedback/skeleton";
import { Link } from "react-router-dom";
import { EmptyCartPage } from "./emptyCartPage";
import isEmpty from "lodash.isempty";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "@redux/slices/cartSlice";
import { getCart, updateCartQty, deleteCartProduct } from "@api/cart/index.js";
import PropTypes from "prop-types";

export const ShoppingCartItems = () => {
  const [cartDataInternal, setCartDataInternal] = useState({});
  const [loading, setLoading] = useState(true);
  const userId = useSelector((state) => state?.auth?.user?.id);
  const dispatch = useDispatch();

  const setCartData = useCallback((data) => {
    dispatch(setCart(data));
    setCartDataInternal(data);
  }, [dispatch]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const result = await getCart(userId);
        if (result) {
          setLoading(false);
          if (result.success) setCartData(result.data);
        }
      } catch (error) {
        console.error("Error in retrieving data", error);
      }
    };
    fetchCartData();
  }, [userId, setCartData]);

  if (isEmpty(cartDataInternal) || isEmpty(cartDataInternal?.items)) return <EmptyCartPage />;

  return (
    <>
      {loading ? <Skeleton Component={ShoppingCartSkeleton} repeatations={1} /> : (
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-[65%] mr-0 lg:mr-5 mb-4 lg:mb-5 p-4 lg:p-5 bg-white flex-1">
            <div className="text-2xl lg:text-3xl mb-4">Shopping Cart</div>
            <div className="flex lg:hidden flex-row justify-between items-center bg-gray-100 p-3 mb-4 rounded">
              <span className="text-sm">Subtotal ({getTotalQtyFromCart(cartDataInternal.items)} items):</span>
              <span className="font-bold">{convertNumberInNumerals(cartDataInternal?.totalPrice)}</span>
            </div>
            <div className="border-b-2 border-gray-300"></div>
            {cartDataInternal?.items?.map((product, index) => (
              <ProductCard key={index} product={product} index={0} userId={cartDataInternal.userId} productId={product.productId} setCartData={setCartData} />
            ))}
            <div className="hidden lg:flex text-base lg:text-lg text-right mt-4 lg:mt-0 lg:pt-4 lg:border-t-2 lg:border-gray-300">
              Subtotal ({getTotalQtyFromCart(cartDataInternal.items)} items):
              <span className="font-bold ml-2 lg:ml-4">{convertNumberInNumerals(cartDataInternal?.totalPrice)}</span>
            </div>
          </div>
          <div className="hidden lg:block w-full lg:w-[32%] font-bold text-lg mb-4 lg:mb-0">
            <div className="bg-white p-4 pb-6">
              <span>Subtotal ({getTotalQtyFromCart(cartDataInternal.items)} items):</span>
              <span className="ml-4">{convertNumberInNumerals(cartDataInternal?.totalPrice)}</span>
              <div className="text-center mt-2">
                <button className="font-normal text-sm bg-yellow-500 rounded-3xl px-4 py-2 text-center mt-3">Proceed to Buy</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ProductCard = ({ product, index, userId, productId, setCartData }) => {
  const handleDelete = async () => {
    try {
      const result = await deleteCartProduct(userId, productId);
      if (result.success) setCartData(result.data);
    } catch (err) { console.log("Error sending data", err); }
  };

  const productLink = product.productId ? `/products/product/${product.productId}` : `/products/product/${productId}`;

  return (
    <>
      <div className="p-3 flex flex-col sm:flex-row justify-between gap-4">
        <img src={getImages(product.images[index++])} className="w-full sm:w-44 h-44 sm:h-auto object-cover" />
        <div className="text-base sm:text-lg flex-1">
          <Link to={productLink}>
            <div className="font-bold cursor-pointer hover:text-amazon_orange transition-colors">{product.productDescription}</div>
          </Link>
          <div className="text-sm mt-0.5 font-[500]">{product.productName}</div>
          <div className="text-xs mt-2">Gift Options not available</div>
          <div className="flex flex-wrap gap-2 sm:gap-0 text-sm mt-2 sm:items-center">
            <QuantityUpdationButton qty={product.quantity} userId={userId} productId={product.productId || productId} setCartData={setCartData} />
            <span className="hidden sm:inline mx-2">|</span>
            <button className="sm:inline cursor-pointer hover:text-red-500" onClick={handleDelete}>Delete</button>
            <span className="hidden sm:inline mx-2">|</span>
            <span className="hidden sm:inline cursor-pointer">Save for Later</span>
            <span className="hidden sm:inline mx-2">|</span>
            <span className="hidden sm:inline cursor-pointer">See more like this</span>
            <span className="hidden sm:inline mx-2">|</span>
            <span className="hidden sm:inline cursor-pointer">Share</span>
          </div>
          <div className="flex sm:block justify-between items-center mt-2 sm:mt-0">
            <div className="sm:hidden font-bold text-base">{convertNumberInNumerals(product.price)}</div>
          </div>
        </div>
        <div className="hidden sm:block font-bold text-base ml-8">{convertNumberInNumerals(product.price)}</div>
      </div>
      <div className="border-b-2 border-gray-300 my-4"></div>
    </>
  );
};

const QuantityUpdationButton = ({ qty, userId, productId, setCartData }) => {
  const backendData = async (qty) => {
    try {
      const result = await updateCartQty(userId, productId, qty);
      if (result.success) setCartData(result.data);
    } catch (err) { console.log("Error sending data", err); }
  };

  const handleDecrementQuantity = (qty) => { if (qty === 0) return null; backendData(qty); };
  const handleIncrementQuantity = async (qty) => { backendData(qty); };

  return (
    <li className={`border-yellow-500 border-4 rounded-xl flex m-2 px-2 py-0.5 ml-0 items-center`}>
      <div className={`font-bold cursor-pointer ${qty === 1 ? "opacity-25 cursor-not-allowed pointer-events-none" : "none"}`} onClick={() => handleDecrementQuantity(qty - 1)}>
        <FaMinus />
      </div>
      <div className="mx-4 font-bold">{qty}</div>
      <div className="font-bold p-1 cursor-pointer" onClick={() => handleIncrementQuantity(qty + 1)}>
        <FaPlus />
      </div>
    </li>
  );
};
