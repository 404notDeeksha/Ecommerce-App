import axios from "axios";
import { useState, useEffect } from "react";
import { ConvertNumberInNumerals } from "../../product/utils/ConvertNumberInNumerals";

export const ProductsGridPage = () => {
  const [productCollection, setProductCollection] = useState([]);
  // const [productPrice, setProductPrice] = useState([]);

  useEffect(() => {
    const fetchProductsGridData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/products`);
        setProductCollection(response.data);
        // let priceInNumerals = ConvertNumberInNumerals(response.data[0].Price);
        // setProductPrice(priceInNumerals);
        // console.log("Price", response.data[0].Price);
        console.log("Data", response.data[0].Price);
      } catch (error) {
        console.log("Error fetching product", error);
      }
    };
    fetchProductsGridData();
  }, []);

  return (
    <>
      <div className="w-full min-w-[996px] max-w-[1800px] bg-[#fff] my-0 py-3.5  mx-auto flex pt-5">
        <div className="w-[300px] px-2">Filters</div>
        <div className="flex-1">
          <h2 className="font-bold text-xl my-5 mb-10">Results</h2>
          <div className="flex flex-wrap gap-4">
            {productCollection.map((ele) => {
              return (
                <ProductGridCard
                  key={ele.ProductId}
                  ele={ele}
                  // price={ele.Price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
const ProductGridCard = ({ ele }) => {
  const price = ConvertNumberInNumerals(ele.Price);
  console.log("Price", price);
  return (
    <>
      <div className="border-4 border-yellow-500 w-[290px] h-[680px]  p-2">
        <img src={ele.Images[1]} className="w-52 h-52 p-1" />
        <div className="font-bold text-lg text-wrap">
          {ele.ProductDescription}
        </div>
        <div className="font-bold">{ele.ProductName}</div>
        <div className="text-sm">rating</div>
        <div className="font-bold text-3xl my-5">{price}</div>
        <div className="border-yellow-500 rounded-3xl bg-yellow-500 text-black px-3 py-1 my-10 mx-auto inline text-sm">
          AddtoCart
        </div>
      </div>
    </>
  );
};
