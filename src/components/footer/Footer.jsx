import React from "react";
import { TopNavigationFooter } from "./components/TopNavigationFooter";
import { ConnnectionsBuildingFooter } from "./components/ConnnectionsBuildingFooter";
import { OtherServicesFooter } from "./components/OtherServicesFooter";
import { TermsConditionsFooter } from "./components/TermsConditionsFooter";

export const Footer = () => {
  return (
    <div className="nav-left-footer">
      <TopNavigationFooter />
      <ConnnectionsBuildingFooter />
      <OtherServicesFooter />
      <TermsConditionsFooter />
    </div>
  );
};
