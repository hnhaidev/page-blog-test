import React from 'react';
import { useRoutes } from 'react-router-dom';

import {
  BlogsPage,
  CreateBlogPage,
  EditBlogPage,
  HomePage,
  NotFoundPage,
  ViewBlogPage,
} from '../pages';
import { SITE_MAP } from '../utils/constants/site-map';
import { Layout } from '../components';

const Router = () => {
  const routes = useRoutes([
    {
      element: <Layout />,
      children: [
        {
          path: SITE_MAP.HOME.path,
          element: <HomePage />,
        },
        {
          path: SITE_MAP.BLOGS.path,
          element: <BlogsPage />,
        },
        {
          path: SITE_MAP.BLOGS.CREATE.path,
          element: <CreateBlogPage />,
        },
        {
          path: SITE_MAP.BLOGS.EDIT.path,
          element: <EditBlogPage />,
        },
        {
          path: SITE_MAP.BLOGS.VIEW.path,
          element: <ViewBlogPage />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);
  return routes;
};

export default Router;
