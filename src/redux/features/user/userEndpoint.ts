/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "../../api";

export interface IUser {
  name: string;
  username: string;
  password: string;
  wishList?: string[];
  readingList?: string[];
}

const userEndpoint = api.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data: IUser) => ({
        url: "/user/signup",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data: Partial<IUser>) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
    }),
    addToWishList: builder.mutation({
      query: ({ bookId, userId }) => ({
        url: `/user/addToWishList`,
        method: "POST",
        body: { bookId, userId },
      }),
    }),
    addToReadingList: builder.mutation({
      query: ({ bookId, userId }) => ({
        url: `/user/addToReadingList`,
        method: "POST",
        body: { bookId, userId },
      }),
    }),
    markComplete: builder.mutation({
      query: ({ bookId, userId }) => ({
        url: `/user/makeBookFinished`,
        method: "POST",
        body: { bookId, userId },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useAddToReadingListMutation,
  useAddToWishListMutation,
  useMarkCompleteMutation,
} = userEndpoint;
