import { IoMenuSharp as HamBurgerMenu } from "react-icons/io5";

export const SideBarButton = ({
  onOpen,
  onOpenSidebar,
  modalVisibilityClassType,
}) => {
  const handleSideBar = () => {
    onOpen();
    modalVisibilityClassType("modal-zindex-fullScreen");
    onOpenSidebar();
  };

  return (
    <>
      <div
        className="py-2 px-[9px] font-semibold flex  text-white hover-header"
        onClick={() => handleSideBar()}
      >
        <HamBurgerMenu className="scale-y-[1.9] scale-x-[1.6] ml-4 mt-1 mr-2" />
        All
      </div>
    </>
  );
};
