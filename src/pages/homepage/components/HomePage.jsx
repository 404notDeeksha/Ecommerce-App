import React, { useState, useEffect } from "react";
import { Slider } from "./Slider";
import axios from "axios";
import { URL } from "../../../constant/url";
import { CategoryGridCarousel } from "./CategoryGridCarousel";
import {
  appliances,
  headphones,
  homeDecor,
  beauty,
} from "./../data/CategoryGridCarousel";
import { MultiCardCarousel } from "./CardCarousel";
import { getCarousel } from "../../../api/protectedApi";

export const HomePage = () => {
  const [automaticRotatingCarousel, setAutomaticRotatingCarousel] = useState(
    []
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCarousel();
        if (response) {
          setLoading(false);
          if (response.success) {
            setAutomaticRotatingCarousel(response.data);
          }
        }
      } catch (err) {
        console.error("Error:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-w-[1000px] mx-auto overflow-clip relative z-[2]">
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
      <MultiCardCarousel
        title="Bestsellers from Beauty"
        category="beautyAndMakeup"
        query="bestsellers=true"
      />
      <MultiCardCarousel
        title="Headphones at 40% off"
        category="headphones"
        query="discount=40"
      />
    </div>
  );
};
