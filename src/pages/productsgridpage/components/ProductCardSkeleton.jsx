export const ProductCardSkeleton = () => {
  return (
    <>
      {[...Array(10)].map((e, i) => {
        return (
          <div
            key={i}
            className="border-2 animate-pulse border-gray-200 w-[290px]"
          >
            <div className="bg-slate-200 font-bold h-[300px] w-full "></div>
            <div className="flex flex-col gap-2 p-4">
              <div className="rounded bg-slate-200 w-64 h-4"></div>
              <div className="bg-slate-200 w-40 rounded h-3"></div>
              <div className="bg-slate-200 w-28 rounded h-3"></div>
            </div>
          </div>
        );
      })}
    </>
  );
};
