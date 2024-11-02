import React from "react";

const Pagination = ({ display, currentPage, totalPages, onPageChange }) => {
  if (!display) return null;

  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <a
          key={i}
          href="#"
          onClick={() => handlePageClick(i)}
          className={`-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium ${
            i === currentPage ? 'text-primary-700' : 'text-primary-600'
          } focus:z-10 focus:outline-none focus:border-primary-300 focus:shadow-outline-primary active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary`}
        >
          {i}
        </a>
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <nav className="relative z-0 inline-flex shadow-sm">
        <div>
          <a
            href="#"
            onClick={handlePrevious}
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-primary-500 hover:text-primary-400 focus:z-10 focus:outline-none focus:border-primary-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
            aria-label="Previous"
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div>{renderPageNumbers()}</div>
        <div>
          <a
            href="#"
            onClick={handleNext}
            className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-primary-500 hover:text-primary-400 focus:z-10 focus:outline-none focus:border-primary-300 focus:shadow-outline-primary active:bg-primary-100 active:text-primary-500 transition ease-in-out duration-150"
            aria-label="Next"
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Pagination;
