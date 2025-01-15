import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

export const GridCardCarousel = ({ data }) => {
  return (
    <div className="card-grids relative">
      {data.map((ele) => {
        return (
          <GridCard
            key={ele.id}
            label={ele.label}
            footerNote={ele.footerNote}
            data={ele.data}
          />
        );
      })}
    </div>
  );
};

const GridCard = ({ label, footerNote, data }) => {
  console.log("Data", data);
  return (
    <div className="card-grid">
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
            />
          );
        })}
      </div>
      <div className="relative text-blue-500  leading-7 text-[12px]">
        <a>{footerNote}</a>
      </div>
    </div>
  );
};

export const GridCardImage = ({ caption, image, category, brand }) => {
  console.log("CATEGORY", category);
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("CLICKED");
    let filterName, filter;
    if (category) {
      filter = category;
      filterName = "category";
    } else {
      filter = brand;
      filterName = "brand";
    }
    navigate(`/products?${filterName}=${filter}`);
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
