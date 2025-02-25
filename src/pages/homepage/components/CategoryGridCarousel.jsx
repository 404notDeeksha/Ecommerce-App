import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { routes } from "./../../../routes/routes";
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
    <div className="card-grid pb-10">
      <h2 className="text-xl font-bold pb-2.5">{label}</h2>
      <div className="card-grid-data ">
        {data?.map((ele) => {
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
    <div className="justify-between cursor-pointer" onClick={handleClick}>
      <img
        src={image}
        className=" object-fill aspect-auto w-[150px] h-[92px]"
      />
      <div className="text-[12px] overflow-ellipsis leading-5">{caption}</div>
    </div>
  );
};

CategoryGridCarousel.propTypes = {
  data1: PropTypes.array.isRequired,
  data2: PropTypes.array.isRequired,
  data3: PropTypes.array.isRequired,
  data4: PropTypes.array.isRequired,
  label1: PropTypes.string.isRequired,
  label2: PropTypes.string.isRequired,
  label3: PropTypes.string.isRequired,
  label4: PropTypes.string.isRequired,
};

Grid.propTypes = {
  data: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
};

GridCardImage.propTypes = {
  caption: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string,
  brand: PropTypes.string,
  subCategory: PropTypes.string,
};
