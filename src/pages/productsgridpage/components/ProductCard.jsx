import { useNavigate } from "react-router-dom";
import { URL } from "../../../constant/url";
import axios from "axios";
import { v4 as uuid } from "uuid";
import {
  setCookieId,
  getImages,
  convertNumberInNumerals,
  decodeUserId,
  getCookieId,
} from "../../../utils/common-utils";
import StarRatings from "react-star-ratings";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const product_id = product.productId;
    navigate(`/products/product/${product_id}`, { state: product }); // navigating to ProductPage
  };

  const onAddToCart = async () => {
    const token = getCookieId("token");
    const registeredUserId = decodeUserId(token);
    let userId = "";
    if (registeredUserId) {
      userId = registeredUserId;
    } else {
      userId = uuid(); //New user
      setCookieId("uniqueId", userId);
    }

    const bodyCart = {
      userId: userId,
      items: [
        {
          productId: product.productId,
          productName: product.productName,
          productDescription: product.productDescription,
          price: product.price,
          images: product.images,
          quantity: 1,
        },
      ],
    };
    console.log("Adding to cart", userId, typeof registeredUserId, bodyCart);

    try {
      const response = await axios.post(URL.CART_API, bodyCart);
      console.log("Data sent Successfully", response.data);
      navigate("/cart"); // navigating to ShoppingCartItems
    } catch (err) {
      console.log("Error getting data", err);
    }
  };

  return (
    <div className="border-4 border-gray-200 w-[290px]">
      <img src={getImages(product.images[1])} className="w-full" />
      <div className="p-4 flex flex-col gap-2 items-start ">
        <div
          className="font-bold text-xl text-wrap cursor-pointer "
          onClick={handleClick}
        >
          {product.productName}
        </div>
        <div className="text-sm flex flex-row items-center ">
          <div className="pr-2">{product.rating}</div>
          <StarRatings
            rating={product.rating}
            starRatedColor="#de7921"
            starEmptyColor="dark-grey"
            starDimension="18px"
            starSpacing="2px"
            numberOfStars={5}
            name="rating"
          />
        </div>
        <div className="font-bold text-3xl mt-1">
          {convertNumberInNumerals(product.price)}
        </div>
        <div className="text-sm my-2">Free Delivery</div>

        <button
          className="border-yellow-500 rounded-3xl bg-yellow-500 text-black px-3 py-1  inline text-sm"
          onClick={onAddToCart}
        >
          AddtoCart
        </button>
      </div>
    </div>
  );
};
