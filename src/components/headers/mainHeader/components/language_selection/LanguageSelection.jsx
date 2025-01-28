import React from "react";
import { RiArrowDropDownFill as DropDownIcon } from "react-icons/ri";
import { Languages } from "./Languages";
import { images } from "../../../../../assets/images";
import { useDispatch, useSelector } from "react-redux";
import {
  activeOverlay,
  inactiveOverlay,
} from "../../../../../redux/slices/overlaySlice";

export const LanguageSelection = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.data);
  return (
    <div
      className="hover-header relative group z-10"
      onMouseOver={() => dispatch(activeOverlay("TOOLTIP_MAIN_HEADER"))}
      onMouseOut={() => dispatch(inactiveOverlay())}
    >
      <div className=" my-6 ml-3 mr-2 flex ">
        <img
          src={images.indianFlag}
          alt="amazonCountry"
          className="w-[22px] h-4 scale-[.9]"
        />
        <div className="font-bold text-[14px] ml-1 -mt-[2px] ">{language}</div>
        <DropDownIcon className="scale-[1.3] min-w-4 min-h-4 mt-[3px] text-[#e6e6e6]" />
      </div>
      <Languages />
    </div>
  );
};
