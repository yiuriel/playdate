import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { Profile } from "./profile.types";

const mockProfile: Profile = {
  id: "1",
  firstName: "John",
  lastName: "Doe",
  age: 30,
  gender: "male",
  sexualOrientation: "straight",
  interests: ["reading", "gaming"],
  location: "New York",
  photos: ["http://example.com/photo1.jpg"],
  bio: "Software developer and tech enthusiast.",
  email: "john@example",
};

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getProfile: builder.query<Profile, void>({
      queryFn: async () => ({ data: mockProfile }),
    }),
  }),
});

export const { useGetProfileQuery, useLazyGetProfileQuery } = profileApi;
