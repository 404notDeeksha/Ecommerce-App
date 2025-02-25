import { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import PropTypes from "prop-types";

export const Pagination = ({
  itemsPerPage,
  loading,
  data,
  skeleton,
  renderItem,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) return <>{skeleton}</>;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {currentItems.map((item, index) => renderItem(item, index))}
      </div>
      <div className="flex border-gray-200 border items-center rounded-xl w-max mx-auto mt-20">
        <div
          className={`flex items-center p-4 cursor-pointer ${
            currentPage === 1
              ? "opacity-25 cursor-not-allowed pointer-events-none"
              : ""
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <MdOutlineKeyboardArrowLeft />
          Previous
        </div>
        <ul className="flex">
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              className={`p-4 px-6 cursor-pointer ${
                currentPage === index + 1 ? "active font-bold" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </li>
          ))}
        </ul>
        <div
          className={`flex items-center p-4 px-6 cursor-pointer ${
            currentPage === totalPages
              ? "opacity-25 cursor-not-allowed pointer-events-none"
              : ""
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
          <MdKeyboardArrowRight />
        </div>
      </div>
    </>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  skeleton: PropTypes.node.isRequired,
  renderItem: PropTypes.func.isRequired,
};
