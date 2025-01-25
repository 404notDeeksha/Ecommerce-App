import React from "react";
import { SideBarButton } from "./components/SideBarButton";
import { CategoryLinks } from "./components/CategoryLinks";

export const CategoryHeader = ({
  onOpen,
  onOpenSidebar,
  onClose,
  modalVisibilityClassType,
}) => {
  return (
    <>
      <div className="header-bottom">
        <SideBarButton
          onOpen={onOpen}
          onOpenSidebar={onOpenSidebar}
          modalVisibilityClassType={modalVisibilityClassType}
        />
        <CategoryLinks
          
        />
      </div>
    </>
  );
};
