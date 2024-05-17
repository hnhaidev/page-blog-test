import React from 'react';

import { StyledItemBlog } from './style';
import { TBlog } from '../../../utils/types/blog';
import { formatDate } from '../../../utils/helpers/date';
import { Link, generatePath } from 'react-router-dom';
import { SITE_MAP } from '../../../utils/constants/site-map';

export const ItemBlog = ({ item }: { item: TBlog }) => {
  return (
    <StyledItemBlog className="card mb-4 shadow-sm w-100">
      <img
        src={item.thumbnail}
        className="card-thumbnail"
        height={225}
        alt="thumbnail"
        loading="lazy"
      />
      <div className="card-body card-content">
        <p className="card-text item-title">{item.title}</p>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">{formatDate(item.createdAt)}</small>

          <div className="btn-group">
            <Link
              to={generatePath(SITE_MAP.BLOGS.VIEW.path, { id: item.id })}
              type="button"
              className="btn btn-sm btn-outline-secondary"
            >
              View
            </Link>
            <Link
              to={generatePath(SITE_MAP.BLOGS.EDIT.path, { id: item.id })}
              type="button"
              className="btn btn-sm btn-outline-secondary"
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    </StyledItemBlog>
  );
};
