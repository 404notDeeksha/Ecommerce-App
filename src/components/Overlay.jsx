import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Portal from "./Portal";
import { inactiveOverlay } from "../redux/slices/overlaySlice";
import { PopoverBox } from "./PopoverBox";

const Overlay = () => {
  const dispatch = useDispatch();
  const { isOpen, contentKey } = useSelector((state) => state.overlay);
  console.log("StateOverlay", "ActionOverlay", isOpen, contentKey);

  const componentMap = {
    POPOVER: {
      component: <PopoverBox />,
      parentClass: " top-0 flex justify-center items-center z-50",
    },
    SEARCHBAR: { component: null, parentClass: "top-[60px] z-[4]" },
    TOOLTIP: { component: null, parentClass: "top-[60px]  z-[4] " },
  };

  const currentContent = componentMap[contentKey];

  if (!isOpen || !currentContent) return null;

  return (
    <Portal>
      <div
        className={`fixed left-0 h-full w-full bg-blackTransparent ${currentContent.parentClass}`}
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
