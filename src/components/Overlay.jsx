import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Portal from "./Portal";
import { inactiveOverlay } from "../redux/slices/overlaySlice";
import { PopoverBox } from "./PopoverBox";

const Overlay = () => {
  const dispatch = useDispatch();
  const { isOpen, contentKey } = useSelector((state) => state.overlay);
  // console.log("StateOverlay", "ActionOverlay", isOpen, contentKey);

  const componentMap = {
    POPOVER: <PopoverBox />,
  };

  if (!isOpen) return null;

  return (
    <Portal>
      <div
        className="fixed top-0 left-0 h-full w-full bg-blackTransparent z-50 flex justify-center items-center "
        onClick={() => dispatch(inactiveOverlay())}
      >
        <div className="" onClick={(e) => e.stopPropagation()}>
          {componentMap.POPOVER}
        </div>
      </div>
    </Portal>
  );
};

export default Overlay;
