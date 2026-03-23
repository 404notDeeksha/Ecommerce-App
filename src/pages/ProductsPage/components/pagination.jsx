import {
  MdOutlineKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import PropTypes from "prop-types";

export const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  totalPages,
  loading,
  onPageChange,
  skeleton,
  renderItem,
  data,
}) => {
  if (loading) return <>{skeleton}</>;

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 3;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
      let end = Math.min(totalPages, start + maxVisible - 1);
      
      if (end - start < maxVisible - 1) {
        start = Math.max(1, end - maxVisible + 1);
      }
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }
    
    return pages;
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {data.map((item, index) => renderItem(item, index))}
      </div>
      {totalPages > 0 && (
        <div className="flex border-gray-200 border items-center rounded-xl w-max mx-auto mt-20">
          <div
            className={`flex items-center p-4 cursor-pointer ${
              currentPage === 1
                ? "opacity-25 cursor-not-allowed pointer-events-none"
                : ""
            }`}
            onClick={handlePrev}
          >
            <MdOutlineKeyboardArrowLeft />
            Previous
          </div>
          <ul className="flex">
            {getPageNumbers().map((page) => (
              <li
                key={page}
                className={`p-4 px-6 cursor-pointer ${
                  currentPage === page ? "active font-bold" : ""
                }`}
                onClick={() => handlePageClick(page)}
              >
                {page}
              </li>
            ))}
          </ul>
          <div
            className={`flex items-center p-4 px-6 cursor-pointer ${
              currentPage === totalPages
                ? "opacity-25 cursor-not-allowed pointer-events-none"
                : ""
            }`}
            onClick={handleNext}
          >
            Next
            <MdKeyboardArrowRight />
          </div>
        </div>
      )}
    </>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  loading: PropTypes.bool.isRequired,
  onPageChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  skeleton: PropTypes.node.isRequired,
  renderItem: PropTypes.func.isRequired,
};
