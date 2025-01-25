import { IoMenuSharp as HamBurgerMenu } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { openSidebar } from "../../../../redux/slices/sidebarSlice";
import { activeOverlay } from "../../../../redux/slices/overlaySlice";

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
    >
      <HamBurgerMenu className="scale-y-[1.9] scale-x-[1.6] ml-4 mt-1 mr-2" />
      All
    </div>
  );
};
