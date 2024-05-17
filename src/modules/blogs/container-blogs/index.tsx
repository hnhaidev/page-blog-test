import React from 'react';

import { FilterBlogs } from '../filter-blogs';
import { ListBlogs } from '../list-blogs';
import { Pagination } from '../../../components';
import { usePagination } from '../../../hooks';
import { useGetBlogsQuery } from '../../../services';
import { EOrder } from '../../../utils/constants/sort';

export const ContainerBlogs = () => {
  const { page, limit, sort, onPageChange, onSortChange } = usePagination({
    sort: {
      sortBy: 'createdAt',
      order: EOrder.DESC,
    },
  });
  const [searchTitle, setSearchTitle] = React.useState('');

  const { data, isFetching } = useGetBlogsQuery({
    page,
    limit,
    ...sort,
    ...(searchTitle && { title: searchTitle }),
  });

  const onSearchTitleChange = (value: string) => {
    setSearchTitle(value);
    onPageChange(1);
  };

  const onSortCreatedAt = (order: EOrder) => {
    onSortChange({
      sortBy: 'createdAt',
      order,
    });
  };

  return (
    <div className="container pt-2">
      <FilterBlogs
        searchTitle={searchTitle}
        onSearchTitleChange={onSearchTitleChange}
        onSortCreatedAt={onSortCreatedAt}
        sortCreatedAt={sort?.order}
      />
      <ListBlogs data={data} isFetching={isFetching} />
      <div className="d-flex justify-content-end">
        <Pagination
          totalPages={9}
          currentPage={page}
          onPageChange={(page) => {
            onPageChange(page);
          }}
        />
      </div>
    </div>
  );
};
