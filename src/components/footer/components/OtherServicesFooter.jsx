import { footer2Links } from "../../../utils/common-consts";

export const OtherServicesFooter = () => {
  return (
    <div className="mt-7 mb-0 py-7 text-xs text-center      leading-[18px]  bg-[#131A22] text-[#DDD]  ">
      <ul className="max-w-[1000px] my-0 m-auto w-full grid grid-cols-4 grid-rows-2 gap-y-2 gap-x-5 text-left">
        {footer2Links.map((ele, index) => {
          return (
            <li
              key={index}
              className="cursor-pointer  text-[#DDD] border-spacing-0.5 
                    text-xs align-top py-0 px-3 text-left leading-[115%] text-nowrap "
            >
              <div className=""> {ele.title}</div>
              <div className="text-[#999] whitespace-pre-wrap hover:underline">
                {ele.desc}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
