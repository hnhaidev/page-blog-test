import React from 'react';

import { PaginationItem } from './pagination-item';

interface DataTablePagination2Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<DataTablePagination2Props> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const createPaginationItems = () => {
    const pages: React.ReactNode[] = [];
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    pages.push(
      <PaginationItem key={1} active={currentPage === 1} onClick={() => onPageChange(1)}>
        1
      </PaginationItem>,
    );

    if (startPage > 2) {
      pages.push(
        <PaginationItem key="ellipsis1" disabled>
          ...
        </PaginationItem>,
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PaginationItem key={i} active={currentPage === i} onClick={() => onPageChange(i)}>
          {i}
        </PaginationItem>,
      );
    }

    if (endPage < totalPages - 1) {
      pages.push(
        <PaginationItem key="ellipsis2" disabled>
          ...
        </PaginationItem>,
      );
    }

    pages.push(
      <PaginationItem
        key={totalPages}
        active={currentPage === totalPages}
        onClick={() => onPageChange(totalPages)}
      >
        {totalPages}
      </PaginationItem>,
    );

    return pages;
  };

  return totalPages > 0 ? (
    <nav aria-label="navigation">
      <ul className="pagination">
        <PaginationItem disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
          <span aria-hidden="true">&laquo;</span>
        </PaginationItem>

        {createPaginationItems()}

        <PaginationItem
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <span aria-hidden="true">&raquo;</span>
        </PaginationItem>
      </ul>
    </nav>
  ) : null;
};

export { Pagination };
