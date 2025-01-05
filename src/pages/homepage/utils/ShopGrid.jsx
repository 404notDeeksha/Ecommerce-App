import { GridCardCarousel } from "./GridCardCarousel";
import { FORMAT } from "../../homepage/data/CategoryFormat";

export const ShopGrid = ({ data, structure, unit }) => {
  return (
    <>
      {data.map((ele) => {
        if (ele.name === FORMAT[structure][unit]) {
          return <GridCardCarousel key={ele.id} data={ele.data} />;
        }
      })}
    </>
  );
};
