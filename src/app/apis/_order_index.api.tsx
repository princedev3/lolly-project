import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL_API as string,
  }),
  tagTypes: ["Order"],
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (orderDetails) => ({
        url: "/order/order-queries",
        method: "POST",
        body: orderDetails,
      }),
      invalidatesTags: ["Order"],
    }),
    updateOrder: builder.mutation({
      query: ({ newStatus, id }) => ({
        url: `/order/order-queries/${id}`,
        method: "PUT",
        body: JSON.stringify(newStatus),
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Order", id }],
    }),
    getAllOrder: builder.query({
      query: ({ page, search }) => ({
        url: `/order/order-queries?page=${page}&search=${search}`,
        method: "GET",
      }),
      providesTags: ["Order"],
    }),
    fetchSingleOrder: builder.query({
      query: (orderId) => ({
        url: `/order/order-queries/${orderId}`,
        method: "GET",
      }),
    }),
    deleteSingleOrder: builder.mutation({
      query: (orderId) => ({
        url: `/order/order-queries/${orderId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Order"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetAllOrderQuery,
  useFetchSingleOrderQuery,
  useDeleteSingleOrderMutation,
  useUpdateOrderMutation,
} = orderApi;
