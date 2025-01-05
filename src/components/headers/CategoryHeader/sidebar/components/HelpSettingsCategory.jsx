import React from "react";
import { getHelpSettings } from "../data/Categories";

export const HelpSettingsCategory = () => {
  const helpSettings = getHelpSettings();
  return (
    <>
      <li
        key=" helpSettings"
        className="pl-9 pr-5 pt-[19px] pb-[19px] text-black"
      >
        Help & Settings
      </li>
      {helpSettings.map((ele, index) => {
        return (
          <li
            key={ele.id}
            className="font-[500] text-sm py-[13px] leading-4 pl-9 cursor-pointer hover:bg-[#eaeded]"
          >
            <a href="">{ele.category}</a>
          </li>
        );
      })}
    </>
  );
};
