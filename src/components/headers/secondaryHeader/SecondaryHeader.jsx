import React from "react";
import { SideBarButton } from "./SideBarButton";
import { CategoryLinks } from "./CategoryLinks";

export const SecondaryHeader = () => {
  return (
    <>
      <div className="header-bottom">
        <SideBarButton />
        <CategoryLinks />
      </div>
    </>
  );
};
