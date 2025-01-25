import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Portal from "./Portal";
import { inactiveOverlay } from "../redux/slices/overlaySlice";
import { PopoverBox } from "./PopoverBox";
import { Sidebar } from "./headers/CategoryHeader/sidebar/Sidebar";
import { closeSidebar } from "../redux/slices/sidebarSlice";

const Overlay = () => {
  const dispatch = useDispatch();
  const { isOpen, contentKey } = useSelector((state) => state.overlay);
  // console.log("StateOverlay", "ActionOverlay", isOpen, contentKey);

  const componentMap = {
    POPOVER: {
      component: <PopoverBox />,
      parentClass: " top-0 flex justify-center items-center z-[6]",
    },
    SEARCHBAR: { component: null, parentClass: "top-[60px] z-[4]" },
    TOOLTIP: { component: null, parentClass: "top-[60px]  z-[4] " },
    SIDEBAR: { component: <Sidebar />, parentClass: "top-0  z-[6] " },
    TOOLTIP_CATEGORY_HEADER: { component: null, parentClass: "top-0  z-[2] " },
  };

  const currentContent = componentMap[contentKey];

  if (!isOpen || !currentContent) return null;

  const clickOverlay = () => {
    dispatch(inactiveOverlay());
    dispatch(closeSidebar());
  };

  return (
    <Portal>
      <div
        className={`fixed left-0 h-full w-full bg-blackTransparent ${currentContent.parentClass}`}
        onClick={() => clickOverlay()}
      >
        <div className="" onClick={(e) => e.stopPropagation()}>
          {currentContent.component}
        </div>
      </div>
    </Portal>
  );
};

export default Overlay;
