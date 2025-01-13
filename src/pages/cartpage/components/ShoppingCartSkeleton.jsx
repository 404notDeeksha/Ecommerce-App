export const ShoppingCartSkeleton = () => {
  return (
    <div className="flex justify-between animation-pulse">
      <div className="mr-5 mb-5 p-5 bg-white flex-1">
        <div className="text-3xl mb-4">Shopping Cart</div>

        <div className="border-b-2 border-gray-300 mb-2"></div>

        <div className="p-3 flex flex-row gap-8 justify-between">
          <div className="bg-slate-200 font-bold w-44 h-44"></div>

          <div className="text-lg flex-1 flex flex-col gap-5 ">
            <div className="rounded bg-slate-200 w-96 h-6"></div>

            <div className="bg-slate-200 w-28 rounded h-3"></div>
            <div className="bg-slate-200 w-28 rounded h-3"></div>

            <div className="bg-slate-200 w-28 rounded h-3"></div>

            <div className="rounded bg-slate-200 w-44 h-10"></div>
          </div>
          <div className="bg-slate-200 w-36 rounded h-10"></div>
        </div>

        <div className="border-b-2 border-gray-300 my-4"></div>
      </div>
    </div>
  );
};
