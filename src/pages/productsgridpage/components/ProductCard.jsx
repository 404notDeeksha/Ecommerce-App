import { useNavigate } from "react-router-dom";
import { URL } from "../../../constant/url";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { getImages } from "../../../utils/common-utils";
import { convertNumberInNumerals } from "../../product/utils/ConvertNumberInNumerals";
import { setCookieId } from "../../../utils/CookieId";

export const ProductCard = ({ product}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // console.log("Clicking");
    const product_id = product.ProductId;
    navigate(`/products/product/${product_id}`, { state: product });
  };

  const onAddToCart = async () => {
    const userId = "64a57e6e8f1a7d123456789a";
    if (userId) {
      setCookieId(userId);
    } else {
      const uniqueId = uuid();
      setCookieId(uniqueId);
    }
    // console.log("getcookie", getCookieId());
    const bodyCart = {
      userId: userId,
      items: [
        {
          ProductId: product.ProductId,
          ProductName: product.ProductName,
          ProductDescription: product.ProductDescription,
          Price: product.Price,
          Images: product.Images,
          quantity: 1,
        },
      ],
    };
    // console.log(bodyCart);
    // console.log("LOADING", loading);

    try {
      const response = await axios.post(URL.CART_API, bodyCart);
      console.log("Data sent Successfully", response.data);
      navigate("/cart");
    } catch (err) {
      console.log("Error getting data", err);
    }
  };

  return (
    <div className="border-4 border-gray-200 w-[290px]">
      <img src={getImages(product.Images[1])} className="w-full" />
      <div className="p-4">
        <div
          className="font-bold text-xl text-wrap cursor-pointer "
          onClick={handleClick}
        >
          {product.ProductDescription}
        </div>
        <div className="font-bold">{product.ProductName}</div>
        <div className="text-sm">rating</div>
        <div className="font-bold text-3xl mt-5">
          {convertNumberInNumerals(product.Price)}
        </div>
        <div className="text-sm my-2">Free Delivery</div>

        <button
          className="border-yellow-500 rounded-3xl bg-yellow-500 text-black px-3 py-1 mx-auto inline text-sm"
          onClick={onAddToCart}
        >
          AddtoCart
        </button>
      </div>
    </div>
  );
};

