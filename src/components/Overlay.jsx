import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Portal from "./Portal";
import { inactiveOverlay } from "../redux/slices/overlaySlice";
import { PopoverBox } from "./PopoverBox";
import { SearchBar } from "./headers/mainHeader/components/searchbar/SearchBar";

const Overlay = () => {
  const dispatch = useDispatch();
  const { isOpen, contentKey } = useSelector((state) => state.overlay);
  console.log("StateOverlay", "ActionOverlay", isOpen, contentKey);

  const componentMap = {
    POPOVER: {
      component: <PopoverBox />,
      parentClass: " top-0 flex justify-center items-center",
    },
    SEARCHBAR: { component: null, parentClass: "top-[60px]" },
  };

  const currentContent = componentMap[contentKey];

  if (!isOpen || !currentContent) return null;

  return (
    <Portal>
      <div
        className={`fixed left-0 h-full w-full bg-blackTransparent z-50 ${currentContent.parentClass}`}
        onClick={() => dispatch(inactiveOverlay())}
      >
        <div className="" onClick={(e) => e.stopPropagation()}>
          {currentContent.component}
        </div>
      </div>
    </Portal>
  );
};

export default Overlay;
