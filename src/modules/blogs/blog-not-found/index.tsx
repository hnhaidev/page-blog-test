import React from 'react';
import { Link } from 'react-router-dom';

import { StyledBlogNotFound } from './style';
import { SITE_MAP } from '../../../utils/constants/site-map';

export const BlogNotFound = () => {
  return (
    <StyledBlogNotFound>
      <h3>Blog is not found!</h3>
      <Link to={SITE_MAP.HOME.path} className="btn btn-light">
        Back to home
      </Link>
    </StyledBlogNotFound>
  );
};
