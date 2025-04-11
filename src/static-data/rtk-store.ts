import { likeApi } from "@/app/apis/like_index_api";
import { newsletterApi } from "@/app/apis/_newsletter_index_api";
import { orderApi } from "@/app/apis/_order_index.api";
import { productApi } from "@/app/apis/_product_index.api";
import { userApi } from "@/app/apis/_user_index.api";
import { configureStore } from "@reduxjs/toolkit";
import { commentApi } from "@/app/apis/_comment_index_api";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [newsletterApi.reducerPath]: newsletterApi.reducer,
    [likeApi.reducerPath]: likeApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(commentApi.middleware)
      .concat(productApi.middleware)
      .concat(newsletterApi.middleware)
      .concat(likeApi.middleware)
      .concat(orderApi.middleware),
});
