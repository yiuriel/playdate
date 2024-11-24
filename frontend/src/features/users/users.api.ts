import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "./users.types";

const mockUsers: User[] = [
  {
    id: "1",
    firstName: "Alice",
    lastName: "Smith",
    email: "alice@example.com",
    age: 28,
    gender: "female",
    location: "Los Angeles",
    photos: ["https://picsum.photos/200"],
    bio: "Music lover and avid traveler. When I'm not working, you can find me singing along to my favorite tunes or planning my next adventure.",
    interests: ["music", "traveling", "photography"],
    sexualOrientation: "bisexual",
  },
  {
    id: "2",
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob@example.com",
    age: 34,
    gender: "male",
    location: "San Francisco",
    photos: ["https://picsum.photos/201"],
    bio: "Tech enthusiast and professional gamer. I'm always looking for new gaming communities to join and new tech to explore.",
    interests: ["gaming", "technology", "hiking"],
    sexualOrientation: "straight",
  },
  {
    id: "3",
    firstName: "Charlie",
    lastName: "Williams",
    email: "charlie@example.com",
    age: 23,
    gender: "non-binary",
    location: "New York",
    photos: ["https://picsum.photos/202"],
    bio: "Writer and coffee aficionado. I'm always on the lookout for new coffee shops to write in and new people to share my writing with.",
    interests: ["writing", "coffee", "reading"],
    sexualOrientation: "bisexual",
  },
  {
    id: "4",
    firstName: "Dana",
    lastName: "Davis",
    email: "dana@example.com",
    age: 29,
    gender: "female",
    location: "Chicago",
    photos: ["https://picsum.photos/203"],
    bio: "Fitness guru and health advocate. I'm passionate about helping others achieve their fitness goals and spreading the importance of taking care of one's body.",
    interests: ["fitness", "nutrition", "yoga"],
    sexualOrientation: "straight",
  },
  {
    id: "5",
    firstName: "Eli",
    lastName: "Miller",
    email: "eli@example.com",
    age: 31,
    gender: "male",
    location: "Austin",
    photos: ["https://picsum.photos/204"],
    bio: "Food blogger and culinary explorer. I love trying new recipes and experimenting with new flavors. If you have a favorite dish, I'd love to hear about it!",
    interests: ["cooking", "food", "travel"],
    sexualOrientation: "bisexual",
  },
];

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
