import React from 'react';
import { useParams } from 'react-router-dom';

import { Breadcrumb, Title } from '../../../components';
import { BlogNotFound, UpsertBlog } from '../../../modules/blogs';
import { useGetBlogByIdQuery } from '../../../services';
import { itemsBreadcrumbEdit } from '../../../utils/constants/blog';

const EditBlogPage = () => {
  const { id } = useParams();

  const { data } = useGetBlogByIdQuery(id, { skip: !id });

  return (
    <div className="container">
      <Title>Edit</Title>
      <Breadcrumb items={itemsBreadcrumbEdit} />
      {data ? <UpsertBlog item={data} /> : <BlogNotFound />}
    </div>
  );
};

export default EditBlogPage;
