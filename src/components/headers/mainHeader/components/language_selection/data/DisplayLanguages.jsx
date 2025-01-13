import { addUniqueIdToElements } from "../../../../../../utils/common-utils";

const LangList = [
  { value: " EN", category: "English" },
  { value: " HI", category: "हिंदी " },
  { value: " TA", category: "தமிழ் " },
  { value: " TE", category: "తెలుగు " },
  { value: " KN", category: "ಕನ್ನಡ " },
  { value: " MA", category: "മലയാളം " },
  { value: " BN", category: "বাংলা" },
  { value: " MR", category: "मराठी " },
];

export const getDropDownList = () => {
  const LangListArray = addUniqueIdToElements(LangList);
  return LangListArray;
};
