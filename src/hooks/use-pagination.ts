import React from 'react';

import { EOrder } from '../utils/constants/sort';

export interface IPaginationProps {
  page?: number;
  limit?: number;
  sort?: {
    sortBy: string;
    order: EOrder;
  };
}

export const usePagination = (initialValue?: IPaginationProps) => {
  const currentPage = initialValue?.page || 1;
  const currentLimit = initialValue?.limit || 12;
  const currentSort = initialValue?.sort;

  const [page, setPage] = React.useState(currentPage);
  const [limit, setLimit] = React.useState(currentLimit);
  const [sort, setSort] = React.useState(currentSort);

  const onPageChange = (page: number) => {
    setPage(page);
  };
  const onLimitChange = (limit: number) => {
    setLimit(limit);
  };
  const onSortChange = (sort?: { sortBy: string; order: EOrder }) => {
    setSort(sort);
  };

  return {
    page,
    limit,
    sort,
    onPageChange,
    onLimitChange,
    onSortChange,
  };
};
