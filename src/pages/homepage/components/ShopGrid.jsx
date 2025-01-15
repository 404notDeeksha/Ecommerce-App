import { CategoryGridCarousel } from "./CategoryGridCarousel";
import { FORMAT } from "../data/CategoryFormat";

export const ShopGrid = ({ data, structure, unit }) => {
  return (
    <>
      {data.map((ele) => {
        if (ele.name === FORMAT[structure][unit]) {
          return <CategoryGridCarousel key={ele.id} data={ele.data} />;
        }
      })}
    </>
  );
};
