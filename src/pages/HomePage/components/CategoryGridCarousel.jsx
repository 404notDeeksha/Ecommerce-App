import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { routes } from "@config/routes.js";
import PropTypes from "prop-types";

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
    <div className="py-2.5 w-full max-w-[1480px] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 z-[5] place-items-center relative">
      <Grid data={data1} label={label1} />
      <Grid data={data2} label={label2} />
      <Grid data={data3} label={label3} />
      <Grid data={data4} label={label4} />
    </div>
  );
};

const Grid = ({ data, label }) => {
  return (
    <div className="flex flex-col px-5 w-full max-w-[350px] h-[350px] bg-white pt-5 justify-between pb-10">
      <h2 className="text-xl font-bold pb-2.5">{label}</h2>
      <div className="grid gap-3 grid-cols-2 grid-flow-row">
        {data?.map((ele) => (
          <GridCardImage
            key={uuid()}
            caption={ele.caption}
            image={ele.image}
            category={ele.category}
            brand={ele.brand}
            subCategory={ele.subCategory}
          />
        ))}
      </div>
    </div>
  );
};

const GridCardImage = ({ caption, image, category, brand, subCategory }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    let filterName, filterCategory;
    if (category) {
      filterCategory = category;
      filterName = "category";
    } else if (brand) {
      filterCategory = brand;
      filterName = "brand";
    } else {
      filterCategory = subCategory;
      filterName = "subCategory";
    }
    const filter = `${filterName}=${filterCategory}`;
    navigate(routes.getProducts(filter));
  };
  return (
    <div
      className="flex flex-col justify-between cursor-pointer h-[140px]"
      onClick={handleClick}
    >
      <img src={image} className="w-full h-[92px] object-cover" />
      <div className="text-[12px] leading-5 line-clamp-2 h-[40px]">
        {caption}
      </div>
    </div>
  );
};
