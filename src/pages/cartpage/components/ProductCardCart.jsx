import axios from "axios";
import React, { useEffect, useState } from "react";

export const ProductCardCart = () => {
  const [productData, setProductData] = useState([]);
  const [totalQty, setTotalQty] = useState(0);
  const backend_url = "http://localhost:8000/api/cart";
  const user_id = "64a57e6e8f1a7d123456789a";

  useEffect(() => {
    axios
      .get(`${backend_url}/${user_id}`)
      .then((response) => {
        console.log("Product core data", response.data);
        setProductData(response.data.items || []);
        const qty = CalculateTotalQty(response.data.items);
        setTotalQty(qty);
      })
      .catch((error) => {
        console.error("Error in retrieving data ", error);
      });
  }, []);

  // const TotalQty=(productData)=>{
  //   productData.items.map(ele=>{})
  //   return
  // }

  console.log("Products", productData);

  return (
    <div className="mr-5 mb-5 p-5 bg-white">
      <div className="text-3xl mb-4">Shopping Cart</div>
      <div className="border-b-2 border-gray-300"></div>
      {productData.map((ele) => {
        return <ProductCard key={ele.ProductId} productData={ele} index={0} />;
      })}
      <div className="text-lg text-right">
        <div className="">
          Subtotal ({totalQty} items):
          {/* <span className="font-bold ml-4 ">{productData.totalPrice}</span> */}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ productData, index }) => {
  return (
    <>
      <div className="p-3 flex justify-between">
        <img src={productData.Images[index++]} className="w-44 h-44" />
        <div className="text-lg flex-1">{productData.ProductDescription}</div>
        <div className="font-bold text-base ">{productData.Price}</div>
      </div>
      <div className="border-b-2 border-gray-300 my-4"></div>
    </>
  );
};

const CalculateTotalQty = (data) => {
  let total = 0;
  data.forEach((ele) => {
    total += ele.quantity;
  });
  return total;
};
