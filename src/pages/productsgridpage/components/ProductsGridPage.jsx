import axios from "axios";
import { useState, useEffect } from "react";
import { Pagination } from "./../../../utils/Pagination";
import { useLocation } from "react-router-dom";
import { URL } from "../../../constant/url";

export const ProductsGridPage = () => {
  const [productCollection, setProductCollection] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${URL.PRODUCTS_API}/${location.search}`
        );
        console.log("Data", response.data);
        setProductCollection(response.data);
      } catch (error) {
        console.error("Error fetching products:", { filter, error });
      }
    };

    fetchProducts();
  }, [location.search]);

  return (
    <div className="bg-white">
      <div className="w-full min-w-[996px] max-w-[1800px]  my-0 py-3.5 bg-[#fff]  flex pt-5 mx-auto">
        <div className="w-[300px] px-2">Filters</div>
        <div className="flex-1">
          <h2 className="font-bold text-xl my-5 mb-10">Results</h2>
          <div className="flex flex-wrap gap-2">
            <Pagination products={productCollection} itemsPerPage={50} />
          </div>
        </div>
      </div>
    </div>
  );
};
