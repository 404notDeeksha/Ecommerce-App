import React from "react";

export const ProductSkeleton = () => {
  return (
    <div className="w-full min-w-[996px] max-w-[1500px] bg-[#fff] px-[18px] py-10 pb-20 my-0 mx-auto animate-pulse  ">
      <div className="flex gap-6">
        <div className="bg-slate-200 font-bold h-[400px] w-[540px]"></div>
        <div className=" mx-8 flex-1 flex flex-col gap-6">
          <div className="rounded bg-slate-200 w-96 h-6"></div>
          <div className="bg-slate-200 w-28 rounded h-3"></div>
          <div className="bg-slate-200 w-28 rounded h-3"></div>
          <div className="rounded bg-slate-200 w-48 h-14"></div>
          <div className="border-b-2 border-gray-400 my-4"></div>
          <ul className="flex gap-8">
            <li key={`icon-1`}>
              <div className="rounded-full bg-slate-200 w-10 h-10"></div>
            </li>
            <li key={`icon-2`}>
              <div className="rounded-full bg-slate-200 w-10 h-10"></div>
            </li>
            <li key={`icon-3`}>
              <div className="rounded-full bg-slate-200 w-10 h-10"></div>
            </li>
            <li key={`icon-4`}>
              <div className="rounded-full bg-slate-200 w-10 h-10"></div>
            </li>
          </ul>
          <div className="border-b-2 border-gray-400 my-4"></div>
          <div className=" flex flex-col gap-6">
            <div className="bg-slate-200 w-40 rounded h-3"></div>
            <div className="bg-slate-200 w-40 rounded h-3"></div>
            <div className="bg-slate-200 w-40 rounded h-3"></div>
          </div>
          <div className="border-b-2 border-gray-400 my-4"></div>
          <div className="flex flex-col gap-6 ">
            <div className="bg-slate-200 w-72 rounded h-3"></div>
            <div className="bg-slate-200 w-72 rounded h-3"></div>
            <div className="bg-slate-200 w-72 rounded h-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
