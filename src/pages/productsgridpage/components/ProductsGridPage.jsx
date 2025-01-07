import axios from "axios";
import { useState, useEffect } from "react";
import { ConvertNumberInNumerals } from "../../product/utils/ConvertNumberInNumerals";

export const ProductsGridPage = () => {
  const [productCollection, setProductCollection] = useState([]);

  useEffect(() => {
    const fetchProductsGridData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/products`);
        setProductCollection(response.data);
        // let priceInNumerals = ConvertNumberInNumerals(response.data.Price);
        // setProductDataPrice(priceInNumerals);
        // console.log("Price", priceInNumerals);
        console.log("Data", response.data);
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
          <div className="flex flex-wrap ">
            {productCollection.map((ele) => {
              return <ProductGridCard key={ele.ProductId} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
const ProductGridCard = () => {
  return (
    <>
      <div className="border-4 border-black">
        <img />
        <div className="">description</div>
        <div className="">rating</div>
        <div className="">rating</div>
        <div className="">rating</div>
        <div className="">AddtoCart</div>
      </div>
    </>
  );
};
