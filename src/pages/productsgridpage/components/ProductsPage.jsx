import axios from "axios";
import { useState, useEffect } from "react";
import { Pagination } from "../../../utils/Pagination";
import { useLocation } from "react-router-dom";
import { URL } from "../../../constant/url";
import { ProductCard } from "./ProductCard";
import { ProductCardSkeleton } from "./ProductCardSkeleton";

export const ProductsPage = () => {
  const [productsCollection, setProductsCollection] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const filter = location.search;
  const ITEM_PER_PAGE = 50;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${URL.PRODUCTS_API}/${filter}`);
        console.log("Data", response.data);
        if (response) {
          setLoading(false);
          if (response.data.success) {
            setProductsCollection(response.data.data);
          }
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [filter]);
  console.log(loading);
  // console.log("PRODUCTS-GRID", productsCollection, filter, loading);
  return (
    <div className="bg-white">
      <div className="w-full min-w-[996px] max-w-[1800px]  my-0 py-3.5 bg-[#fff]  flex pt-5 mx-auto">
        <div className="w-[300px] px-2">Filters</div>
        <div className="flex-1">
          <h2 className="font-bold text-xl my-5 mb-10">Results</h2>
          <div className="flex flex-wrap gap-2">
            <Pagination itemsPerPage={10} loading={loading}>
              {loading ? (
                <ProductCardSkeleton />
              ) : (
                productsCollection.map((product, index) => {
                  return <ProductCard product={product} key={index} />;
                })
              )}
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};
