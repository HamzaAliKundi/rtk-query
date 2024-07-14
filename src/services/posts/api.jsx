import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../const';

export const postApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: '/posts',
        method: 'GET',
      }),
      providesTags: [{ type: 'Post', id: 'LIST' }],
    }),
    addPost: builder.mutation({
      query: (newPost) => ({
        url: '/posts',
        method: 'POST',
        body: newPost,
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation, useDeletePostMutation } =
  postApi;
