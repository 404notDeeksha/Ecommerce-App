import React from "react";

export const Modal = ({
  modalVisibility,
  onClose,
  onPopoverClose,
  modalVisibilityClassTypeData,
  onCloseSideBar,
}) => {
  const handleClose = () => {
    onPopoverClose();
    onClose();
    onCloseSideBar();
  };
  if (!modalVisibility) return null;

  return (
    <div
      className={`fixed top-0 left-0 h-full w-full opacity-60 bg-black ${modalVisibilityClassTypeData} `}
      onClick={handleClose}
    />
  );
};
