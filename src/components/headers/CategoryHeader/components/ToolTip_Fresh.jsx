import React from "react";

export const ToolTipFresh = () => {
  return (
    <>
      <div
        className="
          flex-col invisible group-hover:visible bg-white text-black shadow-lg
          absolute h-[306px] w-[375px] top-[37px]
         p-5
         after:content-['']  after:absolute after:bottom-[100%] after:left-[9%] after:border-[8px] after:border-b-white after:border-l-transparent
         after:border-t-transparent  after:border-r-transparent
         "
      >
        <div className="text-[18px] font-bold leading-6 ">Shop groceries</div>
        <div className="my-[14px] mb-[5px] flex">
          <div className="mr-[5px] h-[165px] w-[165px] bg-[#EBEEF0] hover:bg-[#E3E6E8] hover:duration-[250] hover:ease-in-out cursor-pointer"></div>
          <div className="h-[165px] w-[165px] bg-[#EBEEF0] hover:bg-[#E3E6E8] hover:duration-[250] hover:ease-in-out cursor-pointer"></div>
        </div>

        {/* -----------------------------BORDER #1--------------------------- */}
        <div className="absolute left-5 bottom-[60px]  w-[330px] border-[0.5px] border-slate-300" />
        <div className="text-[14px] text-[#007185] mt-[38px] leading-6 ">
          Shop all Groceries on Amazon
        </div>
      </div>
    </>
  );
};
