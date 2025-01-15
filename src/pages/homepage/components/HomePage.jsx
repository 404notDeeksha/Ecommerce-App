import React, { useState, useEffect } from "react";
import { layoutData } from "../data/layout";
import { Slider } from "./Slider";
import { ShopItems } from "./ShopItems";
import axios from "axios";
import { URL } from "../../../constant/url";

// const BANNER_TYPE = {
//   AUTOMATIC_RUNNING_CAROUSEL: "AUTOMATIC_RUNNING_CAROUSEL",
//   GRID_CARD: "GRID_CARD",
//   MULTI_IMAGE_CAROUSEL: "MULTI_IMAGE_CAROUSEL",
// };

export const HomePage = () => {
  const [automaticRotatingCarousel, setAutomaticRotatingCarousel] = useState(
    []
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL.CATEGORY_API);
        console.log("Categories:", response.data);
        if (response) {
          setLoading(false);
          if (response.data.success) {
            setAutomaticRotatingCarousel(response.data.data);
          }
        }
      } catch (err) {
        console.error("Error:", err);
      }
    };
    fetchData();
  }, []);

  // console.log("ROTATING CAROUISEL", automaticRotatingCarousel);
  return (
    <div
      id="pageContent"
      role="main"
      className="min-w-[1000px] mx-auto overflow-clip relative z-[2]"
    >
      <Slider imageData={automaticRotatingCarousel} loading={loading} />
      <ShopItems data={layoutData} loading={loading} />
    </div>
  );
};
