import { createApi } from '@reduxjs/toolkit/query/react';

import { baseNoAuthQuery } from './base-query';

export const BlogAPI = createApi({
  baseQuery: baseNoAuthQuery,
  tagTypes: ['GET_BLOGS'],
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: (params) => ({
        url: '/blogs',
        params,
      }),
      providesTags: ['GET_BLOGS'],
    }),
    getBlogById: builder.query({
      query: (id) => ({
        url: `/blogs/${id}`,
      }),
    }),
    createBlog: builder.mutation({
      query: (body) => ({
        url: '/blogs',
        body,
        method: 'POST',
      }),
      invalidatesTags: ['GET_BLOGS'],
    }),
    editBlog: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/blogs/${id}`,
        body,
        method: 'POST',
      }),
      invalidatesTags: ['GET_BLOGS'],
    }),
  }),
});

export const { useGetBlogsQuery, useGetBlogByIdQuery, useEditBlogMutation, useCreateBlogMutation } =
  BlogAPI;
