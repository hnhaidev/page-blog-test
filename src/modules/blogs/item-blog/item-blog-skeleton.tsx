import React from 'react';
import { StyledItemBlog } from './style';
import { Skeleton } from '../../../components/skeleton';

export const ItemBlogSkeleton = () => {
  return (
    <StyledItemBlog className="card mb-4 shadow-sm w-100">
      <Skeleton className="card-thumbnail" />
      <div className="card-body card-content">
        <Skeleton className="card-text item-title" />
        <div className="d-flex justify-content-between align-items-center">
          <Skeleton className="card-date" />
        </div>
      </div>
    </StyledItemBlog>
  );
};
