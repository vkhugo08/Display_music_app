import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam.p.rapidapi.com',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key','b4f217c2d9msh0e87b57207cccc5p1d0ab1jsne5efcf489c2d')
                return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => '/charts/track' }),
        })
    });

    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi;