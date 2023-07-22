import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-catalog-backend-gold.vercel.app",
  }),
  //   tagTypes: ["comment"],
  endpoints: () => ({}),
});