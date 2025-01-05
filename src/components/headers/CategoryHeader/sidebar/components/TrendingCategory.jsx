import React from "react";
import { getTrending } from "../data/Categories";

export const TrendingCategory = () => {
  const trendingArray = getTrending();
  return (
    <div className="border-slate-200 border-b-[1px] pb-2">
      <li key="trending" className="pl-9 pr-5 pt-[13px] pb-[10px] text-black">
        Trending
      </li>
      {trendingArray.map((ele) => {
        return (
          <li
            key={ele.id}
            className="font-[500] text-sm py-[13px] leading-5 pl-9 cursor-pointer hover:bg-[#eaeded]"
          >
            <a href="">{ele.category}</a>
          </li>
        );
      })}
    </div>
  );
};
