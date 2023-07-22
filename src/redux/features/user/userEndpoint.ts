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
  }),
});

export const { useLoginMutation, useSignupMutation } = userEndpoint;
