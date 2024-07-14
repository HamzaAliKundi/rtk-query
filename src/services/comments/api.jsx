import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../const';

export const commentsApi = createApi({
  reducerPath: 'comments',
  baseQuery: fetchBaseQuery({ baseUrl }), // Replace with your API base URL
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => '/comments',
    }),
    // Add more endpoints as needed
  }),
});

export const { useGetCommentsQuery } = commentsApi;
