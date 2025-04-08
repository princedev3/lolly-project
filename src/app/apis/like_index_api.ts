import { Product } from "@prisma/client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type likeType = {
  message: string[];
};
export const likeApi = createApi({
  reducerPath: "likeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL_API as string,
  }),
  tagTypes: ["Liked"],
  endpoints: (builder) => ({
    createLike: builder.mutation({
      query: (likeData) => ({
        url: "/like",
        method: "POST",
        body: likeData,
      }),
      invalidatesTags: ["Liked"],
    }),
    getLikes: builder.query<likeType, null>({
      query: () => ({
        url: "/like",
        method: "GET",
      }),
    }),
    getLikedProducts: builder.query<{ message: Product[] }, null>({
      query: () => ({
        url: "/like/liked-product",
        method: "GET",
      }),
      providesTags: ["Liked"],
    }),
  }),
});

export const {
  useCreateLikeMutation,
  useGetLikesQuery,
  useGetLikedProductsQuery,
} = likeApi;
