import  { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Pagination = ({ itemsPerPage, loading, children }) => {
  if (loading) {
    return children;
  }

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(children?.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItem = children?.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="flex flex-wrap gap-2">{currentItem}</div>
      <div className="flex border-gray-200 border items-center rounded-xl w-max mx-auto mt-20">
        <div
          className={`flex items-center p-4 cursor-pointer ${
            currentPage === 1
              ? "opacity-25 cursor-not-allowed pointer-events-none"
              : "none"
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <MdOutlineKeyboardArrowLeft />
          Previous
        </div>
        {
          <ul className="flex">
            {[...Array(3).keys()].map((index) => {
              return (
                <li
                  key={index}
                  className={`p-4 px-6 cursor-pointer${
                    currentPage === index + 1 ? "active font-bold" : ""
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </li>
              );
            })}
          </ul>
        }
        <div
          className={`flex items-center p-4 px-6 cursor-pointer ${
            currentPage === totalPages
              ? "opacity-25 cursor-not-allowed pointer-events-none"
              : "none"
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
