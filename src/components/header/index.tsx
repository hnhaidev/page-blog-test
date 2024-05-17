import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SITE_MAP } from '../../utils/constants/site-map';

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <header>
      <div className="navbar navbar-dark bg-dark shadow-sm" style={{ height: 60 }}>
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            Home
          </Link>

          {![SITE_MAP.BLOGS.CREATE.path].includes(pathname) && (
            <Link to={SITE_MAP.BLOGS.CREATE.path} className="btn btn-light">
              New Blog
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
