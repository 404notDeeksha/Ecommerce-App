import React from "react";
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
  // console.log(data);
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

export const GridCardImage = ({ caption, image }) => {
  return (
    <div className="justify-between cursor-pointer">
      <img src={image} className=" object-fill aspect-auto" />
      <div className="text-[12px] overflow-ellipsis leading-5">{caption}</div>
    </div>
  );
};
