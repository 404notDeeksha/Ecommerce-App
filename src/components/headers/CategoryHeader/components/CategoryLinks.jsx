import { categoryList } from "../data/CategoryList";
import { RiArrowDropDownFill as DropDownIcon } from "react-icons/ri";
import { ToolTipFresh } from "./ToolTip_Fresh";
import { ToolTipPrime } from "./ToolTip_Prime";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import {
  activeOverlay,
  inactiveOverlay,
} from "../../../../redux/slices/overlaySlice";

export const CategoryLinks = () => {
  const dispatch = useDispatch();

  const handleMouseOver = () => {
    dispatch(activeOverlay("TOOLTIP_CATEGORY_HEADER"));
  };

  return (
    <ul className="flex flex-wrap justify-between flex-1 basis-full overflow-hidden">
      {categoryList.map((ele, index) => {
        return (
          <li
            key={uuidv4()}
            className="text-nowrap
               p-2 text-white hover-header"
          >
            {(index === 0 || index === 8) && (
              <div
                className="group flex cursor-pointer"
                onMouseOver={handleMouseOver}
                onMouseOut={() => dispatch(inactiveOverlay())}
              >
                {ele}
                <DropDownIcon className="mt-1 scale-[1.32] min-w-4 min-h-4 " />
                {index === 0 && <ToolTipFresh />}
                {index === 8 && <ToolTipPrime />}
              </div>
            )}
            {index !== 0 && index !== 8 && ele}
          </li>
        );
      })}
    </ul>
  );
};
