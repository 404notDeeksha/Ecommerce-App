import { otherServices } from "../data/OtherServices";

export const OtherServicesFooter = () => {
  return (
    <div
      className="mt-7 mb-0 py-7 text-xs text-center
      leading-[18px]  bg-[#131A22] text-[#DDD]  "
    >
      <div className="max-w-[1000px] my-0 m-auto w-full  border-gray-500">
        <TableFormat />
      </div>
    </div>
  );
};

const TableFormat = () => {
  return (
    <div className="align-middle border-spacing-[2] ">
      <ul className="overflow-y-visible grid grid-cols-4 grid-rows-2 gap-y-3 gap-x-5 flex-wrap  max-w-[1000px] text-left">
        {otherServices.map((ele, index) => {
          return (
            <li
              key={index}
              className="cursor-pointer  text-[#DDD] border-spacing-0.5 
                    text-xs align-top py-0 px-3 text-left leading-[115%] text-nowrap "
            >
              <a className=" text-nowrap">
                {ele.title}
                <br />
                <span className="text-[#999]  text-nowrap whitespace-pre-wrap">
                  {ele.desc}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
