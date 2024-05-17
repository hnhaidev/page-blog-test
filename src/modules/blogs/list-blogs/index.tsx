import React from 'react';

import { TBlog } from '../../../utils/types/blog';
import { ItemBlog } from '../item-blog';
import { ItemBlogSkeleton } from '../item-blog/item-blog-skeleton';
import { BlogNotFound } from '../blog-not-found';

interface ListBlogsProps {
  data?: TBlog[];
  isFetching?: boolean;
}

export const ListBlogs: React.FC<ListBlogsProps> = ({ data, isFetching }) => {
  return (
    <ul className="list-unstyled row">
      {isFetching ? (
        Array.from({ length: 6 }).map((_, index: number) => (
          <li className="media col-md-6 col-lg-4" key={index}>
            <ItemBlogSkeleton />
          </li>
        ))
      ) : data && data?.length > 0 ? (
        data?.map((item: TBlog, index: number) => (
          <li className="media col-md-6 col-lg-4" key={item.id}>
            <ItemBlog item={item} />
          </li>
        ))
      ) : (
        <BlogNotFound />
      )}
    </ul>
  );
};
