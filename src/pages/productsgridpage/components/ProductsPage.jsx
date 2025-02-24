import axios from "axios";
import { useState, useEffect } from "react";
import { Pagination } from "./Pagination";
import { useLocation } from "react-router-dom";
import { URL } from "../../../constant/url";
import { ProductCard } from "./ProductCard";
import { ProductCardSkeleton } from "./ProductCardSkeleton";
import { Skeleton } from "./../../../components/Skeleton";
import { getFilteredProducts } from "../../../api/protectedApi";

export const ProductsPage = () => {
  const [productsCollection, setProductsCollection] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const filter = query.toString();

  const ITEM_PER_PAGE = 50;
  console.log("Filter", filter);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getFilteredProducts(filter);
        if (result) {
          console.log("result-products", result);
          setLoading(false);
          if (result.success) {
            setProductsCollection(result.data);
          } else {
            setProductsCollection([]);
            console.log(result.message);
          }
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [filter]);

  return (
    <div className="bg-white">
      <div className="w-full min-w-[996px] max-w-[1500px]  my-0 py-3.5 bg-[#fff]  flex pt-5 mx-auto">
        {/* <div className="w-[300px] px-2">Filters</div> */}
        <div className="flex-1">
          <h2 className="font-bold text-xl my-5 mb-10">Results</h2>
          <div className="flex flex-wrap gap-2">
            <Pagination itemsPerPage={ITEM_PER_PAGE} loading={loading}>
              {loading ? (
                <Skeleton Component={ProductCardSkeleton} repeatations={10} />
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
