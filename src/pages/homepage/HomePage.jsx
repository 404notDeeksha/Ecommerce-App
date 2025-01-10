import React, { useState, useEffect } from "react";
import { layoutData } from "./data/layout";
import { Slider } from "./utils/Slider";
import { ShopItems } from "./components/ShopItems";
import axios from "axios";

const BANNER_TYPE = {
  AUTOMATIC_RUNNING_CAROUSEL: "AUTOMATIC_RUNNING_CAROUSEL",
  GRID_CARD: "GRID_CARD",
  MULTI_IMAGE_CAROUSEL: "MULTI_IMAGE_CAROUSEL",
};

export const HomePage = () => {
  const [automaticRotatingCarousel, setAutomaticRotatingCarousel] = useState(
    []
  );

  const api_url = import.meta.env.VITE_API_BASE_URL + "category";
  // console.log("api_url", api_url);

  useEffect(() => {
    axios
      .get(api_url)
      .then((response) => {
        console.log("Categories:", response.data);
        setAutomaticRotatingCarousel(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  console.log("List", automaticRotatingCarousel);
  return (
    <div
      id="pageContent"
      role="main"
      className="min-w-[1000px] mx-auto overflow-clip relative z-[2]"
    >
      <Slider imageData={automaticRotatingCarousel} />

      {/* {automaticRotatingCarousel.map((ele) => {
        if (ele.display_type === BANNER_TYPE.AUTOMATIC_RUNNING_CAROUSEL) {
          return (
            <Slider
              key={ele.category_id}
              imageData={ele.category_image_address}
            />
          );
        }
      })} */}
      <ShopItems data={layoutData} />
    </div>
  );
};
