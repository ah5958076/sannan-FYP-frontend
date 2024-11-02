import React from "react";

const PaginationSummary = ({ display, currentPage, itemsPerPage, totalItems }) => {
  if (!display) return null;

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div>
      <p className="flex gap-1 text-sm leading-5 text-primary-700">
        Showing
        <span className="font-medium">{startItem}</span>
        to
        <span className="font-medium">{endItem}</span>
        of
        <span className="font-medium">{totalItems}</span>
        results
      </p>
    </div>
  );
};

export default PaginationSummary;
