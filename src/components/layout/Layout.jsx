import React from "react";
import { MainHeader } from "../headers/mainHeader/MainHeader";
import { CategoryHeader } from "../headers/CategoryHeader/CategoryHeader";
import { Footer } from "../footer/Footer";
import { Modal } from "../../utils/Modal";
import { Sidebar } from "../headers/CategoryHeader/sidebar/Sidebar";
import { Popover } from "../../utils/Popover";
import { Outlet } from "react-router-dom";

export const Layout = (props) => {
  const {
    onOpen,
    onClose,
    popover,
    onPopoverOpen,
    onPopoverClose,
    modalVisibility,
    modalVisibilityClassType,
    modalVisibilityClassTypeData,
    sideBarToggle,
    onCloseSidebar,
    onOpenSidebar,
  } = props;
  return (
    <>
      <MainHeader
        onOpen={onOpen}
        onClose={onClose}
        onPopoverOpen={onPopoverOpen}
        modalVisibilityClassType={modalVisibilityClassType}
      />
      <CategoryHeader
        onOpen={onOpen}
        onClose={onClose}
        onOpenSidebar={onOpenSidebar}
        modalVisibilityClassType={modalVisibilityClassType}
      />
      <Sidebar
        sideBarToggle={sideBarToggle}
        onCloseSidebar={onCloseSidebar}
        onClose={onClose}
      />
      <Modal
        modalVisibility={modalVisibility}
        onClose={onClose}
        onPopoverClose={onPopoverClose}
        onCloseSideBar={onCloseSidebar}
        modalVisibilityClassTypeData={modalVisibilityClassTypeData}
      />
      <Popover
        popover={popover}
        onClose={onClose}
        onPopoverClose={onPopoverClose}
      />
      <Outlet />
      <Footer />
    </>
  );
};
