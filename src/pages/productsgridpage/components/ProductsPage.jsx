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
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    limit: 20,
    totalPages: 0,
  });

  const [filters, setFilters] = useState({
    category: "",
    subCategory: "",
  });
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);

    setFilters({
      category: query.get("category") || "",
      subCategory: query.get("subCategory") || "",
    });
    setSortBy(query.get("sortBy") || "");
    setSortOrder(query.get("sortOrder") || "");
    setSearch(query.get("search") || "");
  }, [location.search]);

  const debouncedFilters = useDebounce(filters, 500);

  const buildQueryString = useCallback((params) => {
    const urlParams = new URLSearchParams();

    if (params.category) urlParams.set("category", params.category);
    if (params.subCategory) urlParams.set("subCategory", params.subCategory);
    if (params.sortBy) urlParams.set("sortBy", params.sortBy);
    if (params.sortOrder) urlParams.set("sortOrder", params.sortOrder);
    if (params.search) urlParams.set("search", params.search);
    if (params.page) urlParams.set("page", params.page.toString());
    if (params.limit) urlParams.set("limit", params.limit.toString());

    return urlParams.toString();
  }, []);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const queryParams = {
        ...debouncedFilters,
        sortBy,
        sortOrder,
        search,
        page: pagination.page,
        limit: pagination.limit,
      };
      const filterString = buildQueryString(queryParams);
      navigate({ search: filterString }, { replace: true });

      const result = await getFilteredProducts(filterString);
      if (!result.success || !result.data.length) {
        setProductsCollection([]);
        setCategories([]);
        setSubCategories([]);
        setPagination(prev => ({ ...prev, total: 0, totalPages: 0 }));
        if (result.success && result.pagination) {
          setPagination(result.pagination);
        }
        setError("No products found matching the filters.");
        setLoading(false);
        return;
      }

      setProductsCollection(result.data);
      if (result.pagination) {
        setPagination(result.pagination);
      }
      setLoading(false);

      setCategories([...new Set(result.data.map((p) => p.category))]);
      setSubCategories([...new Set(result.data.map((p) => p.subCategory))]);
    } catch (err) {
      setError("Error fetching products");
      setProductsCollection([]);
      setCategories([]);
      setSubCategories([]);
      setPagination(prev => ({ ...prev, total: 0, totalPages: 0 }));
      setLoading(false);
    }
  }, [debouncedFilters, sortBy, sortOrder, search, pagination.page, pagination.limit, buildQueryString, navigate]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (error && !productsCollection.length) {
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
    setPagination(prev => ({ ...prev, page: 1 }));
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setSortBy("");
      setSortOrder("");
    } else {
      const [by, order] = value.split("-");
      setSortBy(by);
      setSortOrder(order);
    }
    setPagination(prev => ({ ...prev, page: 1 }));
  };

  const handlePageChange = (newPage) => {
    setPagination(prev => ({ ...prev, page: newPage }));
  };

  return (
    <div className="bg-white">
      <div className="w-full min-w-[996px] max-w-[1500px] my-0 py-3.5 px-4 bg-white flex pt-5 mx-auto gap-6">
        <div className="min-w-[220px] font-bold text-xl my-5 mb-10 flex flex-col gap-2 border-gray-500 bg-gray-300/80 rounded-xl px-3 py-4 h-fit">
          <h1 className="w-fit">Filters</h1>
          <div className="space-y-5">
            {/* Sort Filter */}
            <div>
              <label className="block text-lg mb-1">Sort By</label>
              <select
                className="w-full py-2 px-2 rounded border bg-gray-50"
                value={sortBy && sortOrder ? `${sortBy}-${sortOrder}` : ""}
                onChange={handleSortChange}
              >
                <option value="">Relevance</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-desc">Rating: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>

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
            Results {pagination.total > 0 && `(${pagination.total} products)`}
          </h1>
          <div className="flex flex-wrap gap-2">
            <Pagination
              itemsPerPage={pagination.limit}
              totalItems={pagination.total}
              currentPage={pagination.page}
              totalPages={pagination.totalPages}
              loading={loading}
              onPageChange={handlePageChange}
              skeleton={
                <Skeleton Component={ProductCardSkeleton} repeatations={10} />
              }
              renderItem={(product, index) => (
                <ProductCard product={product} key={index} />
              )}
              data={productsCollection}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
