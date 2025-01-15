import React, { useState, useEffect } from "react";
import { layoutData } from "../data/layout";
import { Slider } from "./Slider";
import { ShopItems } from "./ShopItems";
import axios from "axios";
import { URL } from "../../../constant/url";
import { CategoryGridCarousel } from "./CategoryGridCarousel";
import {
  appliances,
  headphones,
  homeDecor,
  beauty,
} from "./../data/CategoryGridCarousel";

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

  return (
    <div
      id="pageContent"
      role="main"
      className="min-w-[1000px] mx-auto overflow-clip relative z-[2]"
    >
      <Slider imageData={automaticRotatingCarousel} loading={loading} />
      <CategoryGridCarousel
        data1={homeDecor}
        data2={appliances}
        data3={headphones}
        data4={beauty}
        label1="Revamp your home in style"
        label2="Appliances for your home"
        label3="Starting 149 |  HeadPhones"
        label4="Beauty & Makeup"
      />

      {/* <ShopItems data={layoutData} loading={loading} /> */}
    </div>
  );
};
