import { useSelector, useDispatch } from "react-redux";
import Portal from "./Portal";
import { inactiveOverlay } from "../redux/slices/overlaySlice";
import { PopoverBox } from "./PopoverBox";
import { Sidebar } from "../components/sidebar/Sidebar";
import { closeSidebar } from "../redux/slices/sidebarSlice";

const Overlay = () => {
  const dispatch = useDispatch();
  const { isOpen, contentKey } = useSelector((state) => state.overlay);

  const componentMap = {
    POPOVER: {
      component: <PopoverBox />,
      parentClass: "  flex justify-center items-center z-[6]",
    },
    SEARCHBAR: { component: null, parentClass: " z-[4]" },
    TOOLTIP_MAIN_HEADER: { component: null, parentClass: "  z-[4] " },
    SIDEBAR: { component: <Sidebar />, parentClass: "  z-[6] " },
    TOOLTIP_CATEGORY_HEADER: { component: null, parentClass: "  z-[2] " },
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
        className={`fixed top-0 left-0 h-full w-full bg-blackTransparent ${currentContent.parentClass}`}
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
