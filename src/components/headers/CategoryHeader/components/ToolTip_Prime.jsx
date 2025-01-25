import React from "react";
import { useDispatch } from "react-redux";
import { inactiveOverlay } from "../../../../redux/slices/overlaySlice";

export const ToolTipPrime = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="
        flex-col invisible group-hover:visible
           bg-white text-black shadow-lg 
       absolute top-[37px] h-[340px] w-[340px]
       after:content-['']  after:absolute after:bottom-[100%] after:left-[11%] after:border-[8px] after:border-b-white after:border-l-transparent   
       after:border-t-transparent  after:border-r-transparent        
       "
        onMouseOut={() => dispatch(inactiveOverlay())}
      >
        <div className="border-[14px] border-white bg-[#007185] h-[340px] w-[340px ] cursor-pointer"></div>
      </div>
    </>
  );
};
