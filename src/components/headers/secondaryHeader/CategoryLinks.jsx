import { categoriesList } from "../../../utils/common-consts";

export const CategoryLinks = () => {
  return (
    <ul className="flex flex-wrap justify-between flex-1 basis-full overflow-hidden">
      {categoriesList?.map((ele) => {
        return (
          <li
            key={ele.id}
            className="text-nowrap
               p-2 text-white hover-header"
          >
            {ele.name}
          </li>
        );
      })}
    </ul>
  );
};
