import { Bar } from "./components/Bar";

export const SearchBar = () => {
  return (
    <div className="flex-1 min-w-0 mx-2 md:mx-0">
      <div className="w-full md:w-auto md:min-w-[357px] h-10 flex bg-white relative rounded md:ml-[22px] md:mr-1 my-1.5 md:my-2.5">
        <Bar />
      </div>
    </div>
  );
};
