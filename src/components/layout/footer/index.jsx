import { TopNavigationFooter } from "./topNavigationFooter";
import { ConnectionsBuildingFooter } from "./connectionsBuildingFooter";
import { OtherServicesFooter } from "./otherServicesFooter";
import { TermsConditionsFooter } from "./termsConditionsFooter";

export const Footer = () => {
  return (
    <footer className=" my-0 pb-0 bg-[#232F3E] text-white relative" role="contentinfo" aria-label="Website footer">
      <TopNavigationFooter />
      <nav aria-label="Footer navigation">
        <ConnectionsBuildingFooter />
      </nav>
      <OtherServicesFooter />
      <TermsConditionsFooter />
    </footer>
  );
};
