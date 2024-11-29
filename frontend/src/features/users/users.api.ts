import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "./users.types";
import { mockUsers } from "../mocks/users.mocks";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      queryFn: async () => ({ data: mockUsers }),
    }),
    getUser: builder.query<User, string>({
      queryFn: async (id) => {
        const foundUser = mockUsers.find((user) => user.id === id);
        if (!foundUser) {
          return { error: { message: "User not found" } };
        }
        return { data: foundUser };
      },
    }),
  }),
});

export const { useGetUsersQuery, useLazyGetUserQuery, useGetUserQuery } =
  usersApi;
