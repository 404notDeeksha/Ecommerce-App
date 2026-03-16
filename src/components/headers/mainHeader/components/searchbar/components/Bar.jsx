import { useState } from "react";
import { IoMdSearch as IconSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  activeOverlay,
  inactiveOverlay,
} from "../../../../../../redux/slices/overlaySlice";

export const Bar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleClick = () => {
    dispatch(activeOverlay("SEARCHBAR"));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      dispatch(inactiveOverlay());
    }
  };

  return (
    <form
      className="
    flex justify-between flex-1 "
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Search Amazon.in"
        className="block w-full placeholder:text-slate-400 text-[15px] font-[600] outline-none p-2  rounded-l"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onClick={handleClick}
        onMouseLeave={() => dispatch(inactiveOverlay())}
      />
      <button
        type="submit"
        className="relative 
       bg-orange-300 border-orange-300 rounded w-12 cursor-pointer"
      >
        <IconSearch className="block scale-[1.7]  m-3 ml-3.5" />
      </button>
    </form>
  );
};
