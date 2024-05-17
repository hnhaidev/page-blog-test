import React from 'react';
import { debounce } from 'lodash';

import { DropdownItem, Input } from '../../../components';
import { itemsSort } from '../../../utils/constants/blog';
import { EOrder } from '../../../utils/constants/sort';

interface FilterBlogsProps {
  onSearchTitleChange: (value: string) => void;
  searchTitle?: string;
  onSortCreatedAt: (order: EOrder) => void;
  sortCreatedAt?: EOrder;
}

export const FilterBlogs: React.FC<FilterBlogsProps> = ({
  onSearchTitleChange,
  searchTitle,
  sortCreatedAt,
  onSortCreatedAt,
}) => {
  const [valueSearch, setValueSearch] = React.useState(searchTitle);

  const handleSearch = (value: string) => {
    onSearchTitleChange(value.trim());
    setValueSearch(value?.trim());
  };

  const debouncedSearch = React.useMemo(() => debounce(handleSearch, 500), []);

  return (
    <div className="mb-4 d-flex flex-column">
      <div className="d-flex flex-column flex-md-row justify-content-between" style={{ gap: 8 }}>
        <Input
          value={valueSearch}
          name="search"
          placeholder="Search..."
          onChange={(e) => {
            const value = e.currentTarget.value;
            setValueSearch(value);

            debouncedSearch(value);
          }}
        />
        <div className="d-flex justify-content-end">
          <DropdownItem
            items={itemsSort}
            txtAction={
              <>
                Sort by: <b>{itemsSort[0].label}</b>
              </>
            }
            valueActive={sortCreatedAt}
            onChange={(value) => onSortCreatedAt(value as EOrder)}
          />
        </div>
      </div>
    </div>
  );
};
