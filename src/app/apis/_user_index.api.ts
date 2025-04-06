import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL_API as string,
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (userData) => {
        return {
          url: "/user/register",
          method: "POST",
          body: userData,
        };
      },
    }),
    verifyRegisterEmail: builder.mutation({
      query: (userData) => ({
        url: "/user/verify-register-email",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: userData,
      }),
    }),
  }),
});

export const { useCreateUserMutation, useVerifyRegisterEmailMutation } =
  userApi;
