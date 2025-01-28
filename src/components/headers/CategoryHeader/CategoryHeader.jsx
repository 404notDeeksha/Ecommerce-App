import React from "react";
import { SideBarButton } from "./SideBarButton";
import { CategoryLinks } from "./CategoryLinks";

export const CategoryHeader = () => {
  return (
    <>
      <div className="header-bottom">
        <SideBarButton />
        <CategoryLinks />
      </div>
    </>
  );
};
