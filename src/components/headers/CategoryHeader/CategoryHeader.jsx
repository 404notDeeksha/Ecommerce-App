import React from "react";
import { SideBarButton } from "./components/SideBarButton";
import { CategoryLinks } from "./components/CategoryLinks";

export const CategoryHeader = () => {
  return (
    <>
      <div className="header-bottom">
        <SideBarButton />
        {/* <CategoryLinks /> */}
      </div>
    </>
  );
};
