import { getSearchList } from "../../../../../../utils/common-consts";
import { useDispatch } from "react-redux";
import { activeOverlay } from "../../../../../../redux/slices/overlaySlice";
import PropTypes from "prop-types";

export const SearchList = ({ dropListCategory }) => {
  const searchList = getSearchList();

  const dispatch = useDispatch();

  const handleClick = (value) => {
    const item = searchList?.find((item) => item.value === value);
    dropListCategory(item.category);
  };

  return (
    <select
      name="url"
      id="url-dropdown"
      className="opacity-0 h-full absolute w-full p-5 px-2"
      onChange={(e) => handleClick(e.target.value)}
      onClick={() => dispatch(activeOverlay("SEARCHBAR"))}
    >
      {searchList?.map((data) => {
        return (
          <option
            key={data.value}
            value={data.value}
            className="hover:bg-blue-500 hover:text-white text-[14px]"
          >
            {data.category}
          </option>
        );
      })}
    </select>
  );
};

SearchList.propTypes = {
  dropListCategory: PropTypes.func.isRequired,
};
