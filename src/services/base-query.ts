import { fetchBaseQuery } from '@reduxjs/toolkit/query';

const baseUrl = process.env.REACT_APP_API;

export const baseNoAuthQuery = fetchBaseQuery({
  baseUrl,
  cache: 'no-cache',
});
