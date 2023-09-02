import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`,
    prepareHeaders: (headers => {
      headers.set('accept', '*/*'),
        headers.set('accept', 'application/json'),
        headers.set('Access-Control-Allow-Origin', '*')
      return headers;
    })
  } as FetchBaseQueryArgs),
  tagTypes: ['LoaningCards'],
  endpoints: (build) => ({
    sendApplicationChoice: build.mutation({
      query: (body) => ({
        url: 'application/apply',
        method: 'POST',
        body
      })
    })
  })
});

export const {useSendApplicationChoiceMutation} = apiSlice;