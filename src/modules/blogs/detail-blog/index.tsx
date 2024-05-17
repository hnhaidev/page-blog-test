import React from 'react';

import { TBlog } from '../../../utils/types/blog';
import { StyleDetailBlog } from './style';

export const DetailBlog = ({ data }: { data: TBlog }) => {
  return (
    <StyleDetailBlog>
      <div className="detail-thumbnail ">
        <img src={data.thumbnail} loading="lazy" alt="detail-thumbnail" />
      </div>
      <h4 className="py-2">{data.title}</h4>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </StyleDetailBlog>
  );
};
