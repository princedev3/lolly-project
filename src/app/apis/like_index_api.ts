import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const likeApi = createApi({
  reducerPath: "likeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BASE_URL_API as string,
  }),
  endpoints: (builder) => ({
    createLike: builder.mutation({
      query: (likeData) => ({
        url: "/like",
        method: "POST",
        body: likeData,
      }),
    }),
  }),
});

export const { useCreateLikeMutation } = likeApi;
