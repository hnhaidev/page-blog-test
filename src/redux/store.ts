import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { BlogAPI } from '../services';

const rootReducer = combineReducers({
  [BlogAPI.reducerPath]: BlogAPI.reducer,
});

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(BlogAPI.middleware),
  });
}

const store = makeStore();

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export default store;
