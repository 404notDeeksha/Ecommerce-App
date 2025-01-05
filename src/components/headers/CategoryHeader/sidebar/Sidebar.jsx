import React from "react";
import { motion } from "framer-motion";
import { GrClose as SideBarCloseIcon } from "react-icons/gr";
import { Navbar } from "./components/Navbar";
import { Categories } from "./components/Categories";

export const Sidebar = ({ sideBarToggle, onCloseSidebar, onClose }) => {
  // console.log(onCloseSidebar);
  const handleSideBarClose = () => {
    onCloseSidebar();
    onClose();
  };
  return (
    <>
      {sideBarToggle ? (
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className={`h-svh bg-white  absolute left-0 top-[0px] text-nowrap z-[7] w-[365px] overscroll-contain`}
        >
          <Navbar />
          <Categories sideBarToggle={sideBarToggle} />
        </motion.div>
      ) : (
        <motion.div
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: -500, opacity: 1 }}
          transition={{ duration: 1 }}
          className={`h-svh bg-white  absolute left-0 top-0 text-nowrap z-[7] w-[365px] overscroll-contain`}
        >
          <Navbar />
          <Categories sideBarToggle={sideBarToggle} />
        </motion.div>
      )}

      <SideBarCloseIcon
        className={`absolute left-[390px] top-[18px]  text-white font-bold
                z-[50] transition-[opacity] 
                duration-[0.3]
                 ${
                   sideBarToggle ? "opacity-1 scale-[2]" : "opacity-0 scale-[0]"
                 }`}
        onClick={() => handleSideBarClose()}
      />
    </>
  );
};
