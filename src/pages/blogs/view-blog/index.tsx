import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { useGetBlogByIdQuery } from '../../../services';
import { SpinnerPage } from '../../../components';
import { SITE_MAP } from '../../../utils/constants/site-map';
import { DetailBlog } from '../../../modules/blogs/detail-blog';
import { BlogNotFound } from '../../../modules/blogs';

const ViewBlogPage = () => {
  const { id } = useParams();

  const { data, isFetching, isSuccess } = useGetBlogByIdQuery(id, { skip: !id });

  return isFetching ? (
    <SpinnerPage />
  ) : (
    <div className="container d-flex flex-column">
      <div className="mb-2">
        <Link to={SITE_MAP.HOME.path} className="btn btn-light">
          Back
        </Link>
      </div>

      {isSuccess ? <DetailBlog data={data} /> : <BlogNotFound />}
    </div>
  );
};

export default ViewBlogPage;
