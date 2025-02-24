import { SearchDropDown } from "./components/SearchDropDown";
import { Bar } from "./components/Bar";

export const SearchBar = () => {
  return (
    <div className=" flex-1 ">
      <div
        className="w-auto min-w-[357px] h-10 flex bg-white  relative    rounded
         ml-[22px] mr-1 my-2.5"
      >
        <SearchDropDown />
        <Bar />
      </div>
    </div>
  );
};
