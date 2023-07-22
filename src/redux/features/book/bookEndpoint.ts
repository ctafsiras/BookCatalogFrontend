/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "../../api";

const bookEndpoint = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/book",
    }),
    getRecentBooks: builder.query({
      query: () => "/book/recent",
    }),
    getSingleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),

    addBook: builder.mutation({
      query: (book) => ({
        url: "/book/create",
        method: "POST",
        body: book,
      }),
    }),

    updateBook: builder.mutation({
      query: ({ id, book }) => ({
        url: `/book/${id}`,
        method: "PATCH",
        body: book,
      }),
    }),
    addReview: builder.mutation({
      query: ({ id, review }) => ({
        url: `/book/add-review/${id}`,
        method: "PATCH",
        body: { review },
      }),
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetRecentBooksQuery,
  useAddBookMutation,
  useGetSingleBookQuery,
  useUpdateBookMutation,
  useAddReviewMutation,
  useDeleteBookMutation,
} = bookEndpoint;
