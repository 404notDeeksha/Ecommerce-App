import React from "react";
import { TopNavigationFooter } from "./components/TopNavigationFooter";
import { ConnnectionsBuildingFooter } from "./components/ConnnectionsBuildingFooter";
import { OtherServicesFooter } from "./components/OtherServicesFooter";
import { TermsConditionsFooter } from "./components/TermsConditionsFooter";

export const Footer = () => {
  return (
    <div className=" my-0 pb-0 bg-[#232F3E]  text-white   min-w-[1000px] relative">
      <TopNavigationFooter />
      <ConnnectionsBuildingFooter />
      <OtherServicesFooter />
      <TermsConditionsFooter />
    </div>
  );
};
