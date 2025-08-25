import { useState, useEffect, useCallback } from "react";
import { Pagination } from "./Pagination";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { ProductCardSkeleton } from "./ProductCardSkeleton";
import { Skeleton } from "../../../components/Skeleton";
import { getFilteredProducts } from "../../../api/protectedApi";

function useDebounce(value, delay) {
  const [debouncedVal, setDebouncedVal] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedVal(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedVal;
}

export const ProductsPage = () => {
  const [productsCollection, setProductsCollection] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    category: "",
    subCategory: "",
  });
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const ITEM_PER_PAGE = 20;

  useEffect(() => {
    const query = new URLSearchParams(location.search);

    setFilters({
      category: query.get("category") || "",
      subCategory: query.get("subCategory") || "",
    });
  }, [location.search]);

  const debouncedFilters = useDebounce(filters, 500);

  const buildQueryString = useCallback((filtersObj) => {
    const params = new URLSearchParams();

    if (filtersObj.category) params.set("category", filtersObj.category);
    if (filtersObj.subCategory)
      params.set("subCategory", filtersObj.subCategory);
    return params.toString();
  }, []);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const filterString = buildQueryString(debouncedFilters);
      navigate({ search: filterString }, { replace: true });

      const result = await getFilteredProducts(filterString);
      if (!result.success || !result.data.length) {
        setProductsCollection([]);
        setCategories([]);
        setSubCategories([]);
        setError("No products found matching the filters.");
        setLoading(false);
        return;
      }

      setProductsCollection(result.data);
      setLoading(false);

      setCategories([...new Set(result.data.map((p) => p.category))]);
      setSubCategories([...new Set(result.data.map((p) => p.subCategory))]);
    } catch (err) {
      setError("Error fetching products");
      setProductsCollection([]);
      setCategories([]);
      setSubCategories([]);
      setLoading(false);
    }
  }, [debouncedFilters, buildQueryString, navigate]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (error) {
    return (
      <div className="bg-white">
        <div className="w-full min-w-[996px] max-w-[1500px] my-0 py-3.5 flex mx-auto pt-5 ">
          <h2 className="font-bold text-xl my-5">{error}</h2>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white">
      <div className="w-full min-w-[996px] max-w-[1500px] my-0 py-3.5 px-4 bg-white flex pt-5 mx-auto gap-6">
        <div className="min-w-[220px] font-bold text-xl my-5 mb-10 flex flex-col gap-2 border-gray-500 bg-gray-300/80 rounded-xl px-3 py-4 h-fit">
          <h1 className="w-fit">Filters</h1>
          <div className="space-y-5">
            {/* Category Filter */}
            <div>
              <label className="block text-lg mb-1">Category</label>
              <select
                name="category"
                className="w-full py-2 px-2 rounded border bg-gray-50"
                value={filters.category}
                onChange={handleChange}
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option value={cat} key={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Subcategory Filter */}
            <div>
              <label className="block text-lg mb-1">Subcategory</label>
              <select
                name="subCategory"
                className="w-full py-2 px-2 rounded border bg-gray-50"
                value={filters.subCategory}
                onChange={handleChange}
              >
                <option value="">All Subcategories</option>
                {subCategories.map((sub) => (
                  <option value={sub} key={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h1 className="font-bold text-xl my-5 mb-10 border-gray-500 bg-gray-300 rounded-xl w-fit px-3 py-2">
            Results
          </h1>
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
