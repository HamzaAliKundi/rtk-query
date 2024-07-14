import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { postApi } from '../services/posts/api';
import { commentsApi } from '../services/comments/api';

export const store = configureStore({
  reducer: {
    // Add each API's reducer to the store
    [postApi.reducerPath]: postApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware, commentsApi.middleware),
});

setupListeners(store.dispatch);

export default store;
