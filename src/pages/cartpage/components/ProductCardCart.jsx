import axios from "axios";
import React, { useEffect, useState } from "react";

export const ProductCardCart = () => {
  const [productData, setProductData] = useState([]);
  const backend_url = "http://localhost:8000/api/cart";
  const user_id = "64a57e6e8f1a7d123456789a";

  useEffect(() => {
    axios
      .get(`${backend_url}/${user_id}`)
      .then((response) => {
        console.log(response.data);
        setProductData(response.data.items);
      })
      .catch((error) => {
        console.error("Error in retrieving data ", error);
      });
  }, []);

  console.log("Products", productData);

  return (
    <div className="mr-5 mb-5 p-5 bg-white">
      <div className="text-3xl mb-4">Shopping Cart</div>
      <div className="border-b-2 border-gray-300"></div>
      {productData.map((item) => {
        return <ProductCard productData={item} />;
      })}
      <div className="border-b-2 border-gray-300 my-4"></div>
    </div>
  );
};

const ProductCard = ({ productData }) => {
  return (
    <>
      <div className="p-3 flex justify-between">
        <img src={productData.Images[0]} className="w-44 h-44" />
        <div className="text-lg flex-1">{productData.ProductDescription}</div>
        <div className="font-bold text-base ">{productData.Price}</div>
      </div>
    </>
  );
};
