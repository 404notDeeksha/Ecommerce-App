import { useState, useEffect } from "react";
import { Pagination } from "./Pagination";
import { useLocation } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { ProductCardSkeleton } from "./ProductCardSkeleton";
import { Skeleton } from "./../../../components/Skeleton";
import { getFilteredProducts } from "../../../api/protectedApi";

export const ProductsPage = () => {
  const [productsCollection, setProductsCollection] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const filter = query.toString();
  const ITEM_PER_PAGE = 50;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await getFilteredProducts(filter);
        if (result && result?.success) {
          setProductsCollection(result.data);
        } else {
          setProductsCollection([]);
          setError(result?.message || "No products found");
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filter]);

  if (error) {
    return (
      <div className="bg-white">
        <div className="w-full min-w-[996px] max-w-[1500px] my-0 py-3.5 flex mx-auto pt-5 ">
          <h2 className="font-bold text-xl my-5">{error}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="w-full min-w-[996px] max-w-[1500px] my-0 py-3.5 bg-white flex pt-5 mx-auto">
        <div className="w-[300px] font-bold text-xl my-5 mb-10">
          <h1>Filters</h1>
          <div className=""></div>
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-xl my-5 mb-10">Results</h1>
          <div className="flex flex-wrap gap-2">
            <Pagination
              itemsPerPage={ITEM_PER_PAGE}
              loading={loading}
              data={productsCollection}
              skeleton={
                <Skeleton Component={ProductCardSkeleton} repeatations={10} />
              }
              renderItem={(product, index) => (
                <ProductCard product={product} key={index} />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
