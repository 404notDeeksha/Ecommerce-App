import { SideBarButton } from "./sideBarButton";
import { CategoryLinks } from "./categoryLinks";

export const SecondaryHeader = () => {
  return (
    <div className="max-h-[39px] bg-amazon_light text-white text-[14px] flex relative z-[3] overflow-x-auto">
      <SideBarButton />
      <div className="hidden md:flex">
        <CategoryLinks />
      </div>
    </div>
  );
};
