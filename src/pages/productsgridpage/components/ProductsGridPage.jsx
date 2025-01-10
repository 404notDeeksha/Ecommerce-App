import axios from "axios";
import { useState, useEffect } from "react";
import { Pagination } from "./../../../utils/Pagination";
import { useLocation, useParams } from "react-router-dom";

export const ProductsGridPage = () => {
  const [productCollection, setProductCollection] = useState([]);
  const { filter } = useParams();
  console.log("FILTER", filter);
  const location = useLocation();
  const { category_id } = location.state || {};
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const endpoint = filter
          ? `http://localhost:8000/api/products/${filter}` // Fetch filtered products
          : `http://localhost:8000/api/products`; // Fetch all products
        const response = await axios.get(endpoint);
        setProductCollection(response.data.data);
        console.log("Fetched Products:", response.data.data);
      } catch (error) {
        console.error("Error fetching products:", { filter, error });
      }
    };

    fetchProducts();
  }, [filter]);

  // const ProductsPage = () => {
  //   const [productCollection, setProductCollection] = useState([]);
  //   const { filter } = useParams(); // Route param (e.g., /products/:filter)
  // const location = useLocation(); // Query params (e.g., ?brand=Cetaphil&color=blue)

  // useEffect(() => {
  //   const fetchFilteredProducts = async () => {
  //     try {
  //       // Extract query parameters from the URL
  //       const queryParams = new URLSearchParams(location.search); // Get ?brand=Cetaphil&color=blue
  //       const filters = Object.fromEntries(queryParams.entries()); // Convert to object

  //       // Add route filter (if available) to query filters
  //       if (filter) filters.category = filter;

  //       // Build query string from filters
  //       const params = new URLSearchParams(filters).toString();

  //       // Fetch products from API with filters
  //       const response = await axios.get(
  //         `http://localhost:8000/api/products?${params}`
  //       );
  //       setProductCollection(response.data); // Update state with fetched products
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };

  //   fetchFilteredProducts(); // Call the function
  // }, [filter, location.search]); // Re-run when route param or query params change

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
