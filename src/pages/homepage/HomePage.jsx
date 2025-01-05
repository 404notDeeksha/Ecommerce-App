import React from "react";
import { layoutData } from "./data/layout";
import { Slider } from "./utils/Slider";
import { ShopItems } from "./components/ShopItems";

const BANNER_TYPE = {
  ROTATING_BANNER_IMAGES: "ROTATING_BANNER_IMAGES",
  GRID_CARD: "GRID_CARD",
  MULTI_IMAGE_CAROUSEL: "MULTI_IMAGE_CAROUSEL",
};

export const HomePage = () => {
  return (
    <div
      id="pageContent"
      role="main"
      className="min-w-[1000px] mx-auto overflow-clip relative z-[2]"
    >
      {layoutData.map((ele) => {
        if (ele.type === BANNER_TYPE.ROTATING_BANNER_IMAGES) {
          return <Slider key={ele.id} imageData={ele.data} />;
        }
      })}
      <ShopItems data={layoutData} />
    </div>
  );
};
