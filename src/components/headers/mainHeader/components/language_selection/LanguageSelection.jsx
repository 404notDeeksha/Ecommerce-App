import React, { useState } from "react";
import { RiArrowDropDownFill as DropDownIcon } from "react-icons/ri";
import { DropDownMenu } from "./components/DropDownMenu";
import { images } from "../../../../../assets/images";

export const LanguageSelection = ({
  onOpen,
  onClose,
  modalVisibilityClassType,
}) => {
  const [display, setDisplay] = useState("EN");
  const handleDisplay = (language) => {
    setDisplay(language);
  };
  const handleMouseOver = () => {
    onOpen();
    modalVisibilityClassType("modal-zindex-navbarTop");
  };

  return (
    <>
      <div
        className="hover-header relative group"
        onMouseOver={handleMouseOver}
        onMouseOut={onClose}
      >
        <div className=" my-6 ml-3 mr-2 flex ">
          <img
            src={images.indianFlag}
            alt="amazonCountry"
            className="w-[22px] h-4 scale-[.9]"
          />
          <div className="font-bold text-[14px] ml-1 -mt-[2px] ">{display}</div>
          <DropDownIcon className="scale-[1.3] min-w-4 min-h-4 mt-[3px] text-[#e6e6e6]" />
        </div>
        <DropDownMenu language={handleDisplay} isHovered={true} />
      </div>
    </>
  );
};
