import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`,
    prepareHeaders: (headers => {
      headers.set('accept', '*/*'),
        headers.set('accept', 'application/json')
        // headers.set('Access-Control-Allow-Origin', '*')
      return headers;
    })
  } as FetchBaseQueryArgs),
  tagTypes: ['LoaningCards'],
  endpoints: (build) => ({
    sendApplicationChoice: build.mutation({
      query: (body) => ({
        url: '/application/apply',
        method: 'POST',
        body
      })
    }),
    sendFormScoring: build.mutation({
      query: (body, appId) => ({
        url: `/application/registration/${appId}`,
        method: 'POST',
        body
      })
    }),
    getPaymentSchedule: build.query({
      query: (appId) => `/admin/application/${appId}`
    }),
    sendDocument: build.mutation({
      query: (appId) => ({
        url: `/document/${appId}`,
        method: 'POST',
      })
    }),
    sendSigning: build.mutation({
        query: (appId) => ({
          url: `/document/${appId}/sign`,
          method: 'POST',
        })
      }),
    sendCode: build.mutation({
      query: (appId, body) => ({
        url: `/document/${appId}/sign/code`,
        method: 'POST',
        body
      })
    })
  })
});

export const {useSendApplicationChoiceMutation, useSendFormScoringMutation, useGetPaymentScheduleQuery, useSendDocumentMutation, useSendSigningMutation, useSendCodeMutation } = apiSlice;