import React from "react";

export const MultiCardCarouselSkeleton = () => {
  return (
    <div className="relative mx-auto max-w-[1480px]  bg-white p-5  animate-pulse flex flex-col gap-4 mb-5">
      <h2 className=" bg-slate-200 w-32 h-5"></h2>

      <div className="text-center bg-slate-200 relative w-full h-52"></div>
    </div>
  );
};
