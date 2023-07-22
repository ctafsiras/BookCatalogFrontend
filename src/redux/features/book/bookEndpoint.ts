import { api } from "../../api";

const bookEndpoint = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/book",
    }),
    // getBook: builder.query<Book, string>({
    //   query: (id) => `/books/${id}`,
    // }),

    // addBook: builder.mutation<Book, Book>({
    //   query: (book) => ({
    //     url: "/books",
    //     method: "POST",
    //     body: book,
    //   }),
    // }),

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

export const { useGetBooksQuery } = bookEndpoint;
