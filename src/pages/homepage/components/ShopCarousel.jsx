import { MultiCardCarousel } from "./CardCarousel";
import { FORMAT } from "../data/CategoryFormat";

export const ShopCarousel = ({ data, structure, unit }) => {
  return (
    <>
      {data.map((ele) => {
        if (ele.name === FORMAT[structure][unit]) {
          return (
            <MultiCardCarousel key={ele.id} data={ele.data} title={ele.label} />
          );
        }
      })}
    </>
  );
};
