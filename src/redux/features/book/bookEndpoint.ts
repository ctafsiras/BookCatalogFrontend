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

    // updateBook: builder.mutation<Book, Book>({
    //   query: (book) => ({
    //     url: `/books/${book.id}`,
    //     method: "PUT",

    //     body: book,
    //   }),
    // }),

    // deleteBook: builder.mutation<Book, string>({
    //   query: (id) => ({
    //     url: `/books/${id}`,

    //     method: "DELETE",
    //   }),
    // }),
  }),
});

export const { useGetBooksQuery, useGetRecentBooksQuery, useAddBookMutation, useGetSingleBookQuery } =
  bookEndpoint;
