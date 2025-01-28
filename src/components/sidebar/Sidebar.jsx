import React, { useRef } from "react";
import { motion } from "framer-motion";
import { GrClose as SideBarCloseIcon } from "react-icons/gr";
import { Navbar } from "./Navbar";
import { Categories } from "./Categories";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../../redux/slices/sidebarSlice";
import { inactiveOverlay } from "../../redux/slices/overlaySlice";
import { SIDEBAR_STATE } from "../../utils/common-consts";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const currentState = useSelector((state) => state.sidebar.state);
  const sidebarRef = useRef(null);
  if (sidebarRef.current) {
    sidebarRef.current.scrollTop = 0;
  }

  const closeSidebarInternal = () => {
    dispatch(closeSidebar());
    dispatch(inactiveOverlay());
  };

  switch (currentState) {
    case SIDEBAR_STATE.OPEN:
      return (
        <div ref={sidebarRef}>
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`h-svh bg-white  absolute left-0 top-[0px] text-nowrap z-[7] w-[365px] overscroll-contain`}
          >
            <Navbar />
            <Categories />
          </motion.div>

          <SideBarCloseIcon
            className={`absolute left-[390px] top-[18px]  text-white font-bold
            z-[50] transition-[opacity] 
            duration-[0.3] opacity-1 scale-[2]`}
            onClick={() => {
              closeSidebarInternal();
            }}
          />
        </div>
      );
    case SIDEBAR_STATE.CLOSE:
      return (
        <motion.div
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: -500, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`h-svh bg-white  absolute left-0 top-0 text-nowrap z-[7] w-[365px] overscroll-contain`}
        >
          <Navbar />
          <Categories />
        </motion.div>
      );
    default:
      return null;
  }
};
