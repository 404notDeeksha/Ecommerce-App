import React from "react";
import { SideBarButton } from "./SideBarButton";
import { CategoryLinks } from "./CategoryLinks";

export const SecondaryHeader = () => {
  return (
    <div className=" @apply max-h-[39px] bg-amazon_light  text-white text-[14px] min-w-[1000px] flex relative z-[3]">
      <SideBarButton />
      <CategoryLinks />
    </div>
  );
};
