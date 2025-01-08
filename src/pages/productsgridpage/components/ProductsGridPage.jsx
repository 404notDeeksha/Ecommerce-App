import axios from "axios";
import { useState, useEffect } from "react";
import { Pagination } from "./../../../utils/Pagination";

export const ProductsGridPage = () => {
  const [productCollection, setProductCollection] = useState([]);

  useEffect(() => {
    const fetchProductsGridData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/products`);
        setProductCollection(response.data);
      } catch (error) {
        console.log("Error fetching product", error);
      }
    };
    fetchProductsGridData();
  }, []);

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
