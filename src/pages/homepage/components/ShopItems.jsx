import React from "react";
import { ShopGrid } from "../../homepage/utils/ShopGrid";
import { ShopCarousel } from "../../homepage/utils/ShopCarousel";

export const ShopItems = ({ TYPE, data }) => {
  return (
    <div className="shopContent">
      <ShopGrid data={data} structure="GRID_TYPE" unit="home_decor_grid" />

      {/* <ShopCarousel
        data={data}
        structure="CAROUSEL_TYPE"
        unit="beauty_carousel"
      />
      <ShopCarousel
        data={data}
        structure="CAROUSEL_TYPE"
        unit="trendy_home_decor_carousel"
      />
      <ShopGrid
        data={data}
        structure="GRID_TYPE"
        unit="fashion_essentials_grid"
      />
      <ShopCarousel
        data={data}
        structure="CAROUSEL_TYPE"
        unit="car_accessories_carousel"
      />
      <ShopCarousel
        data={data}
        structure="CAROUSEL_TYPE"
        unit="furniture_carousel"
      />
      <ShopGrid
        data={data}
        structure="GRID_TYPE"
        unit="international_brands_grid"
      />
      <ShopCarousel
        data={data}
        structure="CAROUSEL_TYPE"
        unit="home-kitchen-carousel"
      />
      <ShopCarousel data={data} structure="CAROUSEL_TYPE" unit="car-carousel" /> */}
    </div>
  );
};
