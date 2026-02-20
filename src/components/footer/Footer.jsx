import { TopNavigationFooter } from "./components/TopNavigationFooter";
import { ConnnectionsBuildingFooter } from "./components/ConnnectionsBuildingFooter";
import { OtherServicesFooter } from "./components/OtherServicesFooter";
import { TermsConditionsFooter } from "./components/TermsConditionsFooter";

export const Footer = () => {
  return (
    <footer className=" my-0 pb-0 bg-[#232F3E]  text-white   min-w-[1000px] relative" role="contentinfo" aria-label="Website footer">
      <TopNavigationFooter />
      <nav aria-label="Footer navigation">
        <ConnnectionsBuildingFooter />
      </nav>
      <OtherServicesFooter />
      <TermsConditionsFooter />
    </footer>
  );
};
