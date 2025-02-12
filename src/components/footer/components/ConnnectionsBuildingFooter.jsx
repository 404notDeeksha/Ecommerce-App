import { footer1Links } from "../../../utils/common-consts";

export const ConnnectionsBuildingFooter = () => {
  return (
    <div
      className="flex flex-row gap-x-[10%] w-full m-auto 
    max-w-[1000px] text-sm leading-5"
    >
      {footer1Links?.map((data, index) => {
        return (
          <div
            key={index}
            className=" py-0 px-2.5 gap-2
          align-top text-[#DDD] "
          >
            <div className=" font-bold text-[#FFF] mt-1.5 mb-3.5 text-base ">
              {data.title}
            </div>
            <ul className="flex flex-col gap-3">
              {data.data?.map((ele, index) => {
                return (
                  <li key={index} className=" hover:underline cursor-pointer">
                    {ele.name}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
