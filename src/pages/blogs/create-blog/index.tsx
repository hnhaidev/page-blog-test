import React from 'react';

import { UpsertBlog } from '../../../modules/blogs';
import { Breadcrumb, Title } from '../../../components';
import { itemsBreadcrumbCreate } from '../../../utils/constants/blog';

const CreateBlogPage = () => {
  return (
    <div className="container">
      <Title>Create a new post</Title>
      <Breadcrumb items={itemsBreadcrumbCreate} />
      <UpsertBlog />
    </div>
  );
};

export default CreateBlogPage;
