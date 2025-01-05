import React from "react";
import { DropDownButton } from "./components/DropDownButton";
import { Bar } from "./components/Bar";

export const SearchBar = ({ onOpen, modalVisibilityClassType }) => {
  return (
    <>
      <div className=" flex-1 ">
        <div
          className="w-auto min-w-[357px] h-10 flex bg-white  relative    rounded
         ml-[22px] mr-1 my-2.5"
        >
          <DropDownButton />
          <Bar
            onOpen={onOpen}
            modalVisibilityClassType={modalVisibilityClassType}
          />
        </div>
      </div>
    </>
  );
};
