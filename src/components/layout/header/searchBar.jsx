import { SearchBarInput } from "./searchBarInput";

export const SearchBar = () => {
  return (
    <div className="flex-1 min-w-0 lg:mx-2">
      <div className="w-full lg:w-auto lg:min-w-[357px] h-10 flex bg-white relative rounded lg:ml-[22px] lg:mr-1 my-1.5 lg:my-2.5">
        <SearchBarInput />
      </div>
    </div>
  );
};
