import { IoMenuSharp as HamBurgerMenu } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { openSidebar } from "../../../redux/slices/sidebarSlice";
import { activeOverlay } from "../../../redux/slices/overlaySlice";

export const SideBarButton = () => {
  const dispatch = useDispatch();

  const handleSideBar = () => {
    dispatch(openSidebar());
    dispatch(activeOverlay("SIDEBAR"));
  };

  return (
    <div
      className="py-2 px-[9px] font-semibold flex  text-white hover-header"
      onClick={() => handleSideBar()}
      onKeyDown={(e) => e.key === "Enter" && handleSideBar()}
      role="button"
      aria-label="Open navigation menu"
      tabIndex={0}
    >
      <HamBurgerMenu className="scale-y-[1.9] scale-x-[1.6] ml-4 mt-1 mr-2" aria-hidden="true" />
      <span className="sr-only">All</span>
      <span aria-hidden="true">All</span>
    </div>
  );
};
