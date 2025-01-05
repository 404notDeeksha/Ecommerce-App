import { categoryList } from "../data/CategoryList";
import { RiArrowDropDownFill as DropDownIcon } from "react-icons/ri";
import { ToolTipFresh } from "./ToolTip_Fresh";
import { ToolTipPrime } from "./ToolTip_Prime";
import { v4 as uuidv4 } from "uuid";

export const CategoryLinks = ({
  onOpen,
  onClose,
  modalVisibilityClassType,
}) => {
  const handleMouseOver = () => {
    onOpen();
    modalVisibilityClassType("modal-zindex-navbarFull");
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
                className="group flex"
                onMouseOver={handleMouseOver}
                onMouseOut={onClose}
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
