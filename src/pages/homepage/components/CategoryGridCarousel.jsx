import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

export const CategoryGridCarousel = ({
  data1,
  data2,
  data3,
  data4,
  label1,
  label2,
  label3,
  label4,
}) => {
  return (
    <div className="card-grids relative">
      <Grid data={data1} label={label1} />
      <Grid data={data2} label={label2} />
      <Grid data={data3} label={label3} />
      <Grid data={data4} label={label4} />
    </div>
  );
};

const Grid = ({ data, label }) => {
  return (
    <>
      <div className="card-grid pb-10">
        <h2 className="text-xl font-bold pb-2.5">{label}</h2>
        <div className="card-grid-data ">
          {data.map((ele) => {
            return (
              <GridCardImage
                key={uuid()}
                caption={ele.caption}
                image={ele.image}
                category={ele.category}
                brand={ele.brand}
                subCategory={ele.subCategory}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

const GridCardImage = ({ caption, image, category, brand, subCategory }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    let filterName, filter;
    if (category) {
      filter = category;
      filterName = "category";
    } else if (brand) {
      filter = brand;
      filterName = "brand";
    } else {
      filter = subCategory;
      filterName = "subCategory";
    }
    navigate(`/products?${filterName}=${filter}`);  // navigating to ProductsPage
  };

  return (
    <div className="justify-between cursor-pointer" onClick={handleClick}>
      <img
        src={image}
        className=" object-fill aspect-auto w-[150px] h-[92px]"
      />
      <div className="text-[12px] overflow-ellipsis leading-5">{caption}</div>
    </div>
  );
};
